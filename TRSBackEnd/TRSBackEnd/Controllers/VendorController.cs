using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class VendorController : ApiController
    {
        private readonly IVendorRepo vendorRepo;
        public VendorController(IVendorRepo vendor)
        {
            vendorRepo = vendor;
        }
        public IHttpActionResult GetVendorModels()
        {
            var data = vendorRepo.GetVendorModels();
            return Ok(data);
        }
        public IHttpActionResult SaveVender(VendorModel model)
        {
            var data = vendorRepo.SaveVender(model);
            return Ok(data);
        }
        public IHttpActionResult GetVendorModel(int id)
        {
            var data = vendorRepo.GetVendorModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateVendor(VendorModel model)
        {
            var data = vendorRepo.UpdateVendor(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteVendor(int id)
        {
            var data = vendorRepo.DeleteVendor(id);
            return Ok(data);
        }
    }
}
