using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SamsCalls.Data
{
  public  class CallRepository
    {
        private string _connectionString;

        public CallRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Call> GetCalls()
        {
            using (var context = new CallContext(_connectionString))
            {
                return context.Calls.ToList();
            }
        }

        public void Add(Call call)
        {
            using (var context = new CallContext(_connectionString))
            {
                context.Calls.Add(call);
                context.SaveChanges();
            }
        }

        public void DeleteMany(IEnumerable<int> ids)
        {
            using (var context = new CallContext(_connectionString))
            {
                var calls = ids.Select(i => new Call { Id = i });
                context.Calls.RemoveRange(calls);
                context.SaveChanges();
            }
        }

        public Call GetById(int id)
        {
            using (var context = new CallContext(_connectionString))
            {
                return context.Calls.FirstOrDefault(p => p.Id == id);
            }
        }

        public void Update(Call call)
        {
            using (var context = new CallContext(_connectionString))
            {
                context.Calls.Attach(call);
                context.Entry(call).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}
