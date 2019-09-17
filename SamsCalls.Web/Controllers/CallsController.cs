using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SamsCalls.Data;
using SamsCalls.Web.Models;

namespace SamsCalls.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CallsController : ControllerBase
    {
        private string _connectionString;

        public CallsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public Call Add(Call call)
        {
            var repo = new CallRepository(_connectionString);
            repo.Add(call);
            return call;
        }

        [HttpGet]
        [Route("get")]
        public IEnumerable<Call> GetCalls()
        {
            var repo = new CallRepository(_connectionString);
            return repo.GetCalls();
        }

        [HttpPost]
        [Route("delete")]
        public void DeleteMany(DeleteViewModel dvm)
        {
            var repo = new CallRepository(_connectionString);
            repo.DeleteMany(dvm.CallIds);
        }

        [HttpGet]
        [Route("getbyid/{id}")]
        public Call GetById(int id)
        {
            var repo = new CallRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost]
        [Route("update")]
        public void Update(Call call)
        {
            var repo = new CallRepository(_connectionString);
            repo.Update(call);
        }
     
    }
}