const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    //#f15025
    let hexColor= "#";
    for (let i=0; i<6; i++){
        hexColor +=hex[getRandomNumber()]
    }
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor
})

function getRandomNumber(){
    //math.random have a value between 0 <= and <1, multiplying it by
    //length produce random a number between zero and length of array
    return Math.floor(Math.random()* hex.length);
}