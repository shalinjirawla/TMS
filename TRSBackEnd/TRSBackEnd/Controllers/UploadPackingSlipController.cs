using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.DB;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class UploadPackingSlipController : ApiController
    {
        private readonly IUploadPackingSlipRepo uploadPackingSlip;
        public UploadPackingSlipController(IUploadPackingSlipRepo slipRepo)
        {
            uploadPackingSlip = slipRepo;
        }

        public IHttpActionResult GetUploadPackingSlipModels()
        {
            var data = uploadPackingSlip.GetUploadPackingSlipModels();
            return Ok(data);
        }

        public IHttpActionResult SaveUploadPackingSlip(UploadPackingSlipModel model)
        {
            var data = uploadPackingSlip.SaveUploadPackingSlip(model);
            return Ok(data);
        }
        
        public IHttpActionResult GetUploadPackingSlipModel(int id)
        {
            var data = uploadPackingSlip.GetUploadPackingSlipModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateUploadPackingSlip(UploadPackingSlipModel model)
        {
            var data = uploadPackingSlip.UpdateUploadPackingSlip(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteUploadPackingSlip(int id)
        {
            var data = uploadPackingSlip.DeleteUploadPackingSlip(id);
            return Ok(data);
        }
    }
}
