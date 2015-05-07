// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }
    // myUtils.myMap
    function myMap(arr,cb) {
        var arr2 = [];
        for (i=0;i<arr.length;i++) {
             arr2[i] = cb(arr[i], i, arr);
        }
        return arr2;
    }
    //myMap driver
    //var arr2 = myMap(arr,function(v,i,arr){return v = v + i;});

    // myUtils.myReduce
    //executes cb once for element, no empties
    //four arg, initial val(or previous val), value of current element
    //current index, and array
function myReduce(arr,cBack,initVal) {
    //var accumulator;
    var start = initVal ? 0 : 1;
    //var previousValue = initVal ? initVal : arr[0];
    var accumulator = initVal ? initVal : arr[0];
    for (i=start;i<arr.length;i++) {
        //console.log(accumulator);
        //accumulator = accumulator + cBack(previousValue,arr[i],i,arr);
        accumulator = cBack(accumulator,arr[i],i,arr);
    }
return accumulator;
}

//drivers
var arr = [30,45,32,56,93,105];
var arr2 = myReduce(arr,function(preVal,curVal,index,arr){
    console.log(arguments);
    return preVal+curVal;
});
    // myUtils.buildElement
    
    // myUtils.toDollarAmount;
    // myUtils.toCurrencyString;
    
}.call(this))
