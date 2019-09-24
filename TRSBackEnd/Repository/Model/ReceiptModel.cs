using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class ReceiptModel
    {
        public int id { get; set; }
        public string BMRno { get; set; }
        public Nullable<System.DateTime> BMRdate { get; set; }
        public string Cash { get; set; }
        public string Chequeno { get; set; }
        public Nullable<System.DateTime> Chequedate { get; set; }
        public string Receivedamount { get; set; }
        public string Billno { get; set; }
        public string Billamount { get; set; }
        public string TDS { get; set; }
        public string FreightDeduction { get; set; }
        public string Etc { get; set; }
        public string remark { get; set; }
        public string financeeffect { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
