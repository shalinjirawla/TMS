using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IDocumentSeriesAlloactionRepo
    {
        List<DocumentSeriesAllocationModel> GetDocumentSeriesAllocationModels();
        bool SaveDocumentSeriesAllocation(DocumentSeriesAllocationModel model);
        DocumentSeriesAllocationModel GetDocumentSeriesAllocationModel(int id);
        bool UpdateDocumentSeriesAllocation(DocumentSeriesAllocationModel model);
        bool DeleteDocumentSeriesAllocation(int id);
        int countno();
    }
}
