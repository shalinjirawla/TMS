using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class DepartmentController : ApiController
    {
        public readonly IDepartmentRepo packingType;
        public DepartmentController(IDepartmentRepo typeRepo)
        {
            packingType = typeRepo;
        }
        public IHttpActionResult GetDepartments()
        {
            var data = packingType.GetDepartments();
            return Ok(data);
        }
        public IHttpActionResult SaveDepartment(DepartmentModel model)
        {
            var data = packingType.SaveDepartment(model);
            return Ok(data);
        }
        public IHttpActionResult GetDepartment(int id)
        {
            var data = packingType.GetDepartment(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateDepartment(DepartmentModel model)
        {
            var data = packingType.UpdateDepartment(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteDepartment(int id)
        {
            var data = packingType.DeleteDepartment(id);
            return Ok(data);
        }
    }
}
