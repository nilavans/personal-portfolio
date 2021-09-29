
window.addEventListener("load",function(){
    document.querySelector(".preload").classList.add("opacity-0")
    setTimeout(()=>{
        document.querySelector(".preload").style.display="none"
    },1000)
})
window.onscroll=function(){
    scrollBox();
}
const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');
navToggle.addEventListener('click',()=>{
    nav.classList.toggle('open')
})
const navLink=document.querySelectorAll('.nav-link');
function linkAction(){
    const nav=document.querySelector('.nav');
    nav.classList.remove('open');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));
const header=document.querySelector('.header');
let pos=header.offsetTop+150;
function scrollBox(){
    if(window.pageYOffset >pos){
        header.classList.add('fixed');
    }
    else{
        header.classList.remove('fixed');
    }
}
const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn= filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItems=portfolioItems.length; 
      for(let i=0;i<totalFilterBtn;i++){
          filterBtns[i].addEventListener('click',function(){
              filterContainer.querySelector('.active').classList.remove('active');
              this.classList.add('active');
              const filterValue=this.getAttribute("data-filter");
              for(let k=0;k<totalPortfolioItems;k++){
                  if(filterValue==portfolioItems[k].getAttribute('data-category')){
                    portfolioItems[k].classList.add("show");
                    portfolioItems[k].classList.remove("hide");
                  }
                  else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
                if(filterValue=="all"){
                  portfolioItems[k].classList.add("show");
                  portfolioItems[k].classList.remove("hide"); 
                }
              }
          })
      }
      const lightbox=document.querySelector(".lightbox"),
      lightboxImg=document.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=document.querySelector(".caption-text"),
      lightboxCounter=document.querySelector(".caption-counter");
      let itemIndex=0;
      for(let i=0;i<totalPortfolioItems;i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex=i
            changeItem();
            toggleLightbox();
        })
    }
    function nextItem(){
        if(itemIndex==totalPortfolioItems-1){
            itemIndex=0
        }
        else{
            itemIndex++
        }
        changeItem();
    }
    function prevItem(){
        if(itemIndex==0){
           itemIndex=totalPortfolioItems-1;
        }
        else{
            itemIndex--
        }
        changeItem();
    }
    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }
    function changeItem(){
        imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector('h4').innerHTML;
        lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioItems;
    }
    lightbox.addEventListener("click",function(event){
         if(event.target==lightboxClose || event.target==lightbox){
             toggleLightbox();
         }
    })