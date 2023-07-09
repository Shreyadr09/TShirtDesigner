// console.log(document.cookie.split(';'));
		  
// let emailid = '';
// let authorization = ''
// const cookies = document.cookie.split(';');

// for (let i = 0; i < cookies.length; i++) {
//   const cookie = cookies[i].trim();
//   console.log("Dhawan is : ",cookie)
//   // Check if the cookie starts with "Email="
//   // if (cookie.startsWith('Email=')) {
//   //   // Extract the email value
//   //   emailid = cookie.substring(6);
//   //   break;
//   // }
//    if (cookie.startsWith('Authorization=')) {
//     // Extract the email value
//      let authorizationid = cookie.substring(14);
//     if (authorizationid) {
//       console.log("Authorization is Successfull")
//     } else {
//       console.log("No authorization")
//     }
//   }
// }


// // if (emailid) {
// // 	 // Decode and store the email from the received cookies
// //    emailid = decodeURIComponent(emailid);
// //   console.log('Decoded email:', emailid);
// //   console.log('Email:', emailid);
// // } else {
// //   console.log('Email not found in cookies');
// // }


// const cookieValue = Cookies.get('Email');
// console.log("Cookie value is : ",cookieValue)
// document.body.innerHTML = `Received Cookie: ${cookieValue}`;

function checkCookies() {
  var cookieValue = Cookies.get('Authorization');
  var emailid = Cookies.get('Email');
  if (cookieValue) {
    console.log("Cookie value: " + cookieValue);
    console.log("Email: " + emailid);
    document.getElementById('userIcon').style.display = 'none';
    document.getElementById('emailText').innerText = emailid.charAt(0).toUpperCase();
    document.getElementById('emailBox').innerText = emailid;
    document.getElementById('emailText').style.display = 'block';
    document.getElementById('emailText').style.fontSize = '28px';
    document.getElementById('emailText').style.color = '#FE4536';
    document.getElementById('emailText').style.fontFamily = 'Lobster';
    document.getElementById('emailText').style.fontWeight = 'bold';
    document.getElementById('emailText').style.marginRight = '14px';
    document.getElementById('ellipse-div').style.backgroundColor = '#FFF1F0';
  } else {
    console.log("Cookie not found");
  }
}

// Call the function on page load
window.onload = function() {
  checkCookies();
};
