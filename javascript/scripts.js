var email1 = document.querySelector('#email-1');
var error1 = document.querySelector('.error-mensage-1');
var first_form = document.querySelector('.form-email-1');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


first_form.addEventListener('submit', (e)=> {
  e.preventDefault();
  var email1_value = email1.value;
  if (email1_value.match(pattern)){
    alert('thanks')
  }else{
    error1.classList.toggle('hidden')
    email1.style.border = "1px solid #ed4e4e"
  };

});

email1.addEventListener('click', ()=> {
  error1.classList.add('hidden')
  email1.style.border = "1px solid #070439"
})




var email2 = document.querySelector('#email-2');
var error2 = document.querySelector('.error-mensage-2');
var second_form = document.querySelector('.form-email-2');


second_form.addEventListener('submit', (e)=> {
  e.preventDefault();
  var email2_value = email2.value;
  if (email2_value.match(pattern)){
    alert('thanks')
  }else{
    error2.classList.toggle('hidden')
  };

});

email2.addEventListener('click', ()=> {
  error2.classList.add('hidden')
})

