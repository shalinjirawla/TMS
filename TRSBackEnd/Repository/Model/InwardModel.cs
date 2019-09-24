using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class InwardModel
    {
        public int id { get; set; }
        public string truckArrivalNo { get; set; }
        public Nullable<System.DateTime> truckArrivalDate { get; set; }
        public Nullable<int> vehicleNo { get; set; }
        public string challanNo { get; set; }
        public Nullable<System.DateTime> challanDate { get; set; }
        public Nullable<int> challanFrom { get; set; }
        public Nullable<int> challanTo { get; set; }
        public Nullable<System.DateTime> scheduledArriDate { get; set; }
        public Nullable<int> expectedUnloadingTime { get; set; }
        public string Remark { get; set; }
        public string truckUnloadingNo { get; set; }
        public Nullable<System.DateTime> truckUnloadingDate { get; set; }
        public Nullable<int> vehicleNo1 { get; set; }
        public string truckArrivalNo1 { get; set; }
        public Nullable<System.DateTime> truckArrivalDate1 { get; set; }
        public string challanNo1 { get; set; }
        public string CNNo { get; set; }
        public Nullable<System.DateTime> CNDate { get; set; }
        public Nullable<int> bookingBranch { get; set; }
        public string deliveryLocation { get; set; }
        public string article { get; set; }
        public string loadedArticle { get; set; }
        public Nullable<double> loadedWeight { get; set; }
        public string receivedArticle { get; set; }
        public Nullable<double> receivedWeight { get; set; }
        public Nullable<int> godown { get; set; }
        public Nullable<int> virtualGodown { get; set; }
        public string receivedCondition { get; set; }
        public string damageLeakageArticle { get; set; }
        public Nullable<double> damageLeakageWeight { get; set; }
        public string damageLeakageValue { get; set; }
        public Nullable<bool> DDbySame { get; set; }
        public string rollno { get; set; }
        public Nullable<System.DateTime> vehicleArrivalDate { get; set; }
        public Nullable<System.DateTime> vehicleExpectedUploadDate { get; set; }
        public Nullable<System.DateTime> vehicleActualUploadDate { get; set; }
        public string remark1 { get; set; }
        public string GRNo { get; set; }
        public string consignor { get; set; }
        public string consignee { get; set; }
        public Nullable<int> packingType { get; set; }
        public Nullable<int> commodity { get; set; }
        public string ArticleRollNo { get; set; }
        public Nullable<double> meter { get; set; }
        public Nullable<double> weight { get; set; }
        public string sortNo { get; set; }
        public string lotNo { get; set; }
        public string remark2 { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string vehicleName { get; set; }
    }
}
