// Write a JavaScript program to determine if a given number is prime or not.
a = 1
number = 8
count = 0
while(a<=number){
    if(number%a==0){
        count++
    }
    a++
}

if(count==2){
    console.log(number, "prime")

}
else{
    console.log(number, 'not prime')
}
