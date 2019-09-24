using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace Repository.Repository
{
   public class PrintingStationaryRepo:IPrintingStationaryRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public PrintingStationaryRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<PrintingStationaryModel> GetPrintingStationaryModels()
        {
            try
            {
                var data = tRSEntities4.PrintingStationaries.Where(x => x.isActive == true).ToList();
                List<PrintingStationaryModel> printingStationaries = new List<PrintingStationaryModel>();
                foreach (var item in data)
                {
                    PrintingStationaryModel model = new PrintingStationaryModel
                    {
                        id = item.id,
                        dateofprinting = item.dateofprinting,
                        documenttype = item.documenttype,
                        startseriesNo = item.startseriesNo,
                        endseriesNo = item.endseriesNo,
                        count = item.count,
                        isActive = true,
                    };
                    printingStationaries.Add(model);
                }
                return printingStationaries;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SavePrintingStationary(PrintingStationaryModel model)
        {
            try
            {
                if (model!=null)
                {
                    PrintingStationary printing = new PrintingStationary
                    {
                        dateofprinting = model.dateofprinting,
                        documenttype = model.documenttype,
                        startseriesNo = model.startseriesNo,
                        endseriesNo = model.endseriesNo,
                        count = model.count,
                        isActive = true
                    };
                    tRSEntities4.PrintingStationaries.Add(printing);
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public int countno()
        {
            int retunvalue = 0;
            var data = tRSEntities4.PrintingStationaries.Max(x => x.endseriesNo);
            if (data != null)
            {
                retunvalue = Convert.ToInt32(data);
                retunvalue = retunvalue + 1;
            }
            return retunvalue;
        }

        public PrintingStationaryModel GetPrintingStationaryModel(int id)
        {
            try
            {
                var data = tRSEntities4.PrintingStationaries.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    PrintingStationaryModel model = new PrintingStationaryModel();
                    model.id = data.id;
                    model.dateofprinting = data.dateofprinting;
                    model.documenttype = data.documenttype;
                    model.startseriesNo = data.startseriesNo;
                    model.endseriesNo = data.endseriesNo;
                    model.count = data.count;
                    return model;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdatePrintingStationary(PrintingStationaryModel model)
        {
            try
            {
                var data = tRSEntities4.PrintingStationaries.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.dateofprinting = model.dateofprinting;
                    data.documenttype = model.documenttype;
                    data.startseriesNo = model.startseriesNo;
                    data.endseriesNo = model.endseriesNo;
                    data.count = model.count;
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeletePrintingStationary(int id)
        {
            try
            {
                var data = tRSEntities4.PrintingStationaries.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}
