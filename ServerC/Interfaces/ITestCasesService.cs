using ServerC.Models;



namespace ServerC.Interfaces
{
  public interface ITestCasesService
  {
    Task<TestCase> CreateTestCaseAsync(CreateTestCaseInput createTestCaseInput);
    Task<IEnumerable<TestCase>> GetAllTestCasesAsync();
    Task<TestCase> GetTestCaseByIdAsync(int id);
    Task<TestCase> UpdateTestCaseAsync(TestCase testCase);
    Task<int> DeleteTestCaseAsync(int id);
  }
}
