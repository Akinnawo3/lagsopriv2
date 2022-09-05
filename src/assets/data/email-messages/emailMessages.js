export default {
  acceptMsg:
    "We are pleased to inform you that your application has been accepted on LagosRide, You will be required to undergo a LagosRide Driver professional training. A date for your training will be communicated with you shortly.",
  verifiedMessage: "Congratulations, your details have been verified. Please go to the app to proceed and continue your onboarding process.",
  approveMsg: ({firstName, vehicleDetails}) => {
    return `Dear ${firstName}, Your payment has been acknowledged, and a vehicle ( ${vehicleDetails.car_number_plate}, ${vehicleDetails.car_color} ${vehicleDetails.car_make}, ${vehicleDetails.car_model} ) has been assigned to you. Kindly log into the app to start earning. Thank you for partnering with us.`;
  },
  trainedMessage: "Congratulations, your training on LagosRide has been confirmed.",
  reactivateMsg:
    "Congratulations, your account has been reactivated as a driver on LagosRide. A vehicle will be reassigned to you as soon as possible. \n" + "\n" + "Sincerely,\n" + "\n" + "LagosRide.",
  // suspendMsg: (reasons) => {
  //   return `You have been suspended from LagosRide for the following reasons;${reasons.map((item, index) => {
  //     return `\n${index + 1}. ${item}`;
  //   })} \nYou will be required to report to the office for further actions, a date will be communicated with you shortly. \n Sincerely, \n \n LagosRide .`;
  // },
  suspendMsg: (reasons) => {
    return `You have been suspended from LagosRide for the following reasons; ${reasons} \nYou will be required to report to the office for further actions, a date will be communicated with you shortly. \n Sincerely, \n \n LagosRide .`;
  },
  newAdminMsg: (name, phoneNumber, Password) => {
    // ${role}
    return `Dear ${name}, you have been successfully set up as an admin on LagosRide with telephone number : ${phoneNumber}, here is your password -${Password}. Click on the link below to sign in. <a href="https://lrdash.lagosride.com/">lrdash.lagosride.com</a>`;
  },
  newOemMsg: (name, phoneNumber, Password) => {
    // ${role}
    return `Dear ${name}, you have been successfully set up as an OEM on LagosRide with telephone number : ${phoneNumber}, here is your password -${Password}. Click on the link below to sign in.`;
  },
  updateOemMsg: (name, phoneNumber, Password) => {
    // ${role}
    return `Dear ${name}, your details have successfully updated on LagosRide. Your telephone number : ${phoneNumber} ,  password -${Password}. Click on the link below to sign in.`;
  },

  userDetailResetMsg: (name, detailType, update) => {
    return `Dear ${name}, your ${detailType} has been changed to ${update}`;
  },
  verifiedPartnerMsg: (data) => {
    return `You have been verified and now eligible to become a LagosRide partner, Your partnership allows you earn 20% of the net earnings on trips made with the vehicle(s) daily. Kindly make payment of the sum of ${data?.amount} for the investment on ${data?.vehicles}vehicles to the account details below;\nAccount name: ${data?.accountName},\nAccount number: ${data?.accountNumber},\nBank name: ${data?.bankName}.\nAfter payment, the vehicle(s) will be assigned to driver(s) and you can start earning.`;
  },
  approvedPartnerMessage: `Congratulations you have paid 20% of the equity contribution for the vehicles, and you are now approved as a partner on LagosRide.`,

  // "You have been suspended from LagosRide for the following reasons;\n" +
  // "\n" +
  // "\n" +
  // "You will be required to report to the office for further actions, a date will be communicated with you shortly. \n" +
  // "\n" +
  // "Sincerely, \n" +
  // "\n" +
  // "LagosRide .",
};
