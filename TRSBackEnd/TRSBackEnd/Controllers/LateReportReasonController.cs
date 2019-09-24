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
    public class LateReportReasonController : ApiController
    {
        private readonly ILateReportReasonRepo lateReportReasonRepo;
          public LateReportReasonController(ILateReportReasonRepo _lateReport)
        {
            lateReportReasonRepo = _lateReport;
        }
        public IHttpActionResult GetReportReasonModels()
        {
            var data = lateReportReasonRepo.GetReportReasonModels();
            return Ok(data);
        }
        public IHttpActionResult SavelateReportReason(LateReportReasonModel model)
        {
            var data = lateReportReasonRepo.SavelateReportReason(model);
            return Ok(data);
        }
        public IHttpActionResult GetReportReasonModel(int id)
        {
            var data = lateReportReasonRepo.GetReportReasonModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateLateReportReason(LateReportReasonModel model)
        {
            var data = lateReportReasonRepo.UpdateLateReportReason(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteLateReportReason(int id)
        {
            var data = lateReportReasonRepo.DeleteLateReportReason(id);
            return Ok(data);
        }
    }
}
