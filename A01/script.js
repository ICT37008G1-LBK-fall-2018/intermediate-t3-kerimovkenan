let nums = prompt('Enter 2 number').split(' '),
    a = +nums[0],
    b = +nums[1],
    sum = 0;

if((a <= 0 || b <= 0 ) || (a >= 1000 || b >= 1000) || a >= b ){
    alert('არასწორი შუალედი');
}else{
    for(a; a<=b; a++){
        sum += a;
    }

    alert(sum);
}