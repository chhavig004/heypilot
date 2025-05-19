

const nodemailer = require("nodemailer");

exports.sendOtpMail = async (email, otp) => {
  console.log("sendOtpMail called");
  console.log(process.env.USER1, process.env.PASS1);
  console.log("email is", email);
  console.log("otp is", otp);

  try {
    const mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER1,
        pass: process.env.PASS1,
      },
    });

    await mail.sendMail({
      from: process.env.USER1,
      to: email,
      subject: "OTP for Login",
      html: `<p>Your OTP for login is: <strong>${otp}</strong></p>`,
    });

    console.log(`Mail sent to ${email}`);
    return true;
  } catch (err) {
    console.error("Error sending email:", err.message);
    //throw err;
  }
};