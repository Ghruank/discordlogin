var regbool;
// var names = []
// var usernames = [];
// var passwords = [];
var usernames = JSON.parse(localStorage.getItem("usernames"))
var passwords = JSON.parse(localStorage.getItem("passwords"))
var names = JSON.parse(localStorage.getItem("names"))
if (!usernames){usernames=[]}
if (!passwords){passwords=[]}
if (!names){names=[]}

function onClick(){


    const user = document.querySelector("#input_id1").value;
    const pass = document.querySelector("#input_id2").value;
    let index = usernames.indexOf(user);
    let hash = passwords.indexOf(pass);
    if(index!=-1 && hash != -1 && index==hash){
        document.querySelector(".loginform").style.display="none";
        document.querySelector(".qrform").style.display="none";
        document.querySelector(".logincontainer").innerHTML=
        "<div class=\"hehe\"><div class=\"texthead\">Hello <span class=\"ha\"></span>, You are successfully logged in</div><div class=\"textsubhead\">Redirecting you to discord.gg</div></div>"
        document.querySelector(".ha").textContent=names[index];
    }
    else if(index!=-1 && hash != -1 && index!=hash){
        document.querySelector(".inv1").innerHTML=
        "";
        document.querySelector(".inv2").innerHTML=
        "invalid password";
        
    }
    else{
        document.querySelector(".inv1").innerHTML=
        "invalid email";
    }

}
function register(){
    document.querySelector("#input_id1").value=""
    document.querySelector("#input_id2").value=""
    document.querySelector(".inv1").innerHTML=""
    document.querySelector(".inv2").innerHTML=""

    regbool=1;
    document.querySelector(".reg").innerHTML=
    "<div class=\"flex\"><label for=\"input_id1\">USERNAME<span style=\"color: red;\">*</span></label><input type=\"text\" id=\"input_id3\" name=\"input_name\"><br/></div>"
    document.querySelector("button").textContent="Register"
    document.querySelector(".d").style.display="none"
    document.querySelector(".flexrow > p").innerHTML="Already registered? "
    document.querySelector(".flexrow > .a").innerHTML="Login"
    document.querySelector(".flexrow > .a").onclick = login
    // console.log(user)
    document.querySelector("button").onclick = function(){
        var user = document.querySelector("#input_id1").value;
        var pass = document.querySelector("#input_id2").value;
        var name = document.querySelector("#input_id3").value;
        login(user,pass,name);
    }
}

function login(a,b,c){
    console.log(a);
    usernames.push(a);
    passwords.push(b);
    names.push(c);
    localStorage.setItem("usernames",JSON.stringify(usernames))
    localStorage.setItem("passwords",JSON.stringify(passwords))
    localStorage.setItem("names",JSON.stringify(names))
    regbool=2
   document.querySelector("#input_id1").value=""
    document.querySelector("#input_id2").value=""
    document.querySelector(".reg").innerHTML="";
    document.querySelector("button").textContent="Log In"
    document.querySelector(".d").style.display=""
    document.querySelector(".flexrow > p").innerHTML="Need an account? "
    document.querySelector(".flexrow > .a").innerHTML="Register"
    document.querySelector(".flexrow > .a").onclick=register
    document.querySelector("button").onclick=onClick;

}
function regg(a,b){
    usernames.push(a);
    passwords.push(b);
    console.log(usernames);
    console.log(passwords);
}