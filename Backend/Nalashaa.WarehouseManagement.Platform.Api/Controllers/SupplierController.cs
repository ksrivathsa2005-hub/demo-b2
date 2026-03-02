using Microsoft.AspNetCore.Mvc;
using Nalashaa.WarehouseManagement.Domain.Entities.Master;
using Nalashaa.WarehouseManagement.Service.Interfaces.Master;

namespace Nalashaa.WarehouseManagement.Platform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SupplierController : ControllerBase
{
    private readonly ISupplierService _service;
    public SupplierController(ISupplierService service) => _service = service;

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id) => Ok(await _service.GetByIdAsync(id));

    [HttpPost]
    public async Task<IActionResult> Save(Supplier entity) => Ok(await _service.SaveAsync(entity));

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id) => Ok(await _service.DeleteAsync(id));
}
