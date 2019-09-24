//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Repository.DB
{
    using System;
    using System.Collections.Generic;
    
    public partial class DoorDeliveryConfirm
    {
        public int id { get; set; }
        public string doordeliveryNo { get; set; }
        public Nullable<int> predeliveryNo { get; set; }
        public string CNno { get; set; }
        public Nullable<System.DateTime> CNdate { get; set; }
        public Nullable<int> bookingbranch { get; set; }
        public string consignor { get; set; }
        public string item { get; set; }
        public Nullable<double> deliveryarticle { get; set; }
        public Nullable<double> deliveryweight { get; set; }
        public Nullable<double> undeliveredarticle { get; set; }
        public Nullable<double> undeliveredweight { get; set; }
        public Nullable<double> balancearticle { get; set; }
        public Nullable<double> balanceweight { get; set; }
        public string rollno { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
    
        public virtual PreDelivery PreDelivery { get; set; }
        public virtual ReserveBooking ReserveBooking { get; set; }
    }
}
