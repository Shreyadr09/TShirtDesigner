const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teamhattyhood@gmail.com',
    pass: 'hattyhood@2022'
  }
});

// Define the email template options using Handlebars
const handlebarsOptions = {
  viewEngine: {
    partialsDir: path.resolve('./views/'),
    defaultLayout: false
  },
  viewPath: path.resolve('./views/')
};

// Set the transporter to use Handlebars for email template
transporter.use('compile', hbs(handlebarsOptions));

orderConfirmationButton.addEventListener("click", async () => {
  // Your existing code
  
  try {
    // Send email with order details and PDF attachment
    const info = await transporter.sendMail({
      from: 'teamhattyhood@gmail.com',
      to: 'shreyadr09@gmail.com', // Replace with the user's email address
      subject: 'Order Confirmation',
      template: 'customization',
      context: {
        xsQuantity,
        sQuantity,
        mQuantity,
        lQuantity,
        xlQuantity,
        xxlQuantity
      },
      attachments: [
        {
          filename: 'design.pdf',
          content: pdfBlob
        }
      ]
    });

    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
});
