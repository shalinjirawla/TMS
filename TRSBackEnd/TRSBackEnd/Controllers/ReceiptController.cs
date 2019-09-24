using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;
using Repository.Interface;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class ReceiptController : ApiController
    {
        private readonly IReceiptRepo receiptRepo;
        public ReceiptController(IReceiptRepo receipt)
        {
            receiptRepo = receipt;
        }
        public IHttpActionResult GetReceiptModels()
        {
            var data = receiptRepo.GetReceiptModels();
            return Ok(data);
        }
        public IHttpActionResult SaveReceipt(ReceiptModel model)
        {
            var data = receiptRepo.SaveReceipt(model);
            return Ok(data);
        }
        public IHttpActionResult GetReceiptModel(int id)
        {
            var data = receiptRepo.GetReceiptModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateReceipt(ReceiptModel model)
        {
            var data = receiptRepo.UpdateReceipt(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteReceipt(int id)
        {
            var data = receiptRepo.DeleteReceipt(id);
            return Ok(data);
        }
    }
}
