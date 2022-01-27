/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq={}
    let max_freq=0,max_value
    nums.forEach(value=>{
​
        if(freq[value]){
            freq[value]++
            if(freq[value]>max_freq){
                                max_freq=freq[value]
                max_value=value
            }
​
        }else{
            freq[value]=1
        }
    })
    if(max_value===undefined){
        return nums[0]
    }
    return max_value
    
};
