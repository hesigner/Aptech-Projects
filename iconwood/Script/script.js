function topbartoggle(){
   var customer= document.getElementById("Mobile-nav-hidden1");
   var complaints= document.getElementById("Mobile-nav-hidden2");
   var track= document.getElementById("Mobile-nav-hidden3");

   var Currencylanguage= document.getElementById("Mobile-nav-shown1");
   var Login= document.getElementById("Mobile-nav-shown2");
   var register= document.getElementById("Mobile-nav-shown3");

   if( Login.style.display=="none"){

    customer.classList.add("hidden");
    track.classList.add("hidden");

    Login.style.display="";
    register.style.display="";
    Currencylanguage.style.display="";

   }
   else{
    customer.classList.remove("hidden");
    track.classList.remove("hidden");
    
    Login.style.display="none";
    register.style.display="none";
    Currencylanguage.style.display="none";

   }
}