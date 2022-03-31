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
  //
  setInterval(updateTime,1000);



// changing images and messages acc to the clock time
function change(){
  var curTime = new Date()
  let time = curTime.getHours()
  const a =document.getElementById('morning').value
  const b =document.getElementById('afternoon').value
  const c =document.getElementById('evening').value
  const d =document.getElementById('night').value



  // setting images and messages
  if(time>=10  && time<12){
    document.getElementById('img').style.backgroundImage="url(images/lunchpic.png)";
    document.getElementById('msg1').innerText ='GOOD MORNING !! WAKE UP!!';
    document.getElementById('msg2').innerText ='GRAB SOME HEALTHY BREAKFAST!!';


  }else if(time>=12 && time<16){
    document.getElementById('img').style.backgroundImage="url(images/lunchpic.png)";
    document.getElementById('msg1').innerText ='GOOD AFTERNOON !! HAVE SOME SLEEP';
    document.getElementById('msg2').innerText ='LETS HAVE SOME LUNCH!!';


  }else if(time>=16 && time<20){
    document.getElementById('img').style.backgroundImage="url(images/coffee.png)";
    document.getElementById('msg1').innerText ='GOOD EVENING!!';
    document.getElementById('msg2').innerText ='GET SOME TEA!!';


  }else{
    document.getElementById('img').style.backgroundImage="url(images/goodnight.png)";
    document.getElementById('msg1').innerText ='GOOD NIGHT!!';
    document.getElementById('msg2').innerText ='CLOSE YOURS EYES & GO TO SLEEP';
  }
}

 setInterval(change,1000);

function changeButton(){
  console.log(document.getElementById('alarm'));
  document.getElementById('alarm').innerText = 'Party Time';
}




/** 
            <div class="nap_time">
                <img src="./images/nap_time.svg" alt="Nothing" class="nap">
            <div class="set3">Set nap time</div>
            <select name="evening" id="evening">
                <option value="" selected>Select Time</option>
                <option value="0">12AM-1AM</option>
                <option value="1">1AM-2AM</option>
                <option value="2">2AM-3AM</option>
                <option value="3">3AM-4AM</option>
                <option value="4">4AM-5AM</option>
                <option value="5">5AM-6AM</option>
                <option value="6">6AM-7AM</option>
                <option value="7">7AM-8AM</option>
                <option value="8">8AM-9AM</option>
                <option value="9">9AM-10AM</option>
                <option value="10">10AM-11AM</option>
                <option value="11">11AM-12PM</option>
                <option value="12">12PM-1PM</option>
                <option value="13">1PM-2PM</option>
                <option value="14">2PM-3PM</option>
                <option value="15">3PM-4PM</option>
                <option value="16">4PM-5PM</option>
                <option value="17">5PM-6PM</option>
                <option value="18">6PM-7PM</option>
                <option value="19">7PM-8PM</option>
                <option value="20">8PM-9PM</option>
                <option value="21">9PM-10PM</option>
                <option value="22">10PM-11PM</option>
                <option value="23">11PM-12AM</option>
            </select>
            </div>
            <hr class="hr3"></hr>
            <option value="" selected>Select Time</option>

*/            