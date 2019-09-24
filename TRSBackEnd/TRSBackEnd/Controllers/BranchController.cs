using Repository.Interface;
using Repository.Model;
using System.Web.Http;


namespace TRSBackEnd.Controllers
{
    public class BranchController : ApiController
    {
        private readonly IBranchRepo branch;
        public BranchController(IBranchRepo _branch)
        {
            branch = _branch;
        }
        public IHttpActionResult GetBranches()
        {
            var Data = branch.GetBranches();
            return Ok(Data);
        }
        public IHttpActionResult SaveBranch(BranchModel model)
        {
            var Data = branch.SaveBranch(model);
            return Ok(Data);
        }
        public IHttpActionResult DeleteBranch(int id)
        {
            var Data = branch.DeleteData(id);
            return Ok(Data);
        }
        public IHttpActionResult UpdateBranch(BranchModel model)
        {
            var Data = branch.UpdateBranch(model);
            return Ok(Data);
        }
        public IHttpActionResult GetBranch(int id)
        {
            var Data = branch.getBranch(id);
            return Ok(Data);
        }
    }
}
