// EASY: Write a function that takes in an array of numbers and outputs 
// the average of all the numbers.

var nums = [10, 5];

function getAvg (array) {
 var total = 0;
 var count = 0;
 array.forEach(function(item, index){
     total += item;
     count++;
 });
 return total / count;   
}

console.log(getAvg(nums))

// Medium

var numsM = [4,5,6,7,0,1,2];

function getTarget(array, tar) {

    var output = 0;
    for (i = 0; i < array.length; i++) {
        output = array.indexOf(tar);
    }

    return output;
}

console.log(getTarget(numsM, 3));
// Hard -- On Index.html

//Very Hard

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
          
         }
         
    }
} 
console.log(amountTocoins(11, [5, 2, 1]));



