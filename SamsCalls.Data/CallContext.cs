using Microsoft.EntityFrameworkCore;

namespace SamsCalls.Data
{
    public class CallContext : DbContext
    {
        private string _connectionString;

        public CallContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Call> Calls { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlServer(_connectionString);
        }
    }
}
