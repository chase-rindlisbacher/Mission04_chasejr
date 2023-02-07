using Microsoft.AspNetCore.Mvc;
/* Make sure to import the Models directory so you can call the validator class */
using Mission04_chasejr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_chasejr.Controllers
{
    public class HomePageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        /* This will catch the post method that is called and return an instance of the validator 
         * class in the model object */
        [HttpPost]
        public IActionResult Calculator(Validator model)
        {
            return View();
        }
    }
}
