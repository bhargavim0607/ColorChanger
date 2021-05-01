const rgb=0;
let cod = {d:"1"};
//console.log(c);
function change(){
    //console.log(c.d);
    if(cod.d==2){
        var a=new Number(Math.floor(Math.random() * 255) + 1);
        var b=new Number(Math.floor(Math.random() * 255) + 1);
        var c=new Number(Math.floor(Math.random() * 255) + 1);
        console.log(a,b,c);
        const rgb = `rgb(${a},${b},${c})`;
    //document.getElementById("body").setAttribute("style","background-color: rgb(a,b,c);");
        document.getElementById("bod").style.backgroundColor = rgb;
        document.getElementById("code").innerHTML=rgb;
    }else if(cod.d==1){
        var randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("bod").style.backgroundColor = randomColor;
        document.getElementById("code").innerHTML=randomColor;
    }
}
function hex(){
    cod.d="1";
    console.log(cod.d);
}
function rg(){
    cod.d="2";
    console.log(cod.d);
}




// var color = new RGBColor('darkblue');
// if (color.ok) { // 'ok' is true when the parsing was a success
//     // alert channels
//     alert(color.r + ', ' + color.g + ', ' + color.b);
//     // alert HEX and RGB
//     alert(color.toHex());
//     alert(color.toRGB());
// }