let arr=[7, 30, 47, 60, 76, 86, 93, 105, 740]
/* let arr=[7, 30, 47, 60, 76, 93, 105] */

let first=false;
let last=false;
let middleTwo=false;
let smaller=false;
let bigger=false;
let middleMiss=false;

binarySearchTest(binarySearch,arr)


function binarySearch(list,num){
    let index=-1;
    let lower=0;
    let upper=list.length;

    while(lower<=upper) {
        let avg = Math.floor((lower+upper)/2);
        if (num==list[avg]) {
            index=avg;
            break;
        }
        else if (num<list[avg]) {
            upper=avg-1;
        }
        else {
            lower=avg+1;
        }
    }
    
    return index;
}

function binarySearchTest(func,list){
    if(func(list,7)==0)
        first=true;

    if (func(list,740)==list.length-1)
        last=true;
    
    if(func(list,76)== 4 && func(list,93)== 6)
        middleTwo=true;
    
    if(func(list,5)==-1)
        smaller=true;

    if(func(list,820)==-1)
        bigger=true;

    if(func(list,80)==-1)
        middleMiss=true;

    if(first && last && middleTwo && smaller && bigger && middleMiss)
        return console.log("True");
    else
        return console.log("False");
}