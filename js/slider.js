    //------------------------------SLIDER
    // const imgItem = document.querySelectorAll(".aspect-ratio-169 img")
    // const imgItemContainer = document.querySelector(".aspect-ratio-169")
    // const dotItem = document.querySelectorAll(".dot")
    // let index = 0;
    // let imgLeng = imgItem.length
    // imgItem.forEach(function(image,index){
    //     image.style.left = index*100 + "%"
    //     dotItem[index].addEventListener("click",function(){
    //     slideRun (index)
    //     })
    // })
    // function slider (){
    //     index++;
    //     if(index >= imgLeng){index=0;
       
    //     }S
    //     slideRun (index)
    // }
    // function slideRun (index) {
    //     imgItemContainer.style.left = "-" + index*100 + "%"
    //     let dotActive = document.querySelector(".active")
    //     dotActive.classList.remove("active")
    //     dotItem[index].classList.add("active");
    // }
    
    // setInterval (slider,5000)


    const header = document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset
        if(x > 0){
            header.classList.add("sticky")
        }else {
            header.classList.remove("sticky")
        }
    })


    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector(".aspect-ratio-169")
    const dotItem = document.querySelectorAll(".dot")
    let imgNuber = imgPosition.length
    let index = 0

imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
    slider (index)
    })
})
function imgSlide (){
    index ++;
    console.log(index)
    if(index >= imgNuber){index = 0}
    slider (index)
}
function slider (index) {
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,4000)
