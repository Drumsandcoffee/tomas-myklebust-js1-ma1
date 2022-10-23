




/*Question 1*/

const cat = {
    complain: function(){
        console.log("Meow!")
    }
}
console.log(cat)

/*Question 2*/

var heading = document.querySelector("h3")


    heading.innerHTML = "Updated heading"


/*Question 3*/

heading.style.fontSize = "2em"

/*Question 4*/

heading.className = "subheading"

console.log(heading)

/*question 5*/

var paragraphs = document.querySelectorAll("p")

       for( var i = 0; i < paragraphs.length; i++)
        paragraphs[i].style.color = "red"


/*Question 6*/

var resultsContainer = document.querySelector(".results");

    resultsContainer.innerHTML = "<p>New paragraph</p>"
    resultsContainer.style.backgroundColor = "yellow"
    
/*Question 7*/


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



function list(){

for(  i = 0; i < cats.length; i++){
    console.log(cats[i].name);
}
}
list(cats);

/*Question 8*/

const container = document.querySelector(".cat-container");

let html = "";

function createCats(cats){

    for( let i = 0; i < cats.length; i++){
        if(cats[i].age == null){
            cats[i].age = "Age Unknown"
        }      
    html += `<div>
                <h5>${cats[i].name}</h5>
                <p>${cats[i].age}</p>
             </div>`  
}}
createCats(cats)

container.innerHTML = html;
