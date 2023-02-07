using System;
using System.Collections.Generic;
/*this line will allow me to use the range validator class*/
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_chasejr.Models
{
    public class Validator
    {
        /* For each field of the form make a validator that will make sure the number entered is 
           between 0 and 100. I used a byte type because the number doesn't need to be larger than 100. */
        [Range(0,100,ErrorMessage = "Enter a number between 0 and 100 in every field")]
        public byte Assignments { get; set; }
        [Range(0,100,ErrorMessage="Enter a number between 0 and 100 in every field")]
        public byte Group_project { get; set; }
        [Range(0,100,ErrorMessage="Enter a number between 0 and 100 in every field")]
        public byte Quizzes { get; set; }
        [Range(0,100,ErrorMessage="Enter a number between 0 and 100 in every field")]
        public byte Midterm { get; set; }
        [Range(0,100,ErrorMessage="Enter a number between 0 and 100 in every field")]
        public byte Final { get; set; }
        [Range(0,100,ErrorMessage="Enter a number between 0 and 100 in every field")]
        public byte Intex { get; set; }
    }
}
