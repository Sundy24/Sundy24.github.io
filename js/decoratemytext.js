var timer = null;
window.onload = function(){
    document.getElementById("btnBigDeco").onclick = setTimer;
    document.getElementById("ckBling").onchange = boldFont;
    document.getElementById("btnIgpay").onclick = toPigLatin;
    document.getElementById("btnMalk").onclick = replaceText;
};
function setTimer(){
    if(timer === null){
        timer = setInterval(increseFont,500);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}
function increseFont(){
    let mytext = document.getElementById("mytext");
    let curSize = parseInt(window.getComputedStyle(mytext).fontSize);
    curSize+= 2;
    mytext.style.fontSize= curSize + "pt" ;

}
function boldFont(){
    let mytext = document.getElementById("mytext");
    if(document.getElementById("ckBling").checked){
        mytext.style.fontWeight = "bold"; 
        mytext.className = "greenunderline";
        addBackground();
    }
    else{
        mytext.style.fontWeight = "normal";
        mytext.className = "";
        removeBackground();
        window.reload
    }
}
function addBackground(){
    let imgSrc = "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
    document.body.style.backgroundImage = "url("+ imgSrc+")";
}
function removeBackground(){
    document.body.style.backgroundImage = "none";
}
function toPigLatin(){
    let mytext = document.getElementById("mytext");
    let text = mytext.value; 
    if(text === null || text.trim() == ""){
        alert("There is no text.");
    }
    else{
        let newText = translatePigLatin(text);
        mytext.value = newText;
    }
}
function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}
function replaceText(){
    let mytext = document.getElementById("mytext");
    let text = mytext.value; 
    let newText = "";
    if(text === null || text.trim() == ""){
        alert("There is no text.");
    }
    else{
        let words = text.split(" ");
        words.forEach(element => {
            if(element.length >=5) element = "Malkovitch";
            newText += element+" ";
        });
        newText.slice(0, -2);
        mytext.value = newText;
    }
}