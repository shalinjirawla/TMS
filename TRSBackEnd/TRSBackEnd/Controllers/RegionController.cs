using Repository.Interface;
using Repository.Model;
using System.Web.Http;

namespace TRSBackEnd.Controllers
{
    public class RegionController : ApiController
    {
        private readonly IRegionRepo regionRepo;
        public RegionController(IRegionRepo _regionRepo)
        {
            regionRepo = _regionRepo;
        }

        public IHttpActionResult GetRegions()
        {
            var Data = regionRepo.GetRegions();
            return Ok(Data);
        }

        public IHttpActionResult GetRegion(int id)
        {
            var Data = regionRepo.getRegion(id);
            return Ok(Data);
        }

        public IHttpActionResult DeleteRegion(int id)
        {
            var Data = regionRepo.DeleteRegion(id);
            return Ok(Data);
        }
        public IHttpActionResult SaveRegion(RegionModel model)
        {
            var Data = regionRepo.SaveRegion(model);
            return Ok(Data);
        }
        public IHttpActionResult UpdateRegion(RegionModel model)
        {
            var Data = regionRepo.UpdateRegion(model);
            return Ok(Data);
        }
    }
}
