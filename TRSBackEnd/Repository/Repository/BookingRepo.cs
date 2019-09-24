using Repository.DB;
using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class BookingRepo : IBookingRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public BookingRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public List<BookingModel> GetBookings()
        {
            try
            {
                var data = _tRSEntities.BookingMasters.Where(x => x.isActive == true).ToList();
                List<BookingModel> bookingModels = new List<BookingModel>();
                foreach (var item in data)
                {
                    BookingModel model = new BookingModel();

                    model.id = item.id;
                    model.cn = item.cn;
                    model.expectedDelivery = item.expectedDelivery;
                    if (model.from != null)
                        model.from = item.from;

                    if (model.godownNo != null)
                        model.godownNo = item.godownNo;

                    if (model.to != null)
                        model.to = item.to;

                    var godownName = _tRSEntities.GodownMasters.Where(x => x.id == item.godownNo).FirstOrDefault();

                    if (godownName != null)
                        model.godownName = godownName.godownName;

                    model.paymentType = item.paymentType;
                    model.actualWeight = item.actualWeight;

                    if (model.consignee != null)
                        model.consignee = item.consignee;

                    var clientName = _tRSEntities.RegularClientMasters.Where(x => x.id == item.consignee).FirstOrDefault();
                    var branchName = _tRSEntities.BranchMasters.Where(x => x.id == item.from).FirstOrDefault();

                    if (clientName != null)
                        model.clientName = clientName.clientName;
                    if (branchName != null)
                        model.branchName = branchName.branchName;

                    //second day

                    model.cnNo = item.cnNo;
                    model.virtualGoddownNo = item.virtualGoddownNo;
                    model.consignorDetails = item.consignorDetails;
                    model.consignor = item.consignor;
                    model.agentName = item.agentName;
                    model.agentDetails = item.agentDetails;
                    model.bookingType = item.bookingType;
                    model.deliveryType = item.deliveryType;
                    model.modeOfTransport = item.modeOfTransport;
                    model.invoiceNo = item.invoiceNo;
                    model.invoiceValue = item.invoiceValue;
                    model.consignorInvoice = item.consignorInvoice;
                    model.freightBasis = item.freightBasis;
                    model.ftl = item.ftl;
                    model.isCcAttached = item.isCcAttached;
                    model.isCod = item.isCod;
                    model.chargeWeight = item.chargeWeight;
                    model.freightRate = item.freightRate;
                    model.privateMark = item.privateMark;
                    model.insuredBy = item.insuredBy;
                    model.freight = item.freight;
                    model.surcharge = item.surcharge;
                    model.hamaliCharge = item.hamaliCharge;
                    model.localCartages = item.localCartages;
                    model.doorDeliveryCharge = item.doorDeliveryCharge;
                    model.statisticalCharges = item.statisticalCharges;
                    model.miscellaneousCharges = item.miscellaneousCharges;
                    model.cod = item.cod;
                    model.riskCharge = item.riskCharge;

                    model.branch = item.branch;
                    model.reserveReason = item.reserveReason;
                    model.cnFrom = item.cnFrom;
                    model.cnTo = item.cnTo;
                    model.srtoNo = item.srtoNo;
                    model.lotNo = item.lotNo;
                    model.rollNo = item.rollNo;
                    model.meter = item.meter;
                    model.weightInKg = item.weightInKg;
                    bookingModels.Add(model);
                }
                return bookingModels;
            }

            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveBooking(BookingModel model)
        {
            try
            {
                BookingMaster master = new BookingMaster();

                master.cn = model.cn;
                master.expectedDelivery = model.expectedDelivery;
                if (model.from != 0)
                {
                    master.from = model.from;
                }
                if (model.to != 0)
                {
                    master.to = model.to;
                }
                if (model.godownNo != 0)
                {
                    master.godownNo = model.godownNo;
                }

                master.paymentType = model.paymentType;
                master.actualWeight = model.actualWeight;

                if (model.consignee != 0)
                    master.consignee = model.consignee;

                //second day

                master.cnNo = model.cnNo;
                master.deliveryBranch = model.deliveryBranch;
                master.virtualGoddownNo = model.virtualGoddownNo;
                master.consignorDetails = model.consignorDetails;
                master.consignor = model.consignor;
                master.agentName = model.agentName;
                master.agentDetails = model.agentDetails;
                master.bookingType = model.bookingType;
                master.deliveryType = model.deliveryType;
                master.modeOfTransport = model.modeOfTransport;
                master.invoiceNo = model.invoiceNo;
                master.invoiceValue = model.invoiceValue;
                master.consignorInvoice = model.consignorInvoice;
                master.freightBasis = model.freightBasis;
                master.ftl = model.ftl;
                master.isCcAttached = model.isCcAttached;
                master.isCod = model.isCod;
                master.chargeWeight = model.chargeWeight;
                master.freightRate = model.freightRate;
                master.privateMark = model.privateMark;
                master.insuredBy = model.insuredBy;
                master.freight = model.freight;
                master.surcharge = model.surcharge;
                master.hamaliCharge = model.hamaliCharge;
                master.localCartages = model.localCartages;
                master.doorDeliveryCharge = model.doorDeliveryCharge;
                master.statisticalCharges = model.statisticalCharges;
                master.miscellaneousCharges = model.miscellaneousCharges;
                master.godownCharges = model.miscellaneousCharges;
                master.cod = model.cod;
                master.riskCharge = model.riskCharge;
                master.branch = model.branch;
                master.reserveReason = model.reserveReason;
                master.cnFrom = model.cnFrom;
                master.srtoNo = model.srtoNo;
                master.lotNo = model.lotNo;
                master.meter = model.meter;
                master.weightInKg = model.weightInKg;

                master.isActive = true;

                _tRSEntities.BookingMasters.Add(master);
                _tRSEntities.SaveChanges();
                PackingMaster pk = new PackingMaster();
                pk.bookingId = master.id;
                foreach (var item in model.singleCn)
                {
                    pk.actualWeight = item.actualWeight1;
                    pk.packingType = item.packingType;
                    pk.article = item.article;
                    pk.isActive = true;
                    _tRSEntities.PackingMasters.Add(pk);
                    _tRSEntities.SaveChanges();
                }
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeleteBooking(int id)
        {
            try
            {
                var check = _tRSEntities.BookingMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                var checkBookingPacking = _tRSEntities.PackingMasters.Where(x => x.bookingId == id && x.isActive == true).ToList();
                if (check != null )
                {

                    check.isActive = false;
                    if (checkBookingPacking != null)
                    {
                        foreach (var item in checkBookingPacking)
                        {
                            item.isActive = false;
                            _tRSEntities.SaveChanges();
                            //return true;
                        }
                    }
                    _tRSEntities.SaveChanges();
                    return true;
                }
               
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {

                throw e;

            }
        }

        public bool UpadateBooking(BookingModel model)
         {
            try
            {
                var check = _tRSEntities.BookingMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    check.expectedDelivery = model.expectedDelivery;
                    if (model.from != 0)
                        check.from = model.from;

                    if (model.to != 0)
                        check.to = model.to;

                    if (model.godownNo != 0)
                        check.godownNo = model.godownNo;

                    check.paymentType = model.paymentType;
                    check.actualWeight = model.actualWeight;

                    if (model.consignee != 0)
                        check.consignee = model.consignee;


                    //next day

                    check.cnNo = model.cnNo;
                    check.deliveryBranch = model.deliveryBranch;
                    check.virtualGoddownNo = model.virtualGoddownNo;
                    check.consignorDetails = model.consignorDetails;
                    check.agentName = model.agentName;
                    check.agentDetails = model.agentDetails;
                    check.bookingType = model.bookingType;
                    check.deliveryType = model.deliveryType;
                    check.modeOfTransport = model.modeOfTransport;
                    check.invoiceNo = model.invoiceNo;
                    check.invoiceValue = model.invoiceValue;
                    check.consignorInvoice = model.consignorInvoice;
                    check.freightBasis = model.freightBasis;
                    check.ftl = model.ftl;
                    check.isCcAttached = model.isCcAttached;
                    check.isCod = model.isCod;
                    check.chargeWeight = model.chargeWeight;
                    check.freightRate = model.freightRate;
                    check.privateMark = model.privateMark;
                    check.insuredBy = model.insuredBy;
                    check.freight = model.freight;
                    check.surcharge = model.surcharge;
                    check.hamaliCharge = model.surcharge;
                    check.localCartages = model.localCartages;
                    check.doorDeliveryCharge = model.doorDeliveryCharge;
                    check.statisticalCharges = model.statisticalCharges;
                    check.miscellaneousCharges = model.miscellaneousCharges;
                    check.godownCharges = model.godownCharges;
                    check.riskCharge = model.riskCharge;
                    check.cod = model.cod;
                    check.branch = model.branch;
                    check.reserveReason = model.reserveReason;
                    check.cnFrom = model.cnFrom;
                    check.cnTo = model.cnTo;
                    check.srtoNo = model.srtoNo;
                    check.lotNo = model.lotNo;
                    check.rollNo = model.rollNo;
                    check.meter = model.meter;
                    check.weightInKg = model.weightInKg;
                    check.isActive = true;
                        var checkSinglecn = _tRSEntities.PackingMasters.ToList();
                        foreach (var item1 in model.singleCn)
                        {
                        var findSingleCn = _tRSEntities.PackingMasters.Where(x => x.id == item1.id).FirstOrDefault();
                            PackingMaster pk = new PackingMaster();
                        findSingleCn.actualWeight = item1.actualWeight1;
                        findSingleCn.packingType = item1.packingType;
                        findSingleCn.article = item1.article;
                        findSingleCn.isActive = true;
                            _tRSEntities.SaveChanges();

                        }

                    
                     
                    
                 
                    _tRSEntities.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public BookingModel GetBooking(int id)
        {
            try
            {
                List<PackingModel> packingModels = new List<PackingModel>();
                var check = _tRSEntities.BookingMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    BookingModel model = new BookingModel();

                    model.cn = check.cn;
                    model.expectedDelivery = check.expectedDelivery;

                    model.from = check.from;
                    var from = _tRSEntities.BranchMasters.Where(x => x.id == model.from).FirstOrDefault();
                    if (from != null)
                        model.fromName = from.branchCode;
                    
                    model.to = check.to;
                    var to = _tRSEntities.BranchMasters.Where(x => x.id == model.to).FirstOrDefault();
                    if (to != null)
                        model.toName = to.branchCode;

                    model.godownNo = check.godownNo;
                    var godownName = _tRSEntities.GodownMasters.Where(x => x.id == check.godownNo).FirstOrDefault();
                    if(godownName!=null)
                    model.godownName = godownName.godownName;

                    model.paymentType = check.paymentType;
                    model.actualWeight = check.actualWeight;
                    model.consignee = check.consignee;
                    var consigneeName = _tRSEntities.RegularClientMasters.Where(x => x.id == check.consignee).FirstOrDefault();
                    if (consigneeName != null)
                    {
                        model.consigneeName = consigneeName.clientCode;
                    }
                    //third day
                    model.cnNo = check.cnNo;
                    model.deliveryBranch = check.deliveryBranch;
                    var deliveryBranchName = _tRSEntities.BranchMasters.Where(x => x.id == check.deliveryBranch).FirstOrDefault();
                    if (deliveryBranchName != null)
                    {
                        model.deliveryBranchName = deliveryBranchName.deliveryAgainstAs;
                    }
                    

                    model.virtualGoddownNo = check.virtualGoddownNo;

                    var virtualGoddownName = _tRSEntities.VirtualGodownMasters.Where(x => x.id == check.virtualGoddownNo).FirstOrDefault();
                    if (virtualGoddownName != null)
                    {
                        model.virtualGoddownName = virtualGoddownName.virtualGodownCode;
                    }
                    model.consignorDetails = check.consignorDetails;
                    model.consignor = check.consignor;
                    var consignorName = _tRSEntities.RegularClientMasters.Where(x => x.id == check.consignor).FirstOrDefault();
                    if (consignorName != null)
                    {
                        model.consignorName = consignorName.gstIN;
                    }
                    model.agentName = check.agentName;
                    var clientName = _tRSEntities.RegularClientMasters.Where(x => x.id == check.agentName).FirstOrDefault();
                    if (clientName != null)
                    {
                        model.clientName = clientName.clientName;
                    }
                    model.agentDetails = check.agentDetails;
                    model.bookingType = check.bookingType;
                    model.deliveryType = check.deliveryType;
                    model.modeOfTransport = check.modeOfTransport;
                    model.invoiceNo = check.invoiceNo;
                    model.invoiceValue = check.invoiceValue;
                    model.consignorInvoice = check.consignorInvoice;
                    model.freightBasis = check.freightBasis;
                    model.ftl = check.ftl;
                    model.isCcAttached = check.isCcAttached;
                    model.isCod = check.isCod;
                    model.chargeWeight = check.chargeWeight;
                    model.freightRate = check.freightRate;
                    model.privateMark = check.privateMark;
                    model.insuredBy = check.insuredBy;
                    model.freight = check.freight;
                    model.surcharge = check.surcharge;
                    model.hamaliCharge = check.hamaliCharge;
                    model.localCartages = check.localCartages;
                    model.doorDeliveryCharge = check.doorDeliveryCharge;
                    model.statisticalCharges = check.statisticalCharges;
                    model.miscellaneousCharges = check.miscellaneousCharges;
                    model.godownCharges = check.godownCharges;
                    model.cod = check.cod;
                    model.riskCharge = check.riskCharge;
                    model.branch = check.branch;
                    model.reserveReason = check.reserveReason;
                    model.cnFrom = check.cnFrom;
                    model.cnTo = check.cnTo;
                        model.srtoNo = check.srtoNo;
                    model.lotNo = check.lotNo;
                    model.rollNo = check.rollNo;
                    model.meter = check.meter;
                    model.weightInKg = check.weightInKg;
                    var findPacketBooking = _tRSEntities.PackingMasters.Where(x => x.bookingId== id && x.isActive==true).ToList();
                    foreach (var item in findPacketBooking)
                    {
                        PackingModel pm = new PackingModel();
                        pm.id = item.id;
                        pm.article = item.article;
                        pm.actualWeight1 = item.actualWeight;
                        pm.packingType = item.packingType;
                        packingModels.Add(pm);
                    }
                    model.singleCn = packingModels;
                    return model;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

		public List<BookingModel> GetBookingDashBoard()
		{
			try
			{
				var CurrentDatestring = DateTime.Now.ToUniversalTime().AddMinutes(DateTime.Now.Subtract(DateTime.Now.ToUniversalTime()).TotalMinutes).ToString("yyyy/MM/dd");
				List<BookingModel> bookingModels = new List<BookingModel>();
				DateTime CurrentDate = Convert.ToDateTime(CurrentDatestring);
				DateTime BeforeFiveDay = CurrentDate.AddDays(-5);
				
				var BookingList = _tRSEntities.BookingMasters.Where(x => x.cn <= CurrentDate && x.cn >= BeforeFiveDay).OrderBy(x=>x.cn).ToList();
				if (BookingList != null)
				{

					foreach (var item in BookingList)
					{
						BookingModel model = new BookingModel();
						model.id= item.id;
						model.cn = item.cn;
						bookingModels.Add(model);
					}
				}
				return bookingModels;
			}
			catch (Exception e)
			{
				throw e;
			}
		}

    }
}
