using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class SeriesGenerationModel
    {
        public int id { get; set; }
        public Nullable<System.DateTime> generationdate { get; set; }
        public string documenttype { get; set; }
        public Nullable<double> startseriesNo { get; set; }
        public Nullable<double> endseriesNo { get; set; }
        public Nullable<double> count { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
