//document.getElementById("fgh").innerText = 800
let countEL=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
function increment(){
    count++
    countEL.innerHTML=count
}
function save(){
    let co=count+"-"
saveEl.textContent+=co
countEL.innerHTML=0
count=0

}

