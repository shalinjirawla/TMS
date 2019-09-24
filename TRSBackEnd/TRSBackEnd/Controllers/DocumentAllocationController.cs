using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.DB;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class DocumentAllocationController : ApiController
    {
        private readonly IDocumentAllocationRepo allocationRepo;
        public DocumentAllocationController(IDocumentAllocationRepo document)
        {
            allocationRepo = document;
        }
        public IHttpActionResult GetDocumentAllocations()
        {
            var data = allocationRepo.GetDocumentAllocations();
            return Ok(data);
        }
        public IHttpActionResult SaveDocumentAllocation(DocumentAllocationModel model)
        {
            var data = allocationRepo.SaveDocumentAllocation(model);
            return Ok(data);
        }
        public IHttpActionResult GetDocumentAllocation(int id)
        {
            var data = allocationRepo.GetDocumentAllocation(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateDocumentAllocation(DocumentAllocationModel model)
        {
            var data = allocationRepo.UpdateDocumentAllocation(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteDocumentAllocation(int id)
        {
            var data = allocationRepo.DeleteDocumentAllocation(id);
            return Ok(data);
        }
    }
}
