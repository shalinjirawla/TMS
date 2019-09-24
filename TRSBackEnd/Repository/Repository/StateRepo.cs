using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using Repository.DB;
using System.Linq;

namespace Repository.Repository
{
    public class StateRepo : IStateRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public StateRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool DeleteData(int id)
        {
            try
            {
                var Data = _tRSEntities.StateMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (Data != null)
                {
                    Data.IsActive = false;
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
        public StateModel getState(int id)
        {
            try
            {
                var Data = _tRSEntities.StateMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if(Data != null)
                {
                    StateModel model = new StateModel();
                    model.id = id;
                    model.GSTCode = Data.GSTCode;
                    model.Remark = Data.Remark;
                    model.StateName = Data.StateName;
                    model.StateRtoCode = Data.StateRtoCode;
                    model.IsActive = (bool)Data.IsActive;
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
        public List<StateModel> GetStates()
        {
            try
            {
                List<StateModel> models = new List<StateModel>();
                var Data = _tRSEntities.StateMasters.Where(x=>x.IsActive == true).ToList();
                foreach (var item in Data)
                {
                    StateModel model = new StateModel();
                    model.id = item.id;
                    model.Remark = item.Remark;
                    model.StateName = item.StateName;
                    model.StateRtoCode = item.StateRtoCode;
                    model.GSTCode = item.GSTCode;
                    model.IsActive = (bool)item.IsActive;
                    models.Add(model);
                }
                return models;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool SaveData(StateModel model)
        {
            try
            {
                var Data = _tRSEntities.StateMasters.Where(x => x.StateName.ToLower() == model.StateName.ToLower() && x.IsActive == true).FirstOrDefault();
                if (Data != null)
                {
                    return false;
                }
                else
                {
                    StateMaster master = new StateMaster();
                    master.GSTCode = model.GSTCode;
                    master.StateName = model.StateName;
                    master.Remark = model.Remark;
                    master.StateRtoCode = model.StateRtoCode;
                    master.IsActive = true;
                    _tRSEntities.StateMasters.Add(master);
                    _tRSEntities.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool UpdateData(StateModel model)
        {
            try
            {
                var CheckIfExist = _tRSEntities.StateMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (CheckIfExist == null)
                {
                    return false;
                }
                else
                {
                    CheckIfExist.GSTCode = model.GSTCode;
                    CheckIfExist.StateName = model.StateName;
                    CheckIfExist.Remark = model.Remark;
                    CheckIfExist.StateRtoCode = model.StateRtoCode;
                    CheckIfExist.IsActive = true;
                    _tRSEntities.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
