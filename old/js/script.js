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





// opening the size chart
$(document).ready(function() {
    $(".size-icon").click(function() {
        $(".sizeadd").toggle();
    });
});


