
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
 

  // contact form

function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();

}

// circle progrees bar
// $(document).ready(function () {
  
//   var progress_circle = $(".my-progress-bar").gmpc({
    
//     line_width: 12,
//     color:"#00f",
//     starting_position:50,
//     percent:0,
//     percenttage: true,
  
//   }).gmpc('animate', 90, 3000);


    //  loading screen
$(window).on('load',function() 
{
    $('body').css('overflow','auto');
    $('.swapping-squares-spinner .square').fadeOut(1000,
        function()
        {
        $(this).parent().fadeOut(1000,
            function()
            {
                $(this).remove();
            });
        });
})
// $(function () { 
//   $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
// });  

// // $( window ).scroll(function() {   
//  // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
//   $(".progress-bar").each(function(){
//     each_bar_width = $(this).attr('aria-valuenow');
//     $(this).width(each_bar_width + '%');
//   });
       
//  //  }  
// // });

$(document).ready(function () {

  $('.prog').one('mouseenter',function () {

    $('.animated-progress span').each(function () {

        $(this).animate({

            width: $(this).attr('date-progress') 

        }, 2000);

    });
      
    // circle progress bar
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    
    var bar = new ProgressBar.Circle(container, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 5,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 95);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText('95%');
          }
      
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      
      bar.animate(1.0);  // Number from 0.0 to 1.0
    // circle progress bar
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    
    var bar = new ProgressBar.Circle(container2, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 5,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText('82%');
          }
      
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      
      bar.animate(1.0);  // Number from 0.0 to 1.0
  })

    
});