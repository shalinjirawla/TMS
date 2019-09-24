using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;
using Repository.Model;
using Repository.Interface;

namespace Repository.Repository
{
    public class DocumentAllocationRepo:IDocumentAllocationRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public DocumentAllocationRepo()
        {
            tRSEntities = new TRSEntities4();
        }
        public  List<DocumentAllocationModel> GetDocumentAllocations()
        {
            try
            {
                var data = tRSEntities.DocumentAllocationMasters.Where(x => x.isActive == true).ToList();
                List<DocumentAllocationModel> documents = new List<DocumentAllocationModel>();
                foreach (var item in data)
                {
                    DocumentAllocationModel model = new DocumentAllocationModel
                    {
                        id=item.id,
                        generationdate = item.generationdate,
                        documenttype = item.documenttype,
                        startseriesNo = item.startseriesNo,
                        endseriesNo = item.endseriesNo,
                        count = item.count,
                        dateofprinting = item.dateofprinting,
                        documenttype1 = item.documenttype1,
                        //documenttypeNo1 = item.documenttypeNo1,
                        startseriesNo1 = item.startseriesNo1,
                        endseriesNo1 = item.endseriesNo1,
                        count1 = item.count,
                        dateofallocation = item.dateofallocation,
                        branch = item.branch,
                        documenettype2 = item.documenettype2,
                        startseriesNo2 = item.startseriesNo2,
                        endseriesNo2 = item.endseriesNo2,
                        count2 = item.count2,
                        isActive = (bool)item.isActive,
                    };
                    documents.Add(model);
                }
                return documents;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDocumentAllocation(DocumentAllocationModel model)
        {
            try
            {
                if (model!=null)
                {
                    DocumentAllocationMaster document = new DocumentAllocationMaster
                    {
                        generationdate = model.generationdate,
                        documenttype = model.documenttype,
                        startseriesNo = model.startseriesNo,
                        endseriesNo = model.endseriesNo,
                        count = model.count,
                        dateofprinting = model.dateofprinting,
                        documenttype1 = model.documenttype1,
                        //document.documenttypeNo1 = model.documenttypeNo1;
                        startseriesNo1 = model.startseriesNo1,
                        endseriesNo1 = model.endseriesNo1,
                        count1 = model.count1,
                        dateofallocation = model.dateofallocation,
                        branch = model.branch,
                        documenettype2 = model.documenettype2,
                        startseriesNo2 = model.startseriesNo2,
                        endseriesNo2 = model.endseriesNo2,
                        count2 = model.count2,
                        isActive = true,
                    };
                    tRSEntities.DocumentAllocationMasters.Add(document);
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

        //public bool SaveDocumentAllocation(DocumentAllocationModel model)
        //{
        //    try
        //    {
        //        if (model!=null)
        //        {
        //            DocumentAllocationMaster document = new DocumentAllocationMaster();
        //            document.generationdate = model.generationdate;
        //            document.documenttype = model.documenttype;
        //            document.startseriesNo = model.startseriesNo;
        //            document.endseriesNo = model.endseriesNo;
        //            document.count = model.count;
        //            document.dateofprinting = model.dateofprinting;
        //            document.documenttype1 = model.documenttype1;
        //            //document.documenttypeNo1 = model.documenttypeNo1;
        //            document.startseriesNo1 = model.startseriesNo1;
        //            document.endseriesNo1 = model.endseriesNo1;
        //            document.count1 = model.count1;
        //            document.dateofallocation = model.dateofallocation;
        //            document.branch = model.branch;
        //            document.documenettype2 = model.documenettype2;
        //            document.startseriesNo2 = model.startseriesNo2;
        //            document.endseriesNo2 = model.endseriesNo2;
        //            document.count2 = model.count2;
        //            document.isActive = true;
        //            tRSEntities.DocumentAllocationMasters.Add(document);
        //            tRSEntities.SaveChanges();
        //            return true;
        //        }
        //        else
        //        {
        //            return false;
        //        }
        //    }
        //    catch (Exception e)
        //    {

        //        throw e;
        //    }
        //}

        public DocumentAllocationModel GetDocumentAllocation(int id)
        {
            try
            {
                var check = tRSEntities.DocumentAllocationMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    DocumentAllocationModel model = new DocumentAllocationModel();
                    model.id = check.id;
                    model.generationdate = check.generationdate;
                    model.documenttype = check.documenttype;
                    model.startseriesNo = check.startseriesNo;
                    model.endseriesNo = check.endseriesNo;
                    model.count = check.count;
                    model.dateofprinting = check.dateofprinting;
                    model.documenttype1 = check.documenttype1;
                    model.startseriesNo1 = check.startseriesNo1;
                    model.endseriesNo1 = check.endseriesNo1;
                    model.count1 = check.count1;
                    model.dateofallocation = check.dateofallocation;
                    model.branch = check.branch;
                    model.documenettype2 = check.documenettype2;
                    model.startseriesNo2 = check.startseriesNo2;
                    model.endseriesNo2 = check.endseriesNo2;
                    model.count2 = check.count2;
                    check.isActive = (bool)model.isActive;
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

        public bool UpdateDocumentAllocation(DocumentAllocationModel model)
        {
            try
            {
                var data = tRSEntities.DocumentAllocationMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.generationdate = model.generationdate;
                    data.documenttype = model.documenttype;
                    data.startseriesNo = model.startseriesNo;
                    data.endseriesNo = model.endseriesNo;
                    data.count = model.count;
                    data.dateofprinting = model.dateofprinting;
                    data.documenttype1 = model.documenttype1;
                    data.startseriesNo1 = model.startseriesNo1;
                    data.endseriesNo1 = model.endseriesNo1;
                    data.count1 = model.count1;
                    data.dateofallocation = model.dateofallocation;
                    data.branch = model.branch;
                    data.documenettype2 = model.documenettype2;
                    data.startseriesNo2 = model.startseriesNo2;
                    data.endseriesNo2 = model.endseriesNo2;
                    data.count2 = model.count2;
                    data.isActive = true;
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

        public bool DeleteDocumentAllocation(int id)
        {
            try
            {
                var data = tRSEntities.DocumentAllocationMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
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
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}
