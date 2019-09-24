using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class VehicleMasterModel
    {
        public int id { get; set; }
        public string vehiclecategory { get; set; }
        public string vehicleNo { get; set; }
        public int vehicleType { get; set; }
        public int manufacturer { get; set; }
        public int vehiclemodel { get; set; }
        public string yearofmanufacturing { get; set; }
        public string GPSID { get; set; }
        public int drivername { get; set; }
        public int ownerdetails { get; set; }
        public string chassisNo { get; set; }
        public string engineNo { get; set; }
        public string trollychassisNo { get; set; }
        public string fueltankCapacity { get; set; }
        public double vehicleweightinMT { get; set; }
        public double unladenweightinMT { get; set; }
        public double vehicleCapacity { get; set; }
        public double wheelbaseinMM { get; set; }
        public double lengthinFt { get; set; }
        public double widthinft { get; set; }
        public double heightinft { get; set; }
        public double powerinCC { get; set; }
        public string paintCode { get; set; }
        public string paintColour { get; set; }
        public string ignitionkey { get; set; }
        public double doorkeycode { get; set; }
        public int bankfanainstuName { get; set; }
        public string loanaccountNo { get; set; }
        public string fileUpload { get; set; }
        public string wheelsize { get; set; }
        public string tyresize { get; set; }
        public string psi { get; set; }
        public System.DateTime registrationDate { get; set; }
        public System.DateTime fitnessDate { get; set; }
        public System.DateTime permitfromdate { get; set; }
        public System.DateTime insurancefromdate { get; set; }
        //public string fileuploadimage { get; set; }
        public bool isActive { get; set; }

        public string manufacturername { get; set; }
        public string vehiclemodelname { get; set; }

    }
}
