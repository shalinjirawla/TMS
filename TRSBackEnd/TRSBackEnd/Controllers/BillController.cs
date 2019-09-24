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
    public class BillController : ApiController
    {
        private readonly IBillRepo billRepo;
        public BillController(IBillRepo bill)
        {
            billRepo = bill;
        }

        public IHttpActionResult GetBillModels()
        {
            var data = billRepo.GetBillModels();
            return Ok(data);
        }

        public IHttpActionResult SaveBill(BillModel model)
        {
            var data = billRepo.SaveBill(model);
            return Ok(data);
        }

        public IHttpActionResult GetBillRepo(int id)
        {
            var data = billRepo.GetBillRepo(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateBill(BillModel model)
        {
            var data = billRepo.UpdateBill(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteBill(int id)
        {
            var data = billRepo.DeleteBill(id);
            return Ok(data);
        }
    }
}
