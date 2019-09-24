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
    public class DocumentSeriesAllocationRepo:IDocumentSeriesAlloactionRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public DocumentSeriesAllocationRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<DocumentSeriesAllocationModel> GetDocumentSeriesAllocationModels()
        {
            try
            {
                var data = tRSEntities.DocumentSeriesAllocations.Where(x => x.isActive == true).ToList();
                List<DocumentSeriesAllocationModel> models = new List<DocumentSeriesAllocationModel>();
                foreach (var item in data)
                {
                    DocumentSeriesAllocationModel documentSeries = new DocumentSeriesAllocationModel
                    {
                        id = item.id,
                        dateofallocation = item.dateofallocation,
                        branch = item.branch,
                        documenettype = item.documenettype,
                        startseriesNo = item.startseriesNo,
                        endseriesNo = item.endseriesNo,
                        count = item.count,
                        isActive = true,
                    };
                    models.Add(documentSeries);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDocumentSeriesAllocation(DocumentSeriesAllocationModel model)
        {
            try
            {
                if (model != null)
                {
                    //double res = 0;
                    DocumentSeriesAllocation allocationRepo = new DocumentSeriesAllocation
                    {
                        dateofallocation = model.dateofallocation,
                        branch = model.branch,
                        documenettype = model.documenettype,
                        startseriesNo = model.startseriesNo,
                        endseriesNo = model.endseriesNo,
                        count = model.count,
                        isActive = true,
                    };
                    tRSEntities.DocumentSeriesAllocations.Add(allocationRepo);
                    tRSEntities.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public int countno()
        {
            int retunvalue = 0;
            var data = tRSEntities.DocumentSeriesAllocations.Max(x => x.endseriesNo);
            if (data != null)
            {
                retunvalue = Convert.ToInt32(data);
                retunvalue = retunvalue + 1;
            }
            return retunvalue;
        }

        public DocumentSeriesAllocationModel GetDocumentSeriesAllocationModel(int id)
        {
            try
            {
                var data = tRSEntities.DocumentSeriesAllocations.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    DocumentSeriesAllocationModel model = new DocumentSeriesAllocationModel();
                    model.id = data.id;
                    model.dateofallocation = data.dateofallocation;
                    model.branch = data.branch;
                    model.documenettype = data.documenettype;
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

       //public int countNo(int startingNo,int EndNo)
       // {
       //     for (int i = startingNo; i < = EndNo; i++)
       //     {
       //         count
       //     }
       // }

        public bool UpdateDocumentSeriesAllocation(DocumentSeriesAllocationModel model)
        {
            try
            {
                var data = tRSEntities.DocumentSeriesAllocations.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.dateofallocation = model.dateofallocation;
                    data.branch = model.branch;
                    data.documenettype = model.documenettype;
                    data.startseriesNo = model.startseriesNo;
                    data.endseriesNo = model.endseriesNo;
                    data.count = model.count;
                    tRSEntities.SaveChanges();
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

        public bool DeleteDocumentSeriesAllocation(int id)
        {
            try
            {
                var data = tRSEntities.DocumentSeriesAllocations.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.isActive = false;
                    tRSEntities.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
