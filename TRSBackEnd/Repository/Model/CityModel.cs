using Repository.DB;
using System;

namespace Repository.Model
{
    public class CityModel
    {
        public int id { get; set; }
        public int stateId { get; set; }
        public string cityCode { get; set; }
        public string cityName { get; set; }
        public string remark { get; set; }
        public Nullable<int> stdCode { get; set; }
        public bool IsActive { get; set; }
    }
}
