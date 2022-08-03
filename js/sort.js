const sortItems=document.querySelectorAll('.goods-sort__item');
const sort=document.querySelector('.goods-sort');
const sortList=document.querySelector('.goods-sort ul');
const sortCurrent=document.querySelector('.goods-sort__current');




sort.addEventListener('click',function(){
sortList.classList.toggle('active');

});

sortItems.forEach((item)=>{
  item.addEventListener('click',function(e){
    sortItems.forEach((item)=>{
      item.classList.remove('goods-sort__item_active')
    })
    item.classList.add('goods-sort__item_active')
   sortCurrent.innerHTML=e.target.textContent
  })
})