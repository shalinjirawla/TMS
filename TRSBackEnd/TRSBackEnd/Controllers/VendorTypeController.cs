using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class VendorTypeController : ApiController
    {
        public readonly IVendorTypeRepo typeRepo;
        public VendorTypeController(IVendorTypeRepo vendorType)
        {
            typeRepo = vendorType;
        }
        public IHttpActionResult GetVendorTypes()
        {
            var data = typeRepo.GetVendorTypes();
            return Ok(data);
        }
        public IHttpActionResult SaveVendorType(VendorTypeModel model)
        {
            var data = typeRepo.SaveVendorType(model);
            return Ok(data);
        }
        public IHttpActionResult GetTypeModel(int id)
        {
            var data = typeRepo.GetTypeModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateVendorType(VendorTypeModel model)
        {
            var data = typeRepo.UpdateVendorType(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteVendorType(int id)
        {
            var data = typeRepo.DeleteVendorType(id);
            return Ok(data);
        }
    }
}
