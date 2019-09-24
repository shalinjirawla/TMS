using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IRegularClientRepo
    {
        bool SaveRegularClient(RegularClientModel model);
        List<RegularClientModel> GetRegularClients();
        bool UpdateRegularClient(RegularClientModel model);
        bool DeleteRegularClient(int id);
        RegularClientModel GetRegularClient(int id);
		string Getclientcode(string name);

	}
}
