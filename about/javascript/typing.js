var i = [0,0];
var txt = 'This is a testing paragraph. You should make this look like typing and shit. The ultimate part is to make it look like a terminal.';
var txt2 = 'I want to eat some soft food for my stomach.';
var speed = 10;

function typing(isLast=false){
  var p = document.getElementById("p1");
  p.style.animationPlayState = 'running'
  if(i[0] < txt.length){
      p.innerHTML += txt.charAt(i[0]);
      i[0]++;
      var s = Math.random()*90;
      setTimeout(typing, speed+s);
  }
  else{
    p.style.animationPlayState = 'paused'
    if(isLast) p.style.borderRight = 'none';
  }
}

function typing2(isLast=true){
    var p = document.getElementById("p2");
    p.style.animationPlayState = 'running'
    if(i[1] < txt2.length){
        p.innerHTML += txt2.charAt(i[1]);
        i[1]++;
        var s = Math.random()*90;
        setTimeout(typing2, speed+s);
    }
    else{
      p.style.animationPlayState = 'paused'
      if(isLast) p.style.borderRight = 'none';
    }
  }