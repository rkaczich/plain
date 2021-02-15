
function windowTest(){
  console.log(window);

  window.open("index.html",
  "_blank",
  "toolbar=no,menubar=yes,scrollbars=yes,resizable=no,top=0,left=0,width=400,height=400");

  window.addEventListener("deviceorientation", function(event){

    console.log(event);
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;


    console.log("Alpha: " + alpha);
    console.log("Beta: " + beta);
    console.log("Gamma: " + gamma);
  });

  let result = confirm("Bitte bestätigen Sie die Aktion");
  if(result){
    alert("Auf OK gedrückt");
  }
  else{
      alert("Auf ABBRECHEN gedrückt");
  }


}


function createHeaderLine(size, text){
    var headline = document.createElement(size);
    headline.innerHTML = text;
    headline.id = "headline2";

    headline.addEventListener("click", function(){
      alert("Angeklickt " + size);
    });
    headline.addEventListener("mouseover", function(){
      document.getElementsByTagName("h1")[0].style.color ="blue";
    });
    headline.addEventListener("mouseout", function(){
      document.getElementsByTagName("h1")[0].style.color ="red";
    });
    var headLine1 = document.getElementById("headLine1");
    headLine1.appendChild(headline);

    var body = document.getElementsByTagName("body");
    //console.log(body);
    body[0].appendChild(headline);
}

function clickMe(id){
  alert(id);
}

function afterCompletePageLoading(){

windowTest();

  document.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
      event.preventDefault();
      document.getElementById("headline2").click();
    }
    console.log(event);
  });

  createHeaderLine("h1", "Dynamisch generierte Überschrift");
   createHeaderLine("h2", "Dynamisch generierte Überschrift");
   createHeaderLine("h3", "Dynamisch generierte Überschrift");
   createHeaderLine("h4", "Dynamisch generierte Überschrift");
   createHeaderLine("h5", "Dynamisch generierte Überschrift");

   createHeaderLine("button", "Dynamisch generierte Überschrift");

  let result = generateLottoNumbers();

  generateLottoNumbers().forEach((item, i) => {

  });

  var element = document.getElementById("number_one_field").value


  element = document.getElementById("headLine1").innerHTML


  document.getElementById("headLine1").innerHTML = "Dünne Überschrift";

  document.getElementById("number_one_field").value = result[0];

  element = document.getElementsByTagName("h1")[0].style.color ="red";

}

// Zahl zwischen 1 und 49
// 6 Zahlen
// 1 Superzahl zwischen 0 und 9
function generateLottoNumbers(){

  let list = [];
  for (var i = 0; i < 6; i++) {
      let zahl = Math.random()*49;
      zahl = Math.ceil(zahl);
      list.push(zahl);
  }
  return list;
}

function checkNumber(number){

  let result;
  // es ist eine zahl oder es ist keine zahl
  if ( !isNaN(number) ){
        // zahl ist kleiner 100 oder größer 100
        if ( number < 100 ) {
          result = "Die Zahl ist kleiner als 100!";
        }
        else {
          result = "Zahl ist zu groß";
        }
  }
  else{
       result = "Es ist keine Zahl";
  }

  return result;
}
