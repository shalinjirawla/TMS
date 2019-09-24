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
    public class AccountController : ApiController
    {
        private readonly IAccountRepo accountRepo;
        public AccountController(IAccountRepo account)
        {
            accountRepo = account;
        }
        public IHttpActionResult GetAccountModels()
        {
            var data = accountRepo.GetAccountModels();
            return Ok(data);
        }
        public IHttpActionResult SaveAccount(AccountModel model)
        {
            var data = accountRepo.SaveAccount(model);
            return Ok(data);
        }
        public IHttpActionResult GetAccountModel(int id)
        {
            var data = accountRepo.GetAccountModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateAccount(AccountModel model)
        {
            var data = accountRepo.UpdateAccount(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteAccount(int id)
        {
            var data = accountRepo.DeleteAccount(id);
            return Ok(data);
        }
    }
}
