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
    
    public partial class GodownMaster
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public GodownMaster()
        {
            this.GodownOwnerDetailsMasters = new HashSet<GodownOwnerDetailsMaster>();
            this.VirtualGodownMasters = new HashSet<VirtualGodownMaster>();
            this.InwardMasters = new HashSet<InwardMaster>();
            this.DeliveryMasters = new HashSet<DeliveryMaster>();
            this.DeliveryMasters1 = new HashSet<DeliveryMaster>();
            this.ConsignmentOperations = new HashSet<ConsignmentOperation>();
            this.TruckUnloadings = new HashSet<TruckUnloading>();
            this.GodownDeliveries = new HashSet<GodownDelivery>();
            this.PreDeliveries = new HashSet<PreDelivery>();
            this.BookingMasters = new HashSet<BookingMaster>();
            this.BookingMasters1 = new HashSet<BookingMaster>();
        }
    
        public int id { get; set; }
        public string godownCode { get; set; }
        public string godownName { get; set; }
        public int branchId { get; set; }
        public string address { get; set; }
        public int cityId { get; set; }
        public Nullable<int> pincode { get; set; }
        public int stateId { get; set; }
        public string phoneNo { get; set; }
        public string mobileNo { get; set; }
        public string storageCapacity { get; set; }
        public string remark { get; set; }
        public Nullable<bool> IsActive { get; set; }
    
        public virtual CityMaster CityMaster { get; set; }
        public virtual StateMaster StateMaster { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GodownOwnerDetailsMaster> GodownOwnerDetailsMasters { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VirtualGodownMaster> VirtualGodownMasters { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InwardMaster> InwardMasters { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeliveryMaster> DeliveryMasters { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeliveryMaster> DeliveryMasters1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ConsignmentOperation> ConsignmentOperations { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TruckUnloading> TruckUnloadings { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GodownDelivery> GodownDeliveries { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PreDelivery> PreDeliveries { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BookingMaster> BookingMasters { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BookingMaster> BookingMasters1 { get; set; }
        public virtual BranchMaster BranchMaster { get; set; }
    }
}
