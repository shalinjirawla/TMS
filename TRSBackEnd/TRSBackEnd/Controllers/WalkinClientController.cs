using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class WalkinClientController : ApiController
    {
        private IWalkinClientRepo WalkInClientRepo;
        public WalkinClientController(IWalkinClientRepo _InClientRepo)
        {
            WalkInClientRepo = _InClientRepo;
        }
        public IHttpActionResult GetWalkInClients()
        {
            var data = WalkInClientRepo.GetWalkInClients();
            return Ok(data);
        }
        public IHttpActionResult SaveWalkInClient(WalkinClientModel model)
        {
            var data = WalkInClientRepo.SaveWalkInClient(model);
            return Ok(data);
        }
        public IHttpActionResult GetWalkinClient(int id)
        {
            var data = WalkInClientRepo.GetWalkinClient(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateWalkInClient(WalkinClientModel model)
        {
            var data = WalkInClientRepo.UpdateWalkInClient(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteWalkInClient(int id)
        {
            var data = WalkInClientRepo.DeleteWalkInClient(id);
            return Ok(data);
        }
    }
}
