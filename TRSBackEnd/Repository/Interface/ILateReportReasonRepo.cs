using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface ILateReportReasonRepo
    {
        List<LateReportReasonModel> GetReportReasonModels();
        bool SavelateReportReason(LateReportReasonModel model);
        LateReportReasonModel GetReportReasonModel(int id);
        bool UpdateLateReportReason(LateReportReasonModel model);
        bool DeleteLateReportReason(int id);
    }
}
