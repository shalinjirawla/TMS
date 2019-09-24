using Repository.Model;
using System.Collections.Generic;

namespace Repository.Interface
{
    public interface IRegionRepo
    {
        bool SaveRegion(RegionModel model);
        List<RegionModel> GetRegions();
        bool UpdateRegion(RegionModel model);
        bool DeleteRegion(int id);
        RegionModel getRegion(int id);
    }
}
