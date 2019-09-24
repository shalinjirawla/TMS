using Repository.DB;
using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class PackingRepo:IPackingRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public PackingRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public List<PackingModel> GetPackings()
        {
            try
            {
                List<PackingModel> md = new List<PackingModel>();
                var data = _tRSEntities.PackingMasters.ToList();
                foreach (var item in data)
                {
                    PackingModel pd = new PackingModel
                    {
                        id = item.id,
                        article=item.article,
                        item=item.item,
                        actualWeight1=item.actualWeight,
                        packingType=item.packingType
                    };
                    md.Add(pd);
                 
                }
                return md;

            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool SavePacking(PackingModel model)
        {
            try
            {
                PackingMaster ms = new PackingMaster();
                ms.article = model.article;
                
                ms.item = model.item;
                ms.actualWeight = model.actualWeight1;
                ms.packingType = model.packingType;
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}
