public class Solution
{
    public int[] GetConcatenation(int[] nums)
    {
        int i = nums.Length;
        int[] ans = new int[2 * i];
        
        for (int x = 0; x < nums.Length; x++)
        {
            ans[x] = nums[x];
            ans[x + i] = nums[x];
        }

        return ans;
    }
}
