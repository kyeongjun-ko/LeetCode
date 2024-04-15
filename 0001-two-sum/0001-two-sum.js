/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const findTarget = target - nums[i];

        if (nums.includes(findTarget)) {
            const targetIndex = nums.indexOf(findTarget);

            if (targetIndex !== i) {
                return [i, targetIndex];
            }
        }
    }
};