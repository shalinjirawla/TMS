using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class OutwardModel
    {
        public int id { get; set; }
        public System.DateTime challandate { get; set; }
        public int vehicleNo { get; set; }
        public double vehiclecapacityMT { get; set; }
        public string challantype { get; set; }
        public string challanNo { get; set; }
        public int frombranch { get; set; }
        public int tobranch { get; set; }
        public string brokerloadingslipno { get; set; }
        public int brokername { get; set; }
        public int drivername { get; set; }
        public int driverlicenceNo { get; set; }
        public int drivermobileNo { get; set; }
        public string CNno { get; set; }
        public System.DateTime CNdate { get; set; }
        public int bookingbranch { get; set; }
        public string deliverylocation { get; set; }
        public string deliverytype { get; set; }
        public string balancepackeges { get; set; }
        public double balanceweight { get; set; }
        public string loadedpackages { get; set; }
        public string rollno { get; set; }
        public double truckhirechareges { get; set; }
        public double othercharges { get; set; }
        public double TDS { get; set; }
        public double TDSamount { get; set; }
        public double totaltruckhire { get; set; }
        public string advence { get; set; }
        public int advencepayableAt { get; set; }
        public int balancepayableAt { get; set; }
        public string RC { get; set; }
        public string PAN { get; set; }
        public string drivinglicenceAttach { get; set; }
        public string loadinglicenceAttach { get; set; }
        public string TransitDays { get; set; }
        public bool isActive { get; set; }
        public double loadedweight { get; set; }
        public string frombranchname { get; set; }
        public string vehicleName { get; set; }
    }
}
