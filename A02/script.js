let btn = document.querySelector('#highlight-product'),
    modal = document.querySelector('#modal');


btn.addEventListener('click' , getColorById);

function getColorById(){

    let color = modal.firstElementChild.value,
        ID = modal.lastElementChild.value,
        productById = document.querySelector(`.phone-list-item[data-product-id='${ID}']`);
  
        modal.classList.toggle('hide');

    if((color && color[0] === '#' && color.length === 7) && productById){
        modal.classList.toggle('hide');
        productById.style.backgroundColor = color; 
    }else{
        if(color && ID){
            color = '';
            ID = '';
            alert('ჩანაწერი ვერ მოიძებნა');
          
        }
        
    }