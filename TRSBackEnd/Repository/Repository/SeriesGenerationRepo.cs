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
    public class SeriesGenerationRepo : ISeriesGenerationRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public SeriesGenerationRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<SeriesGenerationModel> GetSeriesGenerationModels()
        {
            try
            {
                var data = tRSEntities4.SeriesGenerations.Where(x => x.isActive == true).ToList();
                List<SeriesGenerationModel> series = new List<SeriesGenerationModel>();
                foreach (var item in data)
                {
                    SeriesGenerationModel generation = new SeriesGenerationModel
                    {
                        id = item.id,
                        generationdate = item.generationdate,
                        documenttype = item.documenttype,
                        startseriesNo = item.startseriesNo,
                        endseriesNo = item.endseriesNo,
                        count = item.count,
                        isActive = (bool)item.isActive,
                    };
                    series.Add(generation);
                }
                return series;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveSeriesGeneration(SeriesGenerationModel model)
        {
            try
            {
                if (model != null)
                {
                    //var res = 0;
                    SeriesGeneration series = new SeriesGeneration()
                    {
                        generationdate = model.generationdate,
                        documenttype = model.documenttype,
                        startseriesNo = model.startseriesNo,
                        endseriesNo = model.endseriesNo,
                        count = model.count,
                        isActive = true,
                    };
                    tRSEntities4.SeriesGenerations.Add(series);
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
                //}
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public int countno()
        {
            int retunvalue = 0;
            var data = tRSEntities4.SeriesGenerations.Max(x => x.endseriesNo);
            if (data != null)
            {
                retunvalue = Convert.ToInt32(data);
                retunvalue = retunvalue+1;
            }
            return retunvalue;
        }


        public SeriesGenerationModel GetSeriesGenerationModel(int id)
        {
            try
            {
                var data = tRSEntities4.SeriesGenerations.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    SeriesGenerationModel model = new SeriesGenerationModel();
                    model.id = data.id;
                    model.generationdate = data.generationdate;
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

        public bool UpdateSeriesGeneration(SeriesGenerationModel model)
        {
            try
            {
                var data = tRSEntities4.SeriesGenerations.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.generationdate = model.generationdate;
                    data.documenttype = model.documenttype;
                    data.startseriesNo = model.startseriesNo;
                    data.endseriesNo = model.endseriesNo;
                    data.count = model.count;
                    data.isActive = true;
                    tRSEntities4.SaveChanges();
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

        public bool DeleteSeriesGeneration(int id)
        {
            try
            {
                var data = tRSEntities4.SeriesGenerations.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
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
