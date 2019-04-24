//Q1
function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
         }
//result will be numSum(5)=15        

//Q2
function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
if (i%2==0){
        sum += i; }
         }
    console.log(sum)
         }
//result will be numSum(5)=6

//Q3
var grades = [8,2,2,4];
var total = 0;
const average=function([]){
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
console.log(avg)}
//result will be average([8,2,2,4])=4

//Q4
let stringToReverse = "caterpillar";
const reverse=function(){
console.log(stringToReverse.split("").reverse().join("").split(" ").reverse().join(" "));
}
//when i call reverse("caterpillar") the result will be >>rallipretac

//Q5
let arry=['test1', 'test2', 'test3'];
const addDash=function(arry){
for (i=0;i<arry.length;i++)
console.log(arry.join(" - "));
}
//when i call addDash(['test1', 'test2', 'test3']) , result will be test1 - test2 - test3

