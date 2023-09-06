var num=document.querySelectorAll(".drum").length
//console.log(num)

for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("Clicked")
        // console.log(this.innerHTML)
        var btn=this.innerHTML
        switch(btn){
            case 'z':
                var audio=new Audio("sounds/tom-1.mp3")
                audio.play();
            break;
            case 'x':
                var audio=new Audio("sounds/tom-2.mp3")
                audio.play();
            break;
            case 'c':
                var audio=new Audio("sounds/tom-3.mp3")
                audio.play();
            break;
            case 'v':
                var audio=new Audio("sounds/tom-4.mp3")
                audio.play();
            break;
            case 'b':
                var audio=new Audio("sounds/snare.mp3")
                audio.play();
            break;
            case 'n':
                var audio=new Audio("sounds/crash.mp3")
                audio.play();
            break;
            case 'm':
                var audio=new Audio("sounds/kick-bass.mp3")
                audio.play();
            break;
            
        }
        
    }) 
}
document.addEventListener("keypress",function(e){
    // alert("Clicked")
    // console.log(this.innerHTML)
    var key=e.key.toLowerCase()
    switch(key){
        case 'z':
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
        break;
        case 'x':
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
        break;
        case 'c':
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
        break;
        case 'v':
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
        break;
        case 'b':
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
        break;
        case 'n':
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
        break;
        case 'm':
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
        break;
        default:
            audio.play()  
    }
    
})