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
    
    public partial class VirtualGodownMaster
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public VirtualGodownMaster()
        {
            this.InwardMasters = new HashSet<InwardMaster>();
            this.DeliveryMasters = new HashSet<DeliveryMaster>();
            this.DeliveryMasters1 = new HashSet<DeliveryMaster>();
            this.ConsignmentOperations = new HashSet<ConsignmentOperation>();
            this.TruckUnloadings = new HashSet<TruckUnloading>();
            this.GodownDeliveries = new HashSet<GodownDelivery>();
            this.PreDeliveries = new HashSet<PreDelivery>();
        }
    
        public int id { get; set; }
        public string virtualGodownCode { get; set; }
        public Nullable<int> branchId { get; set; }
        public Nullable<int> godownId { get; set; }
        public string storageCapacity { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
    
        public virtual GodownMaster GodownMaster { get; set; }
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
        public virtual BranchMaster BranchMaster { get; set; }
    }
}
