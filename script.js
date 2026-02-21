const prevButton=document.getElementById("prev");
const nextButton=document.getElementById("next");
const slides=document.querySelectorAll((".slide"));
let index= slides.findIndex(slide => slide.classList.contains("active"));

if(index === -1) index=0;
showSlide(index);

function showSlide(index){
    slides.forEach((slide,i) => {
        slide.classList.toggle("active",i ===index1)
    })
}

function showSlide(index){
    slides.forEach(slide=> slide.classList.remove("active"));
    slides[index].classList.add("active");
}


prevButton.addEventListener("click", ()=>{
    index=(index-1 +slides.length)%slides.length;
    showSlide(index);
});

nextButton.addEventListener("click", () =>{
    index=(index+1)%slides.length;
    showSlide(index);
});