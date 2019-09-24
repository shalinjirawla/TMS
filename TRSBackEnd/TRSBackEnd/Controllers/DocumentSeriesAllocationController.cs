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
    public class DocumentSeriesAllocationController : ApiController
    {
        private readonly IDocumentSeriesAlloactionRepo documentSeriesAlloaction;
        public DocumentSeriesAllocationController(IDocumentSeriesAlloactionRepo document)
        {
            documentSeriesAlloaction = document;
        }
        public IHttpActionResult GetDocumentSeriesAllocationModels()
        {
            var data = documentSeriesAlloaction . GetDocumentSeriesAllocationModels();
            return Ok(data);
        }
        public IHttpActionResult SaveDocumentSeriesAllocation(DocumentSeriesAllocationModel model)
        {
            var data = documentSeriesAlloaction.SaveDocumentSeriesAllocation(model);
            return Ok(data);
        }
        public IHttpActionResult GetDocumentSeriesAllocationModel(int id)
        {
            var data = documentSeriesAlloaction.GetDocumentSeriesAllocationModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateDocumentSeriesAllocation(DocumentSeriesAllocationModel model)
        {
            var data = documentSeriesAlloaction.UpdateDocumentSeriesAllocation(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteDocumentSeriesAllocation(int id)
        {
            var data = documentSeriesAlloaction.DeleteDocumentSeriesAllocation(id);
            return Ok(data);
        }
        public IHttpActionResult countno()
        {
            var data = documentSeriesAlloaction.countno();
            return Ok(data);
        }
    }
}
