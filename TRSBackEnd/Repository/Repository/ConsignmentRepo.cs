using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;
using Repository.Model;
using Repository.Interface;

namespace Repository.Repository
{
    public class ConsignmentRepo:IConsignmentRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public ConsignmentRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<ConsignmentModel> GetConsignmentModels()
        {
            try
            {
                List<ConsignmentModel> consignments = new List<ConsignmentModel>();
                var data = tRSEntities4.ConsignmentOperations.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    ConsignmentModel model = new ConsignmentModel
                    {
                        id = item.id,
                        cndate = item.cndate,
                        expectedDelivery = item.expectedDelivery,
                        from = item.from,
                        to = item.to,
                        godownNo = item.godownNo,
                        paymentType = item.paymentType,
                        actualWeight = item.actualWeight,
                        consignee = item.consignee,
                        cnNo = item.cnNo,
                        deliveryBranch = item.deliveryBranch,
                        virtualGoddownNo = item.virtualGoddownNo,
                        consignorDetails = item.consignorDetails,
                        consignor = item.consignor,
                        agentName = item.agentName,
                        agentDetails = item.agentDetails,
                        bookingType = item.bookingType,
                        deliveryType = item.deliveryType,
                        modeOfTransport = item.modeOfTransport,
                        invoiceNo = item.invoiceNo,
                        invoiceValue = item.invoiceValue,
                        consignorInvoice = item.consignorInvoice,
                        freightBasis = item.freightBasis,
                        ftl = item.ftl,
                        isCcAttached = item.isCcAttached,
                        isCod = item.isCod,
                        chargeWeight = item.chargeWeight,
                        freightRate = item.freightRate,
                        privateMark = item.privateMark,
                        insuredBy = item.insuredBy,
                        freight = item.freight,
                        surcharge = item.surcharge,
                        hamaliCharge = item.hamaliCharge,
                        localCartages = item.localCartages,
                        doorDeliveryCharge = item.doorDeliveryCharge,
                        statisticalCharges = item.statisticalCharges,
                        miscellaneousCharges = item.miscellaneousCharges,
                        godownCharges = item.godownCharges,
                        cod = item.cod,
                        financeEffect = item.financeEffect,
                        isActive = true,
                        godownName = tRSEntities4.GodownMasters.Where(x => x.id == item.godownNo).Select(x => x.godownCode).FirstOrDefault(),
                        fromName = tRSEntities4.BranchMasters.Where(x => x.id == item.from).Select(x => x.branchName).FirstOrDefault(),
                    };
                    consignments.Add(model);
                }
                return consignments;
            }
            catch (Exception e)
            {

                throw e;
            }
            
        }

        public bool SaveConsignment(ConsignmentModel model)
        {
            try
            {
                //var data = tRSEntities4.ConsignmentOperations.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (model!=null)
                {
                    ConsignmentOperation operation = new ConsignmentOperation
                    {
                        cndate = model.cndate,
                        expectedDelivery = model.expectedDelivery,
                        from = model.from,
                        to = model.to,
                        godownNo = model.godownNo,
                        paymentType = model.paymentType,
                        actualWeight = model.actualWeight,
                        consignee = model.consignee,
                        cnNo = model.cnNo,
                        deliveryBranch = model.deliveryBranch,
                        virtualGoddownNo = model.virtualGoddownNo,
                        consignorDetails = model.consignorDetails,
                        consignor = model.consignor,
                        agentName = model.agentName,
                        agentDetails = model.agentDetails,
                        bookingType = model.bookingType,
                        deliveryType = model.deliveryType,
                        modeOfTransport = model.modeOfTransport,
                        invoiceNo = model.invoiceNo,
                        invoiceValue = model.invoiceValue,
                        consignorInvoice = model.consignorInvoice,
                        freightBasis = model.freightBasis,
                        ftl = model.ftl,
                        isCcAttached = model.isCcAttached,
                        isCod = model.isCod,
                        chargeWeight = model.chargeWeight,
                        freightRate = model.freightRate,
                        privateMark = model.privateMark,
                        insuredBy = model.insuredBy,
                        freight = model.freight,
                        surcharge = model.surcharge,
                        hamaliCharge = model.hamaliCharge,
                        localCartages = model.localCartages,
                        doorDeliveryCharge = model.doorDeliveryCharge,
                        statisticalCharges = model.statisticalCharges,
                        miscellaneousCharges = model.miscellaneousCharges,
                        godownCharges = model.godownCharges,
                        cod = model.cod,
                        financeEffect = model.financeEffect,
                        isActive = true,
                    };
                    tRSEntities4.ConsignmentOperations.Add(operation);
                    tRSEntities4.SaveChanges();
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

        public  ConsignmentModel GetConsignmentModel(int id)
        {
            try
            {
                var data = tRSEntities4.ConsignmentOperations.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    ConsignmentModel model = new ConsignmentModel();
                    model.id = data.id;
                    model.cnNo = data.cnNo;
                    model.cndate = data.cndate;
                    model.expectedDelivery = data.expectedDelivery;
                    model.from = data.from;
                    model.to = data.to;
                    model.godownNo = data.godownNo;
                    model.paymentType = data.paymentType;
                    model.actualWeight = data.actualWeight;
                    model.consignee = data.consignee;
                    model.deliveryBranch = data.deliveryBranch;
                    model.virtualGoddownNo = data.virtualGoddownNo;
                    model.consignorDetails = data.consignorDetails;
                    model.consignor = data.consignor;
                    model.agentName = data.agentName;
                    model.agentDetails = data.agentDetails;
                    model.bookingType = data.bookingType;
                    model.deliveryType = data.deliveryType;
                    model.modeOfTransport = data.modeOfTransport;
                    model.invoiceNo = data.invoiceNo;
                    model.invoiceValue = data.invoiceValue;
                    model.consignorInvoice = data.consignorInvoice;
                    model.freightBasis = data.freightBasis;
                    model.ftl = data.ftl;
                    model.isCcAttached = data.isCcAttached;
                    model.isCod = data.isCod;
                    model.chargeWeight = data.chargeWeight;
                    model.freightRate = data.freightRate;
                    model.privateMark = data.privateMark;
                    model.insuredBy = data.insuredBy;
                    model.freight = data.freight;
                    model.surcharge = data.surcharge;
                    model.hamaliCharge = data.hamaliCharge;
                    model.localCartages = data.localCartages;
                    model.doorDeliveryCharge = data.doorDeliveryCharge;
                    model.statisticalCharges = data.statisticalCharges;
                    model.miscellaneousCharges = data.miscellaneousCharges;
                    model.godownCharges = data.godownCharges;
                    model.cod = data.cod;
                    model.financeEffect = data.financeEffect;
                    model.packingtype = data.packingtype;
                    model.isActive = true;
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

        public  bool UpdateConsignment(ConsignmentModel model)
        {
            try
            {
                var data = tRSEntities4.ConsignmentOperations.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.cnNo = model.cnNo;
                    data.cndate = model.cndate;
                    data.expectedDelivery = model.expectedDelivery;
                    data.from = model.from;
                    data.to = model.to;
                    data.godownNo = model.godownNo;
                    data.paymentType = model.paymentType;
                    data.actualWeight = model.actualWeight;
                    data.consignee = model.consignee;
                    data.deliveryBranch = model.deliveryBranch;
                    data.virtualGoddownNo = model.virtualGoddownNo;
                    data.consignorDetails = model.consignorDetails;
                    data.consignor = model.consignor;
                    data.agentName = model.agentName;
                    data.agentDetails = model.agentDetails;
                    data.bookingType = model.bookingType;
                    data.deliveryType = model.deliveryType;
                    data.modeOfTransport = model.modeOfTransport;
                    data.invoiceNo = model.invoiceNo;
                    data.invoiceValue = model.invoiceValue;
                    data.consignorInvoice = model.consignorInvoice;
                    data.freightBasis = model.freightBasis;
                    data.ftl = model.ftl;
                    data.isCcAttached = model.isCcAttached;
                    data.isCod = model.isCod;
                    data.chargeWeight = model.chargeWeight;
                    data.freightRate = model.freightRate;
                    data.privateMark = model.privateMark;
                    data.insuredBy = model.insuredBy;
                    data.freight = model.freight;
                    data.surcharge = model.surcharge;
                    data.hamaliCharge = model.hamaliCharge;
                    data.localCartages = model.localCartages;
                    data.doorDeliveryCharge = model.doorDeliveryCharge;
                    data.statisticalCharges = model.statisticalCharges;
                    data.miscellaneousCharges = model.miscellaneousCharges;
                    data.godownCharges = model.godownCharges;
                    data.cod = model.cod;
                    data.financeEffect = model.financeEffect;
                    data.packingtype = model.packingtype;
                    tRSEntities4.SaveChanges();
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

        public bool DeleteConsignment(int id)
        {
            try
            {
                var data = tRSEntities4.ConsignmentOperations.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
