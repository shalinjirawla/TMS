using Repository.Interface;
using Repository.Repository;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace TRSBackEnd
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IStateRepo, StateRepo>();
            container.RegisterType<ICityRepo, CityRepo>();
            container.RegisterType<IBranchRepo,BranchRepo>();
            container.RegisterType<IRegionRepo,RegionRepo>();
            container.RegisterType<IGodownRepo,GodownRepo>();
            container.RegisterType<IVirtualGodownRepo,VirtualGodownRepo>();
            container.RegisterType<IRegularClientRepo,RegularClientRepo>();
            container.RegisterType<IBookingRepo, BookingRepo>();
            container.RegisterType<IPackingRepo, PackingRepo>();
            container.RegisterType<IRTORepo, RTORepo>();
            container.RegisterType<IAreaRepo, AreaRepo>();
            container.RegisterType<IGoddownOwnerDetailsRepo, GoddownOwnerDetailsRepo>();
			container.RegisterType<IBankMasterRepo, BankMasterRepo>();
			container.RegisterType<IBranchRateRepo, BranchRateRepo>();
			container.RegisterType<IUserMasterRepo, UserMasterRepo>();
            container.RegisterType<IFreightRepo, FreightRepo>();
            container.RegisterType<ICrossingRepo, CrossingRepo>();
            container.RegisterType<IServiceLocationRepo, ServiceLocationRepo>();
            container.RegisterType<IContractRepo, ContractRepo>();
            container.RegisterType<IWalkinClientRepo, WalkinClientRepo>();
            container.RegisterType<ICommodityRepo, CommodityRepo>();
            container.RegisterType<ICommodityTypeRepo, CommodityTypeRepo>();
            container.RegisterType<IPackingTypeRepo, PackingTypeRepo>();
            container.RegisterType<IDepartmentRepo, DepartmentRepo>();
            container.RegisterType<ILateReportReasonRepo, LateReportReasonRepo>();
            container.RegisterType<IVendorTypeRepo, VendorTypeRepo>();
            container.RegisterType<IVendorRepo, VendorRepo>();
            container.RegisterType<IVehicleModelRepo, VehicleModelRepo>();
            container.RegisterType<IVehicleTypeRepo, VehicleTypeRepo>();
            container.RegisterType<IVehicleMasterRepo, VehicleMasterRepo>();
            container.RegisterType<ILocalVehicleContractRepo, LocalVehicleContractRepo>();
            container.RegisterType<IStandardLorryHireRepo, StandardLorryHireRepo>();
            container.RegisterType<IDriverRepo, DriverRepo>();
            container.RegisterType<IDocumentAllocationRepo, DocumentAllocationRepo>();
            container.RegisterType<ISeriesGenerationRepo, SeriesGenerationRepo>();
            container.RegisterType<IPrintingStationaryRepo, PrintingStationaryRepo>();
            container.RegisterType<IDocumentSeriesAlloactionRepo, DocumentSeriesAllocationRepo>();
            container.RegisterType<IConsignmentRepo, ConsignmentRepo>();
            container.RegisterType<IReserveBookingRepo, ReserveBookingRepo>();
            container.RegisterType<IUploadPackingSlipRepo, UploadPackingSlipRepo>();
            container.RegisterType<ITruckArrivalRepo, TruckArrivalRepo>();
            container.RegisterType<ITruckUnloadingRepo, TruckUnloadingRepo>();
            container.RegisterType<IOutwardRepo, OutwardRepo>();
            container.RegisterType<IInwardRepo, InwardRepo>();
            container.RegisterType<IDeliveryRepo, DeliveryRepo>();
            container.RegisterType<IGodownDeliveryRepo, GodownDeliveryRepo>();
            container.RegisterType<IDDLocalChallanRepo, DDLocalChallanRepo>();
            container.RegisterType<IPreDeliveryRepo, PreDeliveryRepo>();
            container.RegisterType<IDoorDeliveryConfirmRepo, DoorDeliveryConfirmRepo>();
            container.RegisterType<IBillRepo, BillRepo>();
            container.RegisterType<IReceiptRepo, ReceiptRepo>();
            container.RegisterType<IAccountRepo, AccountRepo>();
            container.RegisterType<ILedgerGroupFinanceRepo, LedgerGroupFinanceRepo>();
            container.RegisterType<ILedgerRepo, LedgerRepo>();
            container.RegisterType<ICostCentreRepo, CostCentreRepo>();
            container.RegisterType<IRequirementRepo, RequirementRepo>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}