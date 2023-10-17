const sliderContainer = document.querySelector('.slider-main');
const data = document.querySelector('#test')
const items = document.querySelector('.features-box');
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");


console.log(data)
setInterval(()=>{
  sliderContainer.append(sliderContainer.children[0]);
  
},1000)


console.log(sliderContainer.children)


// next btn function 
next.addEventListener("click", ()=>{
 sliderContainer.append(sliderContainer.children[0]);

})

// prev btn function 
prev.addEventListener("click", ()=>{
  sliderContainer.prepend(sliderContainer.children[sliderContainer.children.length -1])
 })
