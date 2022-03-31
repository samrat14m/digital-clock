// updating the clock
function updateTime(){ 
 const serverTime = new Date();

// storing data from the Date Obj
  var hr = serverTime.getHours();
  var minutes = serverTime.getMinutes();
  var seconds = serverTime.getSeconds();
var hour = 0;
  if(hr>12) hour= hr -12;else{hour = hr;}

  //
  document.getElementById('hr').innerText = hour>9 ? hour:'0'+hour;
  document.getElementById('min').innerText = minutes>9 ? minutes:'0'+minutes ;
  document.getElementById('sec').innerText = seconds>9 ? seconds:'0'+seconds ;
  document.getElementById('ampm').innerText = hr>11 ? 'PM' : 'AM';
};

// fetching and updating time for every 1s
  setInterval(updateTime,1000);


// changing the display
function changeButton(){
  document.getElementById('alarm').innerText = 'Party Time';
  var curTime = new Date()
  let time = curTime.getHours()
  const a =document.getElementById('morning').value
  const b =document.getElementById('afternoon').value
  const c =document.getElementById('night').value


// setting images and messages
  if(time == a){
    document.getElementById('img').style.backgroundImage="url(images/lunchpic.png)";
    document.getElementById('msg1').innerText ='GOOD MORNING !! WAKE UP!!';
    document.getElementById('msg2').innerText ='GRAB SOME HEALTHY BREAKFAST!!';


  } 
  if(time ==b){
    document.getElementById('img').style.backgroundImage="url(images/lunchpic.png)";
    document.getElementById('msg1').innerText ='GOOD AFTERNOON !! HAVE SOME SLEEP';
    document.getElementById('msg2').innerText ='LETS HAVE SOME LUNCH!!';


  }
  if(time==c){
    document.getElementById('img').style.backgroundImage="url(images/goodnight.png)";
    document.getElementById('msg1').innerText ='GOOD NIGHT!!';
    document.getElementById('msg2').innerText ='CLOSE YOURS EYES & GO TO SLEEP';
  }
}

