function navigacija() {
    var x = document.getElementById("navigacija");
    if (x.className == "nav") {
      x.className += " responsive";
    }
    else {
      x.className = "nav";
    }
}
  window.onscroll = function() {funkcijaSkrol()};
  function funkcijaSkrol() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("strelica").style.display = "block";
    } 
    else {
      document.getElementById("strelica").style.display = "none";
    }
  }
  function povratakNaVrh() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  var ime = "Milovan Srejić";
  var i=0;
  function ispisImena() {
    if(i<ime.length){
      document.getElementById("ime").innerHTML += ime.charAt(i);
      i++;
      setTimeout(ispisImena,300);
    }
  }
function povecajSlajd(n) {
  prikazSlika(brojSlajda += n);
}
function promeniSliku(n) {
  prikazSlika(brojSlajda = n);
}
  function prikazSlika(n) {
    var slajd = document.getElementsByClassName("slajder");
    if (n > slajd.length) {brojSlajda = 1}
    if (n < 1) {brojSlajda = slajd.length}
    for (var i = 0; i < slajd.length; i++) {
        slajd[i].style.display = "none";
    }
    slajd[brojSlajda-1].style.display = "block";
  }
  var p1,p2,p3,p4,p5;
  function validacijaImena() {
    var ime = document.getElementById("ime").value;
    var valime = document.getElementById("valime");
    var provera=/^[A-Z]{1}[a-z]{1,12}$/;
    if(ime.match(provera)==null){
      valime.className="fas fa-times";
      valime.style.color = "#ff1a1a";
      p1=0;
    }
    else{
      valime.className="fas fa-check";
      valime.style.color = "#00b33c";
      p1=1;
    }
  }
  function validacijaPrezimena() {
    var prezime = document.getElementById("prezime").value;
    var valprez = document.getElementById("valprez");
    var provera=/^[A-Z]{1}[a-z]{1,15}$/g;
    if(prezime.match(provera)==null){
      valprez.className="fas fa-times";
      valprez.style.color = "#ff1a1a";
      p2=0;
    }
    else{
      valprez.className="fas fa-check";
      valprez.style.color = "#00b33c";
      p2=1;
    }
  }
  function validacijaEmaila() {
    var email = document.getElementById("email").value;
    var valemail = document.getElementById("valemail");
    var provera=/^[(a-z)|(0-9)]{1,20}@(gmail|hotmail|yahoo|live).(rs|com|edu)$/m;
    if(email.match(provera)==null){
      valemail.className="fas fa-times";
      valemail.style.color = "#ff1a1a";
      p3=0;
    }
    else{
      valemail.className="fas fa-check";
      valemail.style.color = "#00b33c";
      p3=1;
    }
  }
  function validacijaTelefona() {
    var tel = document.getElementById("telefon").value;
    var valtel = document.getElementById("valtel");
    var provera=/^[0-9]{3}-[0-9]{6,7}$/;
    if(tel.match(provera)==null){
      valtel.className="fas fa-times";
      valtel.style.color = "#ff1a1a";
      p4=0;
    }
    else{
      valtel.className="fas fa-check";
      valtel.style.color = "#00b33c";
      p4=1;
    }
  }
  function validacijaPoruke() {
    var poruka = document.getElementById("poruka").value;
    var valpor = document.getElementById("valpor");
    var provera=/[a-zA-Z0-9!?._*-+.,:;]{1,200}/m;
    if(poruka.match(provera)==null){
      valpor.className="fas fa-times";
      valpor.style.color = "#ff1a1a";
      p5=0;
    }
    else{
      valpor.className="fas fa-check";
      valpor.style.color = "#00b33c";
      p5=1;
    }
  }
  function validacijaForme() {
    if(p1==1 && p2==1 && p3==1 && p4==1 && p5==1){
      alert("PORUKA JE POSLATA!");
      return true;
    }
    else {
      alert("PODACI NISU VALIDNI!");
      return false;
    } 
  }