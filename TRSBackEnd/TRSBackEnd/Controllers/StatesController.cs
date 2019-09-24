using System.Web.Http;
using Repository.Interface;
using System.Threading;
using System.Collections.Generic;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class StatesController : ApiController
    {
        private IStateRepo stateRepo;
        public StatesController(IStateRepo _stateRepo)
        {
            stateRepo = _stateRepo;
        }
        public IHttpActionResult getStates()
        {
            var data = stateRepo.GetStates();
            return Ok(data);
        }

        public IHttpActionResult deleteState(int id)
        {
            var data = stateRepo.DeleteData(id);
            return Ok(data);
        }
        public IHttpActionResult saveData(StateModel state)
        {
            var data = stateRepo.SaveData(state);
            return Ok(data);
        }
        public IHttpActionResult updateData(StateModel state)
        {
            var data = stateRepo.UpdateData(state);
            return Ok(data);
        }
        public IHttpActionResult getState(int id)
        {
            var data = stateRepo.getState(id);
            return Ok(data);
        }
    }
}
