using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class VehicleModel
    {
        public int id { get; set; }
        public string modelname { get; set; }
        public int manufacturername { get; set; }
        public double vehicleweightinMT { get; set; }
        public double unladenweightinMT { get; set; }
        public double vehiclecapacity { get; set; }
        public double length { get; set; }
        public double width { get; set; }
        public double height { get; set; }
        public bool isActive { get; set; }
    }
}
