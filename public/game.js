//compress Class & ID

function C(c) {
  return document.getElementsByClassName(c);
};
function I(i) {
  return document.getElementById(i);
};


//initialisation

I("vaisseau").style.marginLeft = "500px";
var shield = 100;
var score = 0;


//FRAME event

var vitesse = 10;
var vitvaisseau = 0;
var ralentir = 0;
var backdep = 0;
var direction = 0;
var explosion = 10;

function deplace(v) {
  //deplacement mineraux
  posactu = [];
  for (w = 0; w<C("mineraux").length; w++) {
    posactu.push(C("mineraux")[w].style.marginTop);
  };
  for (x = 0; x<C("mineraux").length; x++) {
    var novpose = parseInt(posactu[x])+vitesse;
    C("mineraux")[x].style.marginTop = novpose+""+"px";
  };
  //deplacement regenerator
  posactur = [];
  for (a = 0; a<C("regenerator").length; a++) {
    posactur.push(C("regenerator")[a].style.marginTop);
  };
  for (b = 0; b<C("regenerator").length; b++) {
    var novposer = parseInt(posactur[b])+vitesse;
    C("regenerator")[b].style.marginTop = novposer+""+"px";
  };
  //deplacement vaisseau
  if (vitvaisseau >= 20) {
    vitvaisseau = 20;
  };
  if (vitvaisseau <= -20) {
    vitvaisseau = -20;
  };
  var posact = parseInt(I("vaisseau").style.marginLeft);
  var newpose = posact+vitvaisseau;
  I("vaisseau").style.marginLeft = newpose+""+"px";
  //apparence vaisseau
  if (vitvaisseau == 0) {
    I("vaisseau").style.backgroundPosition = "center";
  } else if (vitvaisseau == 5) {
    I("vaisseau").style.backgroundPosition = "600px";
  } else if (vitvaisseau == 10) {
    I("vaisseau").style.backgroundPosition = "450px";
  } else if (vitvaisseau == 15) {
    I("vaisseau").style.backgroundPosition = "300px";
  } else if (vitvaisseau == 20) {
    I("vaisseau").style.backgroundPosition = "150px";
  } else if (vitvaisseau == -5) {
    I("vaisseau").style.backgroundPosition = "900px";
  } else if (vitvaisseau == -10) {
    I("vaisseau").style.backgroundPosition = "1050px";
  } else if (vitvaisseau == -15) {
    I("vaisseau").style.backgroundPosition = "1200px";
  }else if (vitvaisseau == -20) {
    I("vaisseau").style.backgroundPosition = "0px";
  }
  //collision mineraux
  colpos = [];
  for (o = 0; o<C("mineraux").length; o++) {
    colpos.push(C("mineraux")[o].style.marginLeft);
  };
  for(t = 0; t<C("mineraux").length; t++) {
    posactuv = I("vaisseau").style.marginLeft;
    if (parseInt(posactu[t])>1000 && parseInt(posactu[t])<1100 && parseInt(colpos[t])-parseInt(posactuv)<100 && parseInt(colpos[t])-parseInt(posactuv)>-75) {
      shield -= 15;
      I("shield").value = shield+"";
      C("mineraux")[t].style.marginTop = "5000px";
      I("explosion").innerHTML = "<div class='explose' style='margin-left:"+colpos[t]+";margin-top:"+posactu[t]+";background-position=0px'></div>";
      explosion +=12;
      if (I("meteor").ended == true || I("meteor").currentTime == 0) {
          I("meteor").pause();
          I("meteor").currentTime = 0;
          I("meteor").play();
      }; 
    };
  };
  //gestion de l'apparence explosion
  if (explosion>0){
    I("vaisseau").innerHTML = "<div id='shieldhit'></div>";
    explosion--;
    for (i=0;i<C("explose").length;i++) {
      if (C("explose")[i].style.backgroundPosition == "") {
        C("explose")[i].style.backgroundPosition ="0px";
      } else if (C("explose")[i].style.backgroundPosition == "0px center") {
        C("explose")[i].style.backgroundPosition ="-200px";
      } else if (C("explose")[i].style.backgroundPosition == "-200px center") {
        C("explose")[i].style.backgroundPosition ="-400px";
      } else if (C("explose")[i].style.backgroundPosition == "-400px center") {
        C("explose")[i].style.backgroundPosition ="-600px";
      } else if (C("explose")[i].style.backgroundPosition == "-600px center") {
        C("explose")[i].style.backgroundPosition ="-800px";
      } else if (C("explose")[i].style.backgroundPosition == "-800px center") {
        C("explose")[i].style.backgroundPosition ="-1000px";
      } else if (C("explose")[i].style.backgroundPosition == "-1000px center") {
        C("explose")[i].style.backgroundPosition ="-1200px";
      } else if (C("explose")[i].style.backgroundPosition == "-1200px center") {
        C("explose")[i].style.backgroundPosition ="-1400px";
      } else if (C("explose")[i].style.backgroundPosition == "-1400px center") {
        C("explose")[i].style.backgroundPosition ="-1600px";
      } else if (C("explose")[i].style.backgroundPosition == "-1600px center") {
        C("explose")[i].style.backgroundPosition ="-1800px";
      } else if (C("explose")[i].style.backgroundPosition == "-1800px center") {
        C("explose")[i].style.backgroundPosition ="-2200px";
      } else if (C("explose")[i].style.backgroundPosition == "-2200px center") {
        C("explose")[i].style.backgroundPosition ="-2400px";
      } else if (C("explose")[i].style.backgroundPosition == "-2400px center") {
        C("explose")[i].style.backgroundPosition ="-2600px";
      };
    };
  };
  if(explosion==0){
    I("vaisseau").innerHTML = "";
    I("explosion").innerHTML = "";
  };
  //recuperation regenerator
  recuppos = [];
  for (c = 0; c<C("regenerator").length; c++) {
    recuppos.push(C("regenerator")[c].style.marginLeft);
  };
  for(d = 0; d<C("regenerator").length; d++) {
    posactuv = I("vaisseau").style.marginLeft;
    if (parseInt(posactur[d])>1000 && parseInt(posactur[d])<1100 && parseInt(recuppos[d])-parseInt(posactuv)<100 && parseInt(recuppos[d])-parseInt(posactuv)>-75) {
      shield += 15;
      I("shield").value = shield+"";
      C("regenerator")[d].style.marginTop = "5000px";
      I("shieldg").pause();
      I("shieldg").currentTime = 0;
      I("shieldg").play();
    };
  };
  //boucle vaisseau
  if (posact < -100) {
    I("vaisseau").style.marginLeft = "1100px";
  };
  if (posact > 1100) {
      I("vaisseau").style.marginLeft = "-100px";
  };
  //GAME OVER?
  if (shield < 60) {
    I("shield").style.color = "yellow";
    I("vaisseau").innerHTML = ""
    I("shieldlvl").style.backgroundImage = "url('media/shieldlvl.gif')"
  };
  if (shield < 30) {
    I("shield").style.color = "red";
    I("shieldlvl").style.backgroundImage = "url('media/shieldlow.gif')"
    I("vaisseau").innerHTML = "<div id='low'></div>"
    I("energy").play();
  };
  if (shield < 0) {
    I("death").pause();
    I("death").currentTime = 0;
    I("death").play();
    clearInterval(frame);
    I("vaisseau").innerHTML = ""
    I("vaisseau").style.backgroundImage = "url('media/explose.gif')"
    I("vaisseau").style.backgroundSize = "100% 100%";
    I("vaisseau").style.backgroundPosition = "center";
    I("gameover").style.display = "";
    I("scorefinal").value = I("score").value;
  };
  //augmentation score
  score += 1;
  I("score").value = score+"";
  //Arrière plan
  backdep += 1;
  document.body.style.backgroundPosition = "0px "+backdep+"px";
  I("planete").style.marginTop = backdep*2+""+"px";
};

