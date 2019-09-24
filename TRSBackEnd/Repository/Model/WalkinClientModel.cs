﻿using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class WalkinClientModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string contactperno { get; set; }
        public string address { get; set; }
        public int cityid { get; set; }
        public string pincode { get; set; }
        public int stateid { get; set; }
        public string STDcode { get; set; }
        public string phone { get; set; }
        public string mobile { get; set; }
        public string emailid { get; set; }
        public bool emailalert { get; set; }
        public bool mobilealert { get; set; }
        public string pan { get; set; }
        public string gstIN { get; set; }
        public string deliveryAgainstAsCnr { get; set; }
        public string deliveryAgainstAsCne { get; set; }
        public string companyname { get; set; }
        public string policyno { get; set; }
        public System.DateTime validfromdate { get; set; }
        public System.DateTime validtodate { get; set; }
        public string insuranceamount { get; set; }
        public bool isMarineIsured { get; set; }
        public bool isGodownIsured { get; set; }
        public bool isActive { get; set; }
        public string statename { get; set; }
        public string cityname { get; set; }
    }
}
