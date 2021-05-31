

/* -----------------------------Fonction numero 1 - Afficher un "clique" sur footer en console 
 e = document.querySelector('footer')

 e.addEventListener("clique", function(){ 
    
     console.log("clique")

 })
*/ 


// ---------------------------Fonction numéro 1bis - Coumpte des cliques en console

e = document.querySelector('footer')

f = 0

e.addEventListener("click", function(){ 
    console.log(`clique numéro ${++f}`)
})


// ---------------------------Fonction numéro 2 - Menu Hamburger 

h = document.querySelector('button')

h.addEventListener("click", function(){
    document.querySelector('#navbarHeader').classList.toggle("collapse")
})


// ---------------------------Fonction numéro 3 - Card 1
let j = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
let onClick = function(k) {
    this.classList.add('bg-danger')
    k.preventDefault()
    j.removeEventListener('click', onClick)
}

j.addEventListener('click', onClick)


// ---------------------------Fonction numéro 4 - Card 2
let l = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
let onClick2 = function() {
    l.classList.toggle('text-success')
}

l.addEventListener('click', onClick2)

// ---------------------------Fonction numéro 5- Remove link 

h = document.querySelector('header')

h.addEventListener("dblclick", function(){
 
 
 document.querySelector('link').toggleAttribute("disabled")
    // h.addEventListener("dblclick", function(){
    //     document.location.reload()
    // })
 

})

// ---------------------------Fonction numéro 5bis - Remove link (méthode refresh)

/*h = document.querySelector('header')

h.addEventListener("dblclick", function(){
 
 
 document.querySelector('link').toggleAttribute("href")
    h.addEventListener("dblclick", function(){
        document.location.reload()
    })
 

}) */ 

// ---------------------------Fonction numéro 6 - Réduire les card à partir de view 

// let viewBtns = document.querySelectorAll(".btn-success");

// for (let i = 0; i < viewBtns.length; i++) {

//   viewBtns[i].addEventListener("mouseenter", function () {

//     let cardImage = document.querySelectorAll(".card-img-top")[i];
//     let cardText = document.querySelectorAll(".card-text")[i];

//     cardText.toggleAttribute('hidden');

//     if(cardImage.style.width==='20%'){
//       cardImage.style.width='100%';
//     } else{
//       cardImage.style.width='20%';
//     }
    
    
//   });
// }


// ---------------------------Fonction numéro 7 - Réduire les card à partir de view 
let rightArrow = document.querySelector(".btn-secondary.my-2");

rightArrow.addEventListener("click", function () {
  let allCards = document.querySelectorAll(".col-md-4");
  let lastCard = document.querySelectorAll(".col-md-4")[5];
  let parent = lastCard.parentElement;
  parent.insertBefore(allCards[5], allCards[0]);
});


