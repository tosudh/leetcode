/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num<10){
        return num;
    }
    
    let sum = 0
    while(num>9){
        let temp = num;
        sum=0
        while(temp){
            sum+=temp%10
            temp=parseInt(temp/10)
        }
        num=sum
    }
    return sum;
    
};
