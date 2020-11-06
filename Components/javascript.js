function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

 function sendWa(){
                var message = document.getElementById("message").value
                location.href = "https://wa.me/6287880334339?text=" + message
            }
function sendmail(){			
window.open('mailto:vince82@gmail.com')
}			