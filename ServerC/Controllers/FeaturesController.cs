
// using Microsoft.AspNetCore.Mvc;
// // using ServerC.Helpers;
// using ServerC.Models;
// using ServerC.Services;


// namespace ServerC.Controllers.Features
// {
//   [ApiController]
//   [Route("[controller]")]
//   public class FeaturesController : ControllerBase
//   {
//     private readonly DatabaseHelper _databaseHelper;

//     public FeaturesController(DatabaseHelper databaseHelper)
//     {
//       _databaseHelper = databaseHelper;
//     }

//     [HttpGet]
//     public async Task<ActionResult<IEnumerable<Feature>>> GetFeatures()
//     {
//       IEnumerable<Feature> features = await _databaseHelper.GetAllFeaturesAsync();
//       return Ok(features);
//     }
//   }
// }
