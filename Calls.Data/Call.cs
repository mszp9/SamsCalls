using System;
using System.Collections.Generic;
using System.Text;

namespace SamsCalls.Data
{
   public class Call
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Zip { get; set; }
        public string Neighborhood { get; set; }
        public string Landlord { get; set; }
        public string Appliance { get; set; }
        public string Brand { get; set; }
        public string ApplianceLocation { get; set; }
        public string Type { get; set; }
        public string WorkPreformed { get; set; }
        public string AdditionalWorkAndNotes { get; set; }
        public int Calls { get; set; }
        public string ReasonForReturn { get; set; }
        public int Ammout { get; set; }
        public string MethodOfPayment { get; set; }
        public DateTime Date { get; set; }
 
    }
}

