using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class LedgerGroupFinanceModel
    {
        public int id { get; set; }
        public string ledgergroupname { get; set; }
        public string nature { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
