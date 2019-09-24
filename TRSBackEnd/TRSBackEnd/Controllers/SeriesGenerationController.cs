using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class SeriesGenerationController : ApiController
    {
        private readonly ISeriesGenerationRepo seriesGenerationRepo;
        public SeriesGenerationController(ISeriesGenerationRepo seriesGeneration)
        {
            seriesGenerationRepo = seriesGeneration;
        }
        public IHttpActionResult GetSeriesGenerationModels()
        {
            var data = seriesGenerationRepo.GetSeriesGenerationModels();
            return Ok(data);
        }
        public IHttpActionResult SaveSeriesGeneration(SeriesGenerationModel model)
        {
            var data = seriesGenerationRepo.SaveSeriesGeneration(model);
            return Ok(data);
        }
        public IHttpActionResult GetSeriesGenerationModel(int id)
        {
            var data = seriesGenerationRepo.GetSeriesGenerationModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateSeriesGeneration(SeriesGenerationModel model)
        {
            var data = seriesGenerationRepo.UpdateSeriesGeneration(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteSeriesGeneration(int id)
        {
            var data = seriesGenerationRepo.DeleteSeriesGeneration(id);
            return Ok(data);
        }
        public IHttpActionResult countno()
        {
            var data = seriesGenerationRepo.countno();
            return Ok(data);
        }
    }
}
