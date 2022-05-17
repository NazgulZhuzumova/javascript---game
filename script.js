var character = document.getElementById("block");
var block  = document.getElementById("block");
function jump(){
   if (character.classList != "animate"){
       character.classList.add("animate");
   }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var  characterTop =
    parseInt(window.get.ComputedStyle(character).getPropertyValue("top"));
    var  blockLeft =
    parseInt(window.get.ComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 %%
        characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("u lose.");
        }
}, 10);