var mname = " ";
var fname=" ";
var email =" ";
var datebirth=" ";
var men=" ";
var women=" ";
function updateValue(){
    mname = document.querySelector(".mname").value;
    fname = document.querySelector(".fname").value;
    email = document.querySelector(".email").value;
    datebirth = document.querySelector(".datebirth").value;
    men = document.querySelector(".men").value;
    women = document.querySelector(".women").value;

    

   //  console.log(mname)
}

document.getElementById("submit").onclick=function()
{
    document.getElementById("table").style.display="block";
    
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var fathername = row.insertCell(1);
    var emailnum = row.insertCell(2);
    var datebirth= row.insertCell(3);
    var gender= row.insertCell(4);
    var program= row.insertCell(5);
    var session= row.insertCell(6);
    var about= row.insertCell(7);
    var rollnum= row.insertCell(8);

   // name.innerHTML = document.getElementsByClassName("name").value;
    name.innerHTML = mname
    //fathername.innerHTML = document.getElementsByClassName("fathername").value;
    fathername.innerHTML=fname
   // emailnum.innerHTML = document.getElementsByClassName("emailnum").value;
     email.innerHTML= email
    datebirth.innerHTML = document.getElementsByClassName("datebirth").value;
    gender.innerHTML = document.getElementsByClassName("gender").value;
    program.innerHTML = document.getElementsByClassName("program").value;
    session.innerHTML = document.getElementsByClassName("session").value;
    about.innerHTML = document.getElementsByClassName("about").value;
    rollnum.innerHTML = document.getElementsByClassName("rollnum").value;

    
    return false;
}




