let nums = [3,2,4];
let target = 6;

const twoSum = function(nums, target) {

    for (let x = 0; x < nums.length; x++){
        
       for (let y = 0; y < nums.length; y++){
             
            //Add Check for matching indexes
            console.log(`${nums[x]} + ${nums[y]}`)
            let test = nums[x] + nums[y];

            if (test == target){
                return `First is - ${nums[x]} - Second is ${nums[y]}   - Target was: ${target}`;
            }
       };

    }
};

console.log(twoSum(nums, target));

