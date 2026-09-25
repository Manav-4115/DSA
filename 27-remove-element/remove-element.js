var removeElement = function(nums, val) {
    let k = 0; // Pointer for the next valid element position
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};