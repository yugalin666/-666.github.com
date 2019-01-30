var x = 0;
while(x == 0){
var user = prompt("剪刀，石頭，布?");
var computer = Math.random();
if(computer < 0.33){
    computer = "剪刀";
}
else if(computer <= 0.67){
    computer = "石頭";
}
else{
    computer = "布";
}

alert("電腦出" + computer);

console.log( judge(user, computer));

function judge(user,computer){

if(user == computer){
    alert("fair,讓你的");
}

else if(user == "剪刀"){
    if(computer == "布"){
        alert("you win , 賽到的");
    }
    else{
        alert("you lose , 廢物 !");
    }
}

else if(user == "石頭"){
    if(computer == "剪刀"){
        alert("you win , 運氣好啦");
    }
    else{
        alert("you lose , 拉基 !");
    }
}
    
else if(user == "布"){
    if (computer == "石頭"){
        alert("you win , 阿是郭");
    }
    else{
        alert("you lose , 垃圾!");
    }
}
else{
    alert("再亂打阿,低能兒");
}
    
}   
}
