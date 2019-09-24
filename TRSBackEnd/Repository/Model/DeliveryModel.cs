using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class DeliveryModel
    {
        public int id { get; set; }
        public string gatepassNo { get; set; }
        public Nullable<System.DateTime> gatepassdate { get; set; }
        public string paymentmode { get; set; }
        public Nullable<int> deliveryparty { get; set; }
        public string deliverypartydetails { get; set; }
        public Nullable<int> contractparty { get; set; }
        public string contractpartydetails { get; set; }
        public string CNno { get; set; }
        public Nullable<System.DateTime> CNdate { get; set; }
        public Nullable<int> bookingbranch { get; set; }
        public string consignor { get; set; }
        public string item { get; set; }
        public Nullable<int> packingType { get; set; }
        public Nullable<int> godownname { get; set; }
        public Nullable<int> virtualgodownname { get; set; }
        public Nullable<double> deliveryarticle { get; set; }
        public Nullable<double> deliveryweight { get; set; }
        public Nullable<double> balancearticle { get; set; }
        public Nullable<double> balanceweight { get; set; }
        public string rollno { get; set; }
        public string handedoverto { get; set; }
        public string contractNo { get; set; }
        public string vehicleNo { get; set; }
        public string GUTKANo { get; set; }
        public string remark { get; set; }
        public string predeliveryNo { get; set; }
        public Nullable<System.DateTime> predeliverydate { get; set; }
        public string paymentmode1 { get; set; }
        public Nullable<int> deliveryparty1 { get; set; }
        public string deliverypartydetails1 { get; set; }
        public Nullable<int> contractparty1 { get; set; }
        public string contractpartydetails1 { get; set; }
        public string CNno1 { get; set; }
        public Nullable<System.DateTime> CNdate1 { get; set; }
        public Nullable<int> bookingbranch1 { get; set; }
        public string consignoor1 { get; set; }
        public string item1 { get; set; }
        public Nullable<int> packingType1 { get; set; }
        public Nullable<int> godownname1 { get; set; }
        public Nullable<int> virtualgodownname1 { get; set; }
        public Nullable<double> deliveryarticle1 { get; set; }
        public Nullable<double> deliveryweight1 { get; set; }
        public Nullable<double> balancearticle1 { get; set; }
        public Nullable<double> balanceweight1 { get; set; }
        public string rollNo1 { get; set; }
        public string remark1 { get; set; }
        public string DDlocalchallanNo { get; set; }
        public Nullable<System.DateTime> DDlocalchallanDate { get; set; }
        public string prideliveryNo1 { get; set; }
        public Nullable<double> Hirecharges { get; set; }
        public string vehicleNo1 { get; set; }
        public string remark2 { get; set; }
        public string doordeliveryNo { get; set; }
        public string CNno2 { get; set; }
        public string CNdate2 { get; set; }
        public Nullable<int> bookingbranch2 { get; set; }
        public string consignor2 { get; set; }
        public string item2 { get; set; }
        public Nullable<double> deliveryarticle2 { get; set; }
        public Nullable<double> deliveryweight2 { get; set; }
        public Nullable<double> undeliveredarticle { get; set; }
        public Nullable<double> undeliveredweight { get; set; }
        public Nullable<double> balancearticle2 { get; set; }
        public Nullable<double> balanceweight2 { get; set; }
        public string rollno2 { get; set; }
        public string remark3 { get; set; }
        public string billNo { get; set; }
        public Nullable<System.DateTime> billdate { get; set; }
        public string CNno3 { get; set; }
        public Nullable<System.DateTime> CNdate3 { get; set; }
        public Nullable<int> bookingbranch3 { get; set; }
        public string deliverybranch1 { get; set; }
        public string article { get; set; }
        public Nullable<double> actualweight { get; set; }
        public Nullable<double> chargeweight { get; set; }
        public string freightdetails { get; set; }
        public Nullable<bool> paymentmode2 { get; set; }
        public string amount { get; set; }
        public string chequeNo { get; set; }
        public Nullable<System.DateTime> chequedate { get; set; }
        public string amount1 { get; set; }
        public string remark4 { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string bookingbranchname { get; set; }
    }
}
