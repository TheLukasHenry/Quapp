using ServerC.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServerC.Interfaces
{
  public interface IFeaturesService
  {
    Task<Feature> CreateFeatureAsync(CreateFeatureInput createFeatureInput);
    Task<IEnumerable<Feature>> GetAllFeaturesAsync();
    Task<Feature> GetFeatureByIdAsync(int featureId);
    Task<IEnumerable<Feature>> GetFeaturesByCompanyAsync(int featureId);
    Task<Feature> UpdateFeatureAsync(Feature feature);
    Task<bool> DeleteFeatureAsync(int featureId);
  }
}
