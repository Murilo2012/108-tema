function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bkaDrKcBl/model.json", modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
 function gotResults(error,results){
  if (error){
    console.error(error)
  }
  else{
    console.log(results)
    r=Math.floor(Math.random()* 255)+1
    g=Math.floor(Math.random()* 255)+1
    b=Math.floor(Math.random()* 255)+1
    document.getElementById("result_label").innerHTML="consigo ouvir:"+ results[0].label
    document.getElementById("result_confidence").innerHTML=" precisao:"+ (results[0].confidence * 100).toFixed(2)+"%"
    document.getElementById("result_label").style.color="rgb("+r +"," +g+","+ b +")"
    document.getElementById("result_confidence").style.color="rgb("+r +"," +g+","+ b +")"

  img = document.getElementById("animal")
  

if ( results[0].label == "Palmas") {
  img.src="th (3).jpg"
  
}
else if ( results[0].label == "Sino") {
  img.src="th (1).jpg"
 
}
else if ( results[0].label == "Estalos") {
  img.src="th (4).jpg"
  
}
else {
  img.src="th.jpg"

}
 }
 }


