export default {
  acceptMsg:
    "We are pleased to inform you that your application has been accepted on LagosRide, You will be required to undergo a LagosRide Driver professional training. A date for your training will be communicated with you shortly.",
  verifiedMessage: "Congratulations, you have been verified.",
  approveMsg: ({firstName, vehicleDetails}) => {
    return `Dear ${firstName}, Your payment has been acknowledged, and a vehicle ( ${vehicleDetails.car_number_plate}, ${vehicleDetails.car_color} ${vehicleDetails.car_make}, ${vehicleDetails.car_model} ) has been assigned to you. Kindly log into the app to start earning. Thank you for partnering with us.`;
  },
  trainedMessage: "Congratulations, your training on LagosRide has been confirmed.",
  reactivateMsg:
    "Congratulations, your account has been reactivated as a driver on LagosRide. A vehicle will be reassigned to you as soon as possible. \n" + "\n" + "Sincerely,\n" + "\n" + "LagosRide.",
  suspendMsg: (reasons) => {
    return `You have been suspended from LagosRide for the following reasons;${reasons.map((item, index) => {
      return `\n${index + 1}. ${item}`;
    })} \nYou will be required to report to the office for further actions, a date will be communicated with you shortly. \n Sincerely, \n \n LagosRide .`;
  },

  newAdminMsg: (name, phoneNumber, Password) => {
    // ${role}
    return `Dear ${name}, you have been successfully set up as an admin on LagosRide with telephone number : ${phoneNumber}, here is your password -${Password}. Click on the link below to sign in. <a href="https://lrdash.lagosride.com/">lrdash.lagosride.com</a>`;
  },

  // "You have been suspended from LagosRide for the following reasons;\n" +
  // "\n" +
  // "\n" +
  // "You will be required to report to the office for further actions, a date will be communicated with you shortly. \n" +
  // "\n" +
  // "Sincerely, \n" +
  // "\n" +
  // "LagosRide .",
};
