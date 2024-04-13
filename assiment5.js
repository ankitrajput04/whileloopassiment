// Write a JavaScript program to find the sum of odd numbers from 1 to 50.

sum =  0
a = 1
b = 50

while(a<=b){
    if(a%2==1){
        sum = a+sum
        console.log("even",a)
    }
    a++
}
console.log(sum)