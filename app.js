const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.containers');
const rectangle = document.querySelector('.rectangle');
const circle = document.querySelector('.top-circle-container');
const contents = document.querySelector('.content');




button = (e) => {
    // container.classList.remove('show-nav');
    // open.style.display = 'initial';
    // close.style.display = "none";
    // container.style.position = "initial";
    // contents.style.opacity = "initial";
    // container.style.borderBottomLeftRadius = "initial";
    window.location.hash = e.getAttribute('name');
    const lists = rectangle.querySelectorAll('nav li a');

lists.forEach(list => {

  list.classList.remove('active');


});

    e.classList.add('active');
}


openBtn = () => {
    document.querySelector('.top').classList.add('show');
    document.querySelector('.rectangle').classList.add('show');
    document.querySelector('.content').style.opacity= '0.2';
    document.querySelector('.containers').style.backgroundColor= 'rgb(13, 20, 44)';
    document.querySelector('.content').style.transition = 'all 1s ease-in';
}
closeBtn = () => {
    document.querySelector('.top').classList.remove('show');
    document.querySelector('.rectangle').classList.remove('show');
    document.querySelector('.top').style.transition = 'all 1s ease-in';
    document.querySelector('.rectangle').style.transition = 'all 1s ease-in';
    document.querySelector('.content').style.opacity= 'initial';
    document.querySelector('.content').style.transition = 'all 1s ease-in';
    document.querySelector('.containers').style.backgroundColor= 'rgb(56, 72, 131)';
    document.querySelector('.containers').style.transition = 'all 1s ease-in';
}




// for fade in

$(document).on("scroll", function() {

    // for fade in
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var skills = $("#skills div");
  
    for (var i = 0; i < skills.length; i++) {
      var skill = skills[i];
      if ($(skill).position().top < pageBottom) {
        $(skill).addClass("fadeIn");
      } else {
        $(skill).removeClass("fadeIn");
      }
    }



      //to change the top heading
    if(pageTop < $('#about').position().top){
        $('.inner').html('Home');
        
    }else if(pageTop < $('#skills').position().top){
        $('.inner').html('About');
    }else if(pageTop < $('#projects').position().top){
        $('.inner').html('Skills');
    }else if(pageTop < $('#education').position().top){
        $('.inner').html('Projects');
    }else if(pageTop < $('#contact').position().top){
        $('.inner').html('Education');
    }else if(pageTop >= $('#contact').position().top){
        $('.inner').html('Contact');
    }else {
        $('.inner').html('Home');
    }
  }
  );

  //for typewriter
  new TypeIt(".textword", {
    strings: "",
    speed: 75,
    loop: false,
  }).go();

  new TypeIt(".aboutMe", {
    strings: "",
    speed: 0.1,
    loop: false,
  }).go();