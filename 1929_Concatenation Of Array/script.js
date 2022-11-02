var getConcatenation = function(nums) {
    let ans = [];
    for (let x = 0; x < 2; x++) {
        for (let y = 0; y < nums.length; y++) {
            ans.push(nums[y]);
        }
    }
    return ans
}

var getConcatenation = function(nums) {
    
}

var getConcatenation = function(nums) {
    let length = nums.length
    for (let x = 0; x < length; x++){
        nums.push(nums[x]);
    }
    return nums;
}

var getConcatenation = function(nums) {
    let ans = nums.concat(nums);
    return ans
}

var getConcatenation = (nums) => nums.concat(nums);

var getConcatenation = nums => [...nums, ...nums];
 

