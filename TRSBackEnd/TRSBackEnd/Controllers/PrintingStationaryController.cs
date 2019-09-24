using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class PrintingStationaryController : ApiController
    {
        private readonly IPrintingStationaryRepo printingStationary;
        public PrintingStationaryController(IPrintingStationaryRepo stationaryRepo)
        {
            printingStationary = stationaryRepo;
        }
        public IHttpActionResult GetPrintingStationaryModels()
        {
            var data = printingStationary.GetPrintingStationaryModels();
            return Ok(data);
        }
        public IHttpActionResult SavePrintingStationary(PrintingStationaryModel model)
        {
            var data = printingStationary.SavePrintingStationary(model);
            return Ok(data);
        }
        public IHttpActionResult GetPrintingStationaryModel(int id)
        {
            var data = printingStationary.GetPrintingStationaryModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdatePrintingStationary(PrintingStationaryModel model)
        {
            var data = printingStationary.UpdatePrintingStationary(model);
            return Ok(data);
        }
        public IHttpActionResult DeletePrintingStationary(int id)
        {
            var data = printingStationary.DeletePrintingStationary(id);
            return Ok(data);
        }
        public IHttpActionResult countno()
        {
            var data = printingStationary.countno();
            return Ok(data);
        }
    }
}
