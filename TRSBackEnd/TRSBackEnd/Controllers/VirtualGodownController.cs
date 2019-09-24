using System.Web.Http;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class VirtualGodownController : ApiController
    {
        private readonly IVirtualGodownRepo _repo;
        public VirtualGodownController(IVirtualGodownRepo repo)
        {
            _repo = repo;
        }
        public IHttpActionResult GetVirtualGodowns()
        {
            var Data = _repo.GetVirualGodowns();
            return Ok(Data);
        }
        public IHttpActionResult SaveVirtualGodown(VirtualGodownModel model)
        {
            var Data = _repo.SaveVirualGodown(model);
            return Ok(Data);
        }
        public IHttpActionResult DeleteVirtualGodown(int id)
        {
            var Data = _repo.DeleteVirualGodown(id);
            return Ok(Data);
        }
        public IHttpActionResult UpdateVirtualGodown(VirtualGodownModel model)
        {
            var Data = _repo.UpdateVirualGodown(model);
            return Ok(Data);
        }
        public IHttpActionResult GetVirtualGodown(int id)
        {
            var Data = _repo.GetVirualGodown(id);
            return Ok(Data);
        }
    }
}
