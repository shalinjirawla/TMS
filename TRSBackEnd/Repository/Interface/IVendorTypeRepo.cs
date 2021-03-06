﻿using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVendorTypeRepo
    {
        List<VendorTypeModel> GetVendorTypes();
        bool SaveVendorType(VendorTypeModel model);
        VendorTypeModel GetTypeModel(int id);
        bool UpdateVendorType(VendorTypeModel model);
        bool DeleteVendorType(int id);
    }
}
