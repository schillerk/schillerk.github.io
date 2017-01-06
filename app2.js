document.addEventListener("DOMContentLoaded", function(){
  var el = document.getElementById('nav-icon2')
  el.onclick = function(){
    el.classList.toggle('open');
  };

  document.querySelector('.js-btn1').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade2'));
    fadeOut(document.querySelector('.js-fade3'));
    fadeIn(document.querySelector('.js-fade1'));
    document.querySelector('.js-btn1').classList.add('is-focused');
    document.querySelector('.js-btn2').classList.remove('is-focused');
    document.querySelector('.js-btn3').classList.remove('is-focused');
  });

  document.querySelector('.js-btn2').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade1'));
    fadeOut(document.querySelector('.js-fade3'));
    fadeIn(document.querySelector('.js-fade2'));
    document.querySelector('.js-btn2').classList.add('is-focused');
    document.querySelector('.js-btn1').classList.remove('is-focused');
    document.querySelector('.js-btn3').classList.remove('is-focused');
  });

  document.querySelector('.js-btn3').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade1'));
    fadeOut(document.querySelector('.js-fade2'));
    fadeIn(document.querySelector('.js-fade3'));
    document.querySelector('.js-btn3').classList.add('is-focused');
    document.querySelector('.js-btn1').classList.remove('is-focused');
    document.querySelector('.js-btn2').classList.remove('is-focused');

  });

  document.querySelector('.js-btn4').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade5'));
    fadeOut(document.querySelector('.js-fade6'));
    fadeIn(document.querySelector('.js-fade4'));
    document.querySelector('.js-btn4').classList.add('is-focused');
    document.querySelector('.js-btn5').classList.remove('is-focused');
    document.querySelector('.js-btn6').classList.remove('is-focused');
  });

  document.querySelector('.js-btn5').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade4'));
    fadeOut(document.querySelector('.js-fade6'));
    fadeIn(document.querySelector('.js-fade5'));
    document.querySelector('.js-btn5').classList.add('is-focused');
    document.querySelector('.js-btn4').classList.remove('is-focused');
    document.querySelector('.js-btn6').classList.remove('is-focused');
  });


  document.querySelector('.js-btn6').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade4'));
    fadeOut(document.querySelector('.js-fade5'));
    fadeIn(document.querySelector('.js-fade6'));
    document.querySelector('.js-btn6').classList.add('is-focused');
    document.querySelector('.js-btn4').classList.remove('is-focused');
    document.querySelector('.js-btn5').classList.remove('is-focused');

  });

    document.querySelector('.js-btn7').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade8'));
    fadeOut(document.querySelector('.js-fade9'));
    fadeIn(document.querySelector('.js-fade7'));
    document.querySelector('.js-btn7').classList.add('is-focused');
    document.querySelector('.js-btn8').classList.remove('is-focused');
    document.querySelector('.js-btn9').classList.remove('is-focused');
  });

  document.querySelector('.js-btn8').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade7'));
    fadeOut(document.querySelector('.js-fade9'));
    fadeIn(document.querySelector('.js-fade8'));
    document.querySelector('.js-btn8').classList.add('is-focused');
    document.querySelector('.js-btn7').classList.remove('is-focused');
    document.querySelector('.js-btn9').classList.remove('is-focused');
  });


  document.querySelector('.js-btn9').addEventListener('click', function(e){
    fadeOut(document.querySelector('.js-fade7'));
    fadeOut(document.querySelector('.js-fade8'));
    fadeIn(document.querySelector('.js-fade9'));
    document.querySelector('.js-btn9').classList.add('is-focused');
    document.querySelector('.js-btn7').classList.remove('is-focused');
    document.querySelector('.js-btn8').classList.remove('is-focused');

  });


});

// http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
// fade out
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    // console.log(el.style);
    // console.log(el.style.left.slice(0,-2));
    // console.log(el.style.opacity);
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  if (el.classList.contains('is-hidden')){
    el.classList.remove('is-hidden');
  }
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    // if ((el.style.opacity += .04) > 1 || (el.style.left = parseInt(el.style.left.slice(0,-2)) - 4 + 'px') > 0) {
    if (!((val += .02) > 1) || (el.style.left = parseInt(el.style.left.slice(0,-2)) + 4 + 'px') > 0) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
