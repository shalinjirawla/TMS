using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.DB;
using Repository.Model;
using Repository.Interface;

namespace TRSBackEnd.Controllers
{
    public class LedgerController : ApiController
    {
        private readonly ILedgerRepo ledgerRepo;
        public LedgerController(ILedgerRepo ledger)
        {
            ledgerRepo = ledger;
        }

        public IHttpActionResult GetLedgerModels()
        {
            var data = ledgerRepo.GetLedgerModels();
            return Ok(data);
        }

        public IHttpActionResult SaveLedger(LedgerModel model)
        {
            var data = ledgerRepo.SaveLedger(model);
            return Ok(data);
        }

        public IHttpActionResult GetLedgerModel(int id)
        {
            var data = ledgerRepo.GetLedgerModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateLedger(LedgerModel model)
        {
            var data = ledgerRepo.UpdateLedger(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteLedger(int id)
        {
            var data =ledgerRepo.DeleteLedger(id);
            return Ok(data);
        }
    }
}
