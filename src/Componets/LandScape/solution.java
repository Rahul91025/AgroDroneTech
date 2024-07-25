package Componets.LandScape;

public class solution {
    public int removeDuplicates(int[] nums) {
    
  
        int j = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        solution s = new solution();
        int[] arr = {2,2,3,4,5};
        System.out.println(s.removeDuplicates(arr));
    }
}
