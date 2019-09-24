namespace Repository.Model
{
    public class StateModel
    {
        public int id { get; set; }
        public string GSTCode { get; set; }
        public string StateName { get; set; }
        public string StateRtoCode { get; set; }
        public string Remark { get; set; }
        public bool IsActive { get; set; }
    }
}
