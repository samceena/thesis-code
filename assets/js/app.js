document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("open").onclick = function(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "block";
    this.style.display = "none";
  }
  document.getElementById("close").onclick = function(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("open").style.display = "block";
    this.style.display = "none";
  }

  document.getElementById("show-password").onclick = function(){ 
    if ( document.getElementById("pass-input").type == "password" ){
      document.getElementById("pass-input").type = 'text'  
    } else {
      document.getElementById("pass-input").type = 'password'
    }
  }
});