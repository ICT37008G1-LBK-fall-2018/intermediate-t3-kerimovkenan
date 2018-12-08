let nums = prompt('Enter 1 number').split(' '),
a = +nums[0],
sum = 0;

if((a <= 0) || (a >= 100)){
alert('არასწორი შუალედი');
}else{
for(var i = 0; i<a; i=i+2){
    sum += i;
}

alert(sum);
}