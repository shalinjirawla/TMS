using Repository.Interface;
using System.Web.Http;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class RegularClientController : ApiController
    {
        private readonly IRegularClientRepo repo;
        public RegularClientController(IRegularClientRepo _repo)
        {
            repo = _repo;
        }
        public IHttpActionResult GetRegularClients()
        {
            var Data = repo.GetRegularClients();
            return Ok(Data);
        }
        public IHttpActionResult SaveRegularClient(RegularClientModel model)
        {
            var Data = repo.SaveRegularClient(model);
            return Ok(Data);
        }
        public IHttpActionResult DeleteRegularClient(int id)
        {
            var Data = repo.DeleteRegularClient(id);
            return Ok(Data);
        }
        public IHttpActionResult UpdateRegularClient(RegularClientModel model)
        {
            var Data = repo.UpdateRegularClient(model);
            return Ok(Data);
        }
        public IHttpActionResult GetRegularClient(int id)
        {
            var Data = repo.GetRegularClient(id);
            return Ok(Data);
        }
		public IHttpActionResult GetClientcodeDetails(string name)
		{
			var data = repo.Getclientcode(name);
			return Ok(data);
		}
    }
}
