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
    public class LedgerGroupFinanceController : ApiController
    {
        private readonly ILedgerGroupFinanceRepo groupFinanceRepo;
        public LedgerGroupFinanceController(ILedgerGroupFinanceRepo ledgerGroup)
        {
            groupFinanceRepo = ledgerGroup;
        } 

        public IHttpActionResult GetLedgerGroupFinanceModels()
        {
            var data = groupFinanceRepo.GetLedgerGroupFinanceModels();
            return Ok(data);
        }

        public IHttpActionResult SaveLedgerGroupFinance(LedgerGroupFinanceModel model)
        {
            var data = groupFinanceRepo.SaveLedgerGroupFinance(model);
            return Ok(data);
        }

        public IHttpActionResult GetLedgerGroupFinanceModel(int id)
        {
            var data = groupFinanceRepo.GetLedgerGroupFinanceModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateLedgerGroupFinance(LedgerGroupFinanceModel model)
        {
            var data = groupFinanceRepo.UpdateLedgerGroupFinance(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteLedgerGroupFinance(int id)
        {
            var data = groupFinanceRepo.DeleteLedgerGroupFinance(id);
            return Ok(data);
        }
    }
}
