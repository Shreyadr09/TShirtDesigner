// // Get all the quantity input elements and increment/decrement buttons
// const quantityInputs = document.querySelectorAll('.quantity');
// const incrementButtons = document.querySelectorAll('.increment');
// const decrementButtons = document.querySelectorAll('.decrement');

// // Add event listeners to each increment button
// incrementButtons.forEach((button, index) => {
//   button.addEventListener('click', function() {
//     // Increment the quantity value of the corresponding input
//     quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
//   });
// });

// // Add event listeners to each decrement button
// decrementButtons.forEach((button, index) => {
//   button.addEventListener('click', function() {
//     // Decrement the quantity value of the corresponding input, but ensure it doesn't go below the minimum value
//     const currentValue = parseInt(quantityInputs[index].value);
//     if (currentValue > parseInt(quantityInputs[index].min)) {
//       quantityInputs[index].value = currentValue - 1;
//     }
//   });
// });

// // Get the "Confirm Order" button element
// const orderConfirmationButton = document.getElementById("addToTheBag");

// // Add an event listener to the button
// orderConfirmationButton.addEventListener("click", async () => {

// const xsQuantity = parseInt(document.querySelector(".xs-input").value);
// const sQuantity = parseInt(document.querySelector(".s-input").value);
// const mQuantity = parseInt(document.querySelector(".m-input").value);
// const lQuantity = parseInt(document.querySelector(".l-input").value);
// const xlQuantity = parseInt(document.querySelector(".xl-input").value);
// const xxlQuantity = parseInt(document.querySelector(".xxl-input").value);
  
//   // Prepare the request payload
//   const payload = {
//     email: "dhawan@gmail.com",
//     xs: xsQuantity,
//     s: sQuantity,
//     m: mQuantity,
//     l: lQuantity,
//     xl: xlQuantity,
//     xxl: xxlQuantity,
//   };

//   try {
//     // Send the POST request to the server
//     const response = await fetch("http://localhost:4000/customization/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     // Check the response status
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // Handle the successful response data


//     } else {
//       console.log("Request failed with status:", response.status);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });
