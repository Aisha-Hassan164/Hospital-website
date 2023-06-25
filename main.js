// /button
const button = document.querySelector(".button")
const links = document.querySelector(".hear1")

button.addEventListener("click", ()=> {

    links.classList.toggle("active")
    console.log(links)
})


// alert("Hello Asha")

// let section = document.querySelector(".contor");
// let stat = document.querySelectorAll(" .tiro1 .sta");
// let start = false;

// window.onscroll = function(){
//     if(window.scrollY >= section.offsettTop){
//         if(!start){
//             stat.ForEach((sta) => startCount(sta));
//         }
//         start = true;
//     }
// }
// function startCount(el){
//     let max = el.dataset.max;
//     let  count = setInterval(() => {
//         el.textContent++;
//         if(el.textContent == max){
//             clearInterval(count);
//         }
//     }, 2000 / stat );
// }

// const sr = scrollReveal ({
//     distance: '65px',
//     duration: 2600,
//     delay: 450,
//     reset:true
// });
// sr.reveal('.pare1',{delay:200, origin:'top'});
