var link = document.querySelector(".singup");
var popup = document.querySelector(".pop-up-window");
var wrapper = document.querySelector(".wrapper-window");
var close = popup.querySelector(".close");
var namelogin = popup.querySelector("[name=NameLogin]");
var form = popup.querySelector(".form-popup");
var password = popup.querySelector("[name=Password]");

link.addEventListener("click", function (evt) { 
    evt.preventDefault(); 
    popup.classList.add("pop-up"); 
    password.focus();
  }); 
link.addEventListener("click", function () { 
    wrapper.classList.add("wrapper-window-bg"); 
  }); 
close.addEventListener("click", function(evt){
	evt.preventDefault(); 
	popup.classList.remove("pop-up");
});
close.addEventListener("click", function(){
	wrapper.classList.remove("wrapper-window-bg");
});
	form.addEventListener("submit", function  (evt) { 
    if (!namelogin.value || !password.value) { 
      evt.preventDefault(); 
      console.log("Нужно ввести логин и пароль"); 

    }

  });

  window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){
      evt.preventDefault();

      if (popup.classList.contains("pop-up")){
        popup.classList.remove("pop-up");
      }
    }
  });