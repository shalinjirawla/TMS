using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.Interface;
using Repository.DB;

namespace Repository.Interface
{
    public interface ISeriesGenerationRepo
    {
        List<SeriesGenerationModel> GetSeriesGenerationModels();
        bool SaveSeriesGeneration(SeriesGenerationModel model);
        SeriesGenerationModel GetSeriesGenerationModel(int id);
        bool UpdateSeriesGeneration(SeriesGenerationModel model);
        bool DeleteSeriesGeneration(int id);
        int countno();
    }
}
