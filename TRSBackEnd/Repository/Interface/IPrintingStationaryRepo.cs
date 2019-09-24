using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.DB;
using Repository.Interface;

namespace Repository.Interface
{
    public interface IPrintingStationaryRepo
    {
        List<PrintingStationaryModel> GetPrintingStationaryModels();
        bool SavePrintingStationary(PrintingStationaryModel model);
        PrintingStationaryModel GetPrintingStationaryModel(int id);
        bool UpdatePrintingStationary(PrintingStationaryModel model);
        bool DeletePrintingStationary(int id);
        int countno();
    }
}
