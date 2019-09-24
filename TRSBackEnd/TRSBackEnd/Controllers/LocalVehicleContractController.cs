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
    public class LocalVehicleContractController : ApiController
    {
        private readonly ILocalVehicleContractRepo localVehicleContract;
        public LocalVehicleContractController(ILocalVehicleContractRepo contractRepo)
        {
            localVehicleContract = contractRepo;
        }

        public IHttpActionResult GetVehicleContractModels()
        {
            var data = localVehicleContract.GetVehicleContractModels();
            return Ok(data);
        }
        public IHttpActionResult SaveLocalVehicleContract(LocalVehicleContractModel model)
        {
            var data = localVehicleContract.SaveLocalVehicleContract(model);
            return Ok(data);
        }
        public IHttpActionResult UpdateLocalVehicleContract(LocalVehicleContractModel model)
        {
            var data = localVehicleContract.UpdateLocalVehicleContract(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteLocalVehicleContract(int id)
        {
            var data = localVehicleContract.DeleteLocalVehicleContract(id);
            return Ok(data);
        }
        public IHttpActionResult GetVehicleContractModel(int id)
        {
            var data = localVehicleContract.GetVehicleContractModel(id);
            return Ok(data);
        }
    }
}
