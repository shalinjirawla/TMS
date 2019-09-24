using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IUploadPackingSlipRepo
    {
        List<UploadPackingSlipModel> GetUploadPackingSlipModels();
        bool SaveUploadPackingSlip(UploadPackingSlipModel model);
        UploadPackingSlipModel GetUploadPackingSlipModel(int id);
        bool UpdateUploadPackingSlip(UploadPackingSlipModel model);
        bool DeleteUploadPackingSlip(int id);
    }
}
