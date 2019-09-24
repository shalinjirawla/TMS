using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IDocumentAllocationRepo
    {
        List<DocumentAllocationModel> GetDocumentAllocations();
        bool SaveDocumentAllocation(DocumentAllocationModel model);
        DocumentAllocationModel GetDocumentAllocation(int id);
        bool UpdateDocumentAllocation(DocumentAllocationModel model);
        bool DeleteDocumentAllocation(int id);
    }
}
