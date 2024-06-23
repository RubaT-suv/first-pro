document.addEventListener("DOMContentLoaded", function () {
  generateCaptcha() ;
 
  document.querySelectorAll('input[type="radio"][name="radio-group"]').forEach(radio => {
    radio.addEventListener('click', function () {
      showDataInMessage(this);
    });
  });
  function enableButton() {
    document.getElementById("showForm").disabled = false;
  }

 
  document.querySelectorAll('input[type="radio"][name="radio-group"]').forEach(radio => {
    radio.addEventListener('change', enableButton);
  });
  const checkboxes = document.getElementsByName('showd');

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', (event) => {
      const checkbox = event.target;
      const nextRow = checkbox.parentElement.parentElement.nextElementSibling;

      if (checkbox.checked) {
        nextRow.style.display = 'table-row';
      } else {
        nextRow.style.display = 'none';
      }
    });
  }

});

function generateCaptcha() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const captchaCode = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  const txtCaptchaEl = document.getElementById('txtCaptcha');
  if (txtCaptchaEl) {
    txtCaptchaEl.value = captchaCode;
  }
}
const goBack = () => {
  window.history.back();
}
function toggleForm() {
  var form = document.getElementById("myForm");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}


function validateForm() {
  var email = document.getElementById("email").value;
  var number_s = document.getElementById("number_s").value;
  var date1 = document.getElementById("date1").value;
  var phone = document.getElementById("phonenumber").value;
  var txtCompare = document.getElementById("txtCompare").value;
  var username = document.getElementById("myUsername").value;


  if (number_s == "") {
    alert("يرجى ملء جميع الحقول الإلزامية");
    return false;
  }
  var usernamePattern = /^[\u0600-\u06FF\s]*$/;
  if (!usernamePattern.test(username)) {
    alert("الرجاء إدخال الاسم باللغة العربية بدون أرقام أو رموز");

    return false;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^$/;
  if (!emailPattern.test(email)) {
    alert("يرجى إدخال عنوان بريد إلكتروني صالح");
    return false;
  }

  var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
  if (!numberPattern.test(number_s)) {
    alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
    return false;
  }

  var datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$|^$/;
  if (!datePattern.test(date1)) {
    alert("يرجى إدخال تاريخ ميلاد صالح بتنسيق MM/DD/YYYY");
    return false;
  }
  
  var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))|^$/;
  if (!phonePattern.test(phone)) {
    alert("يرجى إدخال رقم هاتف صالح مع رمز البلد (مثال: 0931234567)");
    return false;
  }
  

  var captcha = document.getElementById("txtCaptcha").value;
  if (captcha == "") {
    alert("يرجى إدخال رمز التحقق من الكابتشا");
    return false;
  }

  if (captcha != txtCompare) {
    alert("رمز التحقق من الكابتشا غير صحيح");
    return false;
  }

  alert(message);
  return true;
}
var message = "";
function showDataInMessage(radioElement) {
  var row = radioElement.closest('tr');
  message = 'المدينة: ' + row.cells[0].textContent + ', ' +
    'تفاصيل: ' + row.cells[1].textContent + ', ' +
    'الإيجار الشهري: ' + row.cells[2].textContent;

}