var frame = setInterval(function(){deplace(vitesse);},40);


//création des mineraux

var niveau = 0;
var nombre = 1;
var generateur = 1;
function genere(n) {
  ncont = "";
  if (niveau%20 == 0) {
    position = Math.round(Math.random()*1000);
    ncont = "<div class='regenerator' style='margin-left:"+position.toString()+"px;margin-top:0px;'></div>";
  };
  for (y = 0; y<n; y++) {
    position = Math.round(Math.random()*1000);
    decalage = Math.round(Math.random()*400);
    tasteroid = parseInt(Math.random()*3);
    ncont += "<div id='m"+y.toString()+"'class='mineraux asteroid"+tasteroid.toString()+"' style='margin-left:"+position.toString()+"px;margin-top:"+decalage.toString()+"px'></div>";
  };
    I("generateur"+generateur+"").innerHTML = ncont;
    generateur++
    if (generateur == 7) {generateur=1;};
};
var generation = setInterval(function(){
  genere(nombre);
  niveau++;
  if (niveau==150) {
    vitesse+=2;
    if (nombre < 6){
    nombre++;
  };
    niveau=0;
  };
},1000);


//contrôle clavier changement vitesse

addEventListener("keypress", function keyBoard(e){
  if (e.key == "z") {
    ralentir = 0;
    vitvaisseau = vitvaisseau+5;
  };
  if (e.key == "a") {
    ralentir = 0;
    vitvaisseau = vitvaisseau-5;
  };
});
