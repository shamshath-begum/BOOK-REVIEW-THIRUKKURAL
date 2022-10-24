
let button=document.getElementById("button")
console.log(button)
let input=document.getElementById("input")
button.addEventListener('click',()=>{

let chapter=input.value;
    let apiurl=`https://api-thirukkural.vercel.app/api?num=${chapter}`
    async function thirukkural(){
        let res=await fetch(apiurl)
        let data=await res.json()
    
        console.log(data)
        // console.log(Object.values(data)[1])
        console.log(data.sect_tam)
        console.log(data.chapgrp_tam)
         console.log(Object.values(data)[2])
         console.log(Object.values(data)[3])
         console.log(Object.values(data)[4])
         console.log(Object.values(data)[5])
         console.log(Object.values(data)[6])
         console.log(Object.values(data)[7])
         console.log(Object.values(data)[8])
         console.log(Object.values(data)[9])
         console.log(Object.values(data)[10])
         console.log(Object.values(data)[11])

         let parent=document.createElement('p')
         parent.innerHTML=`<div class="wrapper">
         <div class="data-wrapper">
             <h5> SECTION:</h5>
             <span>${Object.values(data)[1]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5>CHAPTER GROUP:</h5>
             <span>${Object.values(data)[2]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5>CHAPTER:</h5>
             <span>${Object.values(data)[3]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5>KURAL 1:LINE 1:</h5>
             <span>${Object.values(data)[4]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5> KURAL 1:LINE 2:</h5>
             <span>${Object.values(data)[5]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5>EXPLANATION:</h5>
             <span>${Object.values(data)[6]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5> SECTION IN ENGLISH:</h5>
             <span>${Object.values(data)[7]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5> CHAPTER GROUP IN ENGLISH:</h5>
             <span>${Object.values(data)[8]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5>CHAPTER IN ENGLISH:</h5>
             <span>${Object.values(data)[9]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h4>KURAL 1: IN ENGLISH:</h4>
             <span>${Object.values(data)[10]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
             <h5>KURAL 1:EXPLANATION IN ENGLISH:</h5>
             <span>${Object.values(data)[11]}</span>
         </div>
     </div>`
     document.body.append(parent)
    }
    thirukkural()
})







