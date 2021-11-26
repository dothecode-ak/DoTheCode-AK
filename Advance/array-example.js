 var nums=[1,0,1,1,0,0];

// console.log(arr);
var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[count++] = nums[i];
        }
    }

    for (let i = count; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;    
};
let o=moveZeroes(nums);
console.log(o);
 

