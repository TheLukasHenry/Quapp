using ServerC.Models;

namespace ServerC.Interfaces
{
  public interface ITestResultsService
  {
    Task<TestResult> CreateTestResultAsync(CreateTestResultInput createTestResultInput);
    Task<IEnumerable<TestResult>> GetAllTestResultsAsync();
    Task<IEnumerable<TestResult>> GetTestResultsByFeatureIdAsync(int featureId);
  }
}
