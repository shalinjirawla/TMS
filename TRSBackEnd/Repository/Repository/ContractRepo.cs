using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace Repository.Repository
{
    public class ContractRepo : IContractRepo
    {
        private readonly TRSEntities4 _tRS;
        public ContractRepo()
        {
            _tRS = new TRSEntities4();
        }
        public bool SaveContract(ContractModel model)
        {
            try
            {
                ContractMaster db = new ContractMaster()
                {
                    isActive = true,
                    name = model.name,
                    no = model.no,
                    date = model.date,
                    branch = model.branch,
                    clientname = model.clientname,
                    pono = model.pono,
                    podate = model.podate,
                    validfromdate = model.validfromdate,
                    validtodate = model.validtodate,
                    rateapplicableon = model.rateapplicableon,
                    //probusipermonth = model.probusipermonth,
                    weight = model.weight,
                    freight = model.freight,
                    branchfrom = model.branchfrom,
                    branchto = model.branchto,
                    freightperKG = model.freightperKG,
                    statisticalcharges = model.statisticalcharges,
                    FOV = model.FOV,
                    hamaliperKG = model.hamaliperKG,
                    hamaniperArt = model.hamaniperArt,
                    localcharges = model.localcharges,
                    doordeliverychargesart = model.doordeliverychargesart,
                    doordeliverychargesKG = model.doordeliverychargesKG,
                    gicharges = model.gicharges,
                    demurragedays = model.demurragedays,
                    demurragerate = model.demurragerate,
                    fileupload = model.fileupload,
                };
                _tRS.ContractMasters.Add(db);
                _tRS.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }


        public List<ContractModel> GetContracts()
        {
            try
            {
                List<ContractModel> contractModels = new List<ContractModel>();
                var Data = _tRS.ContractMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in Data)
                {
                    ContractModel db = new ContractModel
                    {
                        id = item.id,
                        no = item.no,
                        name = item.name,
                        date = item.date,
                        branch = item.branch,
                        clientname = item.clientname,
                        pono = item.pono,
                        podate = item.podate,
                        validfromdate = item.validfromdate,
                        validtodate = item.validtodate,
                        rateapplicableon = item.rateapplicableon,
                        //probusipermonth = item.probusipermonth,
                        weight = item.weight,
                        freight = item.freight,
                        branchfrom = item.branchfrom,
                        branchto = item.branchto,
                        freightperKG = item.freightperKG,
                        statisticalcharges = item.statisticalcharges,
                        FOV = item.FOV,
                        hamaliperKG = item.hamaliperKG,
                        hamaniperArt = item.hamaniperArt,
                        localcharges = item.localcharges,
                        doordeliverychargesKG = item.doordeliverychargesKG,
                        doordeliverychargesart = item.doordeliverychargesart,
                        gicharges = item.gicharges,
                        demurragedays = item.demurragedays,
                        demurragerate = item.demurragerate,
                        branchfromname = _tRS.BranchMasters.Where(x => x.id == item.branchfrom).Select(x => x.branchName).FirstOrDefault(),
                        branchtoname = _tRS.BranchMasters.Where(x => x.id == item.branchto).Select(x => x.branchName).FirstOrDefault(),
                        branchname = _tRS.BranchMasters.Where(x => x.id == item.branch).Select(x => x.branchName).FirstOrDefault(),
                        clientnames = _tRS.RegularClientMasters.Where(x=>x.id==item.clientname).Select(x=>x.clientName).FirstOrDefault(),
                        //isActive = (bool)item.isActive
                    };
                    contractModels.Add(db);
                }
                return contractModels;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ContractModel GetContract(int id)
        {
            try
            {
                var data = _tRS.ContractMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    ContractModel db = new ContractModel
                    {
                        id = data.id,
                        name = data.name,
                        no = data.no,
                        date = data.date,
                        branch = data.branch,
                        clientname = data.clientname,
                        pono = data.pono,
                        podate = data.podate,
                        validfromdate = data.validfromdate,
                        validtodate = data.validtodate,
                        rateapplicableon = data.rateapplicableon,
                        weight = data.weight,
                        freight = data.freight,
                        branchfrom = data.branchfrom,
                        branchto = data.branchto,
                        freightperKG = data.freightperKG,
                        statisticalcharges = data.statisticalcharges,
                        FOV = data.FOV,
                        hamaliperKG = data.hamaliperKG,
                        hamaniperArt = data.hamaniperArt,
                        localcharges = data.localcharges,
                        doordeliverychargesKG = data.doordeliverychargesKG,
                        doordeliverychargesart = data.doordeliverychargesart,
                        gicharges = data.gicharges,
                        demurragedays = data.demurragedays,
                        demurragerate = data.demurragerate,
                        fileupload= data.fileupload,//"data:image/png;base64,"+
                    };
                    return db;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool  UpdateContract(ContractModel model)
        {
            try
            {
                var check = _tRS.ContractMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    check.name = model.name;
                    check.no = model.no;
                    check.date = model.date;
                    check.branch = model.branch;
                    check.clientname = model.clientname;
                    check.pono = model.pono;
                    check.podate = model.podate;
                    check.validfromdate = model.validfromdate;
                    check.validtodate = model.validtodate;
                    check.rateapplicableon = model.rateapplicableon;
                    check.weight = model.weight;
                    check.freight = model.freight;
                    check.branchfrom = model.branchfrom;
                    check.branchto = model.branchto;
                    check.freightperKG = model.freightperKG;
                    check.statisticalcharges = model.statisticalcharges;
                    check.FOV = model.FOV;
                    check.hamaliperKG = model.hamaliperKG;
                    check.hamaniperArt = model.hamaniperArt;
                    check.localcharges = model.localcharges;
                    check.doordeliverychargesart = model.doordeliverychargesart;
                    check.doordeliverychargesKG = model.doordeliverychargesKG;
                    check.gicharges = model.gicharges;
                    check.demurragedays = model.demurragedays;
                    check.demurragerate = model.demurragerate;
                    check.fileupload = model.fileupload;
                    _tRS.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeleteContract(int id)
        {
            try
            {
                var data = _tRS.ContractMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    _tRS.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }

}
