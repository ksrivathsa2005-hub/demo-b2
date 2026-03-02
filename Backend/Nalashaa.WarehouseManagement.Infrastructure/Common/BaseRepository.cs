using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using Nalashaa.WarehouseManagement.Domain.Repositories;

namespace Nalashaa.WarehouseManagement.Infrastructure.Common;

public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
{
    protected readonly IUnitOfWork _unitOfWork;
    protected readonly string _tableName;

    protected BaseRepository(IUnitOfWork unitOfWork, string tableName)
    {
        _unitOfWork = unitOfWork;
        _tableName = tableName;
    }

    public virtual async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _unitOfWork.Connection.QueryAsync<T>(
            $"SELECT * FROM {_tableName}", 
            transaction: _unitOfWork.Transaction);
    }

    public virtual async Task<T?> GetByIdAsync(object id)
    {
        return await _unitOfWork.Connection.QuerySingleOrDefaultAsync<T>(
            $"SELECT * FROM {_tableName} WHERE Id = @Id", 
            new { Id = id }, 
            transaction: _unitOfWork.Transaction);
    }

    public abstract Task<int> AddAsync(T entity);
    public abstract Task<int> UpdateAsync(T entity);

    public virtual async Task<int> DeleteAsync(object id)
    {
        return await _unitOfWork.Connection.ExecuteAsync(
            $"DELETE FROM {_tableName} WHERE Id = @Id", 
            new { Id = id }, 
            transaction: _unitOfWork.Transaction);
    }
}
