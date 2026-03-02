using System.Data;

namespace Nalashaa.WarehouseManagement.Infrastructure.Common;

public interface IUnitOfWork : IDisposable
{
    IDbConnection Connection { get; }
    IDbTransaction Transaction { get; }
    void BeginTransaction();
    void Commit();
    void Rollback();
}
