console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content')
var toolText = document.getElementById('more-info');
var toolTip = document.getElementById('tooltip');

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '0.1';
});

closeBtn.addEventListener('click', function(){
  console.log('close clicked');
  mobileNav.style.width = '0%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
});

toolText.addEventListener('mouseenter', function(){
  toolTip.style.opacity = '1';
  var x = event.pageX;     // Get the horizontal coordinate
  var y = event.pageY;     // Get the vertical coordinate
  console.log(x)
  toolTip.style.top = y + 'px';
  toolTip.style.left = x + 'px';
  });

toolText.addEventListener('mouseout', function(){
  toolTip.style.opacity = '1';
  });
