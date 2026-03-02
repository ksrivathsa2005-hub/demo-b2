using Microsoft.AspNetCore.Mvc;
using Nalashaa.WarehouseManagement.Domain.Entities.Master;
using Nalashaa.WarehouseManagement.Service.Interfaces.Master;

namespace Nalashaa.WarehouseManagement.Platform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FacilityTypeController : ControllerBase
{
    private readonly IFacilityTypeService _service;
    public FacilityTypeController(IFacilityTypeService service) => _service = service;

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id) => Ok(await _service.GetByIdAsync(id));

    [HttpPost]
    public async Task<IActionResult> Save(FacilityType entity) => Ok(await _service.SaveAsync(entity));

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id) => Ok(await _service.DeleteAsync(id));
}
