/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

const AsyncDrivers = Loadable({
  loader: () => import("Routes/drivers/drivers"),
  loading: () => <RctPageLoader />,
});
const AsyncTripDetails = Loadable({
  loader: () => import("Routes/trips/tripDetails"),
  loading: () => <RctPageLoader />,
});
const AsyncClassTypes = Loadable({
  loader: () => import("Routes/class-types/class-types"),
  loading: () => <RctPageLoader />,
});

const AsyncFeesOld = Loadable({
  loader: () => import("Routes/fees/fees"),
  loading: () => <RctPageLoader />,
});

const AsyncCancellationReasons = Loadable({
  loader: () => import("Routes/cancellationReasons/cancellationReasons"),
  loading: () => <RctPageLoader />,
});

const AsyncDriverRatings = Loadable({
  loader: () => import("Routes/ratings/driver-ratings"),
  loading: () => <RctPageLoader />,
});
const AsyncUserRatings = Loadable({
  loader: () => import("Routes/ratings/user-ratings"),
  loading: () => <RctPageLoader />,
});
const AsyncRatingsDetails = Loadable({
  loader: () => import("Routes/ratings/ratingDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncRevenueSplitOld = Loadable({
  loader: () => import("Routes/revenueSplit/revenueSplit"),
  loading: () => <RctPageLoader />,
});

const AsyncReferral = Loadable({
  loader: () => import("Routes/referral/referral"),
  loading: () => <RctPageLoader />,
});

// const AsyncReferralDetails = Loadable({
// 	loader: () => import("Routes/referral/referralDetails"),
// 	loading: () => <RctPageLoader />,
// });

const AsyncSchedule = Loadable({
  loader: () => import("Routes/schedule/schedule"),
  loading: () => <RctPageLoader />,
});

const AsyncCustomerCare = Loadable({
  loader: () => import("Routes/customerCare/customerCare"),
  loading: () => <RctPageLoader />,
});

const AsyncScheduleDetails = Loadable({
  loader: () => import("Routes/schedule/scheduleDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncFdt = Loadable({
  loader: () => import("Routes/fdt/fdt"),
  loading: () => <RctPageLoader />,
});

const AsyncFdtDetails = Loadable({
  loader: () => import("Routes/fdt/fdtDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncPayments = Loadable({
  loader: () => import("Routes/payments/payments"),
  loading: () => <RctPageLoader />,
});

const AsyncPaymentsSuccessful = Loadable({
  loader: () => import("Routes/payments/successfulPayments"),
  loading: () => <RctPageLoader />,
});
const AsyncPaymentsDetails = Loadable({
  loader: () => import("Routes/payments/paymentDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncPaymentsUnsuccessful = Loadable({
  loader: () => import("Routes/payments/unsuccessfulPayments"),
  loading: () => <RctPageLoader />,
});

const AsyncPaymentsService = Loadable({
  loader: () => import("Routes/payments-service/paymentsService"),
  loading: () => <RctPageLoader />,
});

const AsyncPaymentsServiceSuccessful = Loadable({
  loader: () => import("Routes/payments-service/successfulPaymentsService"),
  loading: () => <RctPageLoader />,
});
const AsyncPaymentsServiceDetails = Loadable({
  loader: () => import("Routes/payments-service/paymentServiceDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncPaymentsServiceUnsuccessful = Loadable({
  loader: () => import("Routes/payments-service/unsuccessfulPaymentsService"),
  loading: () => <RctPageLoader />,
});
const AsyncPaymentsServicePending = Loadable({
  loader: () => import("Routes/payments-service/pendingPaymentService"),
  loading: () => <RctPageLoader />,
});

const AsyncPaymentsServiceRefund = Loadable({
  loader: () => import("Routes/payments-service/refundPaymentsService"),
  loading: () => <RctPageLoader />,
});

const AsyncFinance = Loadable({
  loader: () => import("Routes/reconciliation/finance"),
  loading: () => <RctPageLoader />,
});

const AsyncDisbursement = Loadable({
  loader: () => import("Routes/reconciliation/disbursement"),
  loading: () => <RctPageLoader />,
});

const AsyncDisbursementHolders = Loadable({
  loader: () => import("Routes/reconciliation/disbursementHolder"),
  loading: () => <RctPageLoader />,
});

const AsyncRevenues = Loadable({
  loader: () => import("Routes/revenues/revenues"),
  loading: () => <RctPageLoader />,
});

const AsyncBookingTypes = Loadable({
  loader: () => import("Routes/booking-types/booking-types"),
  loading: () => <RctPageLoader />,
});

const AsyncInactiveDrivers = Loadable({
  loader: () => import("Routes/drivers/inactiveDrivers"),
  loading: () => <RctPageLoader />,
});

const AsyncPendingDrivers = Loadable({
  loader: () => import("Routes/drivers/pendingDrivers"),
  loading: () => <RctPageLoader />,
});

const AsyncAcceptedDrivers = Loadable({
  loader: () => import("Routes/drivers/acceptedDrivers"),
  loading: () => <RctPageLoader />,
});
const AsyncVerifiedDrivers = Loadable({
  loader: () => import("Routes/drivers/verifiedDrivers"),
  loading: () => <RctPageLoader />,
});
const AsyncTrainedDrivers = Loadable({
  loader: () => import("Routes/drivers/trainedDrivers"),
  loading: () => <RctPageLoader />,
});

const AsyncActiveDrivers = Loadable({
  loader: () => import("Routes/drivers/activeDrivers"),
  loading: () => <RctPageLoader />,
});

const AsyncDriver = Loadable({
  loader: () => import("Routes/drivers/driver"),
  loading: () => <RctPageLoader />,
});

const AsyncVehicles = Loadable({
  loader: () => import("Routes/vehicles/vehicles"),
  loading: () => <RctPageLoader />,
});
const AsyncActiveVehicles = Loadable({
  loader: () => import("Routes/vehicles/activeVehicles"),
  loading: () => <RctPageLoader />,
});
const AsyncVehicleDetails = Loadable({
  loader: () => import("Routes/vehicles/vehicleDetails"),
  loading: () => <RctPageLoader />,
});
const AsyncInactiveVehicles = Loadable({
  loader: () => import("Routes/vehicles/inactiveVehicles"),
  loading: () => <RctPageLoader />,
});
const AsyncVehiclesFeedback = Loadable({
  loader: () => import("Routes/vehicles/vehiclesFeedback"),
  loading: () => <RctPageLoader />,
});

const AsyncVehiclesFeedbackDetails = Loadable({
  loader: () => import("Routes/vehicles/vehicleFeedbackDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncAreas = Loadable({
  loader: () => import("Routes/area/areas"),
  loading: () => <RctPageLoader />,
});

const AsyncPassengers = Loadable({
  loader: () => import("Routes/passengers/passengers"),
  loading: () => <RctPageLoader />,
});

const AsyncPassenger = Loadable({
  loader: () => import("Routes/passengers/passenger"),
  loading: () => <RctPageLoader />,
});

const AsyncEmergency = Loadable({
  loader: () => import("Routes/emergency/emergency"),
  loading: () => <RctPageLoader />,
});

const AsyncEmergencyNumber = Loadable({
  loader: () => import("Routes/emergency/emergencyNumber"),
  loading: () => <RctPageLoader />,
});

const AsyncEmergencyEmail = Loadable({
  loader: () => import("Routes/emergency/emmergencyEmail"),
  loading: () => <RctPageLoader />,
});

const AsyncEmergencyDetails = Loadable({
  loader: () => import("Routes/emergency/emergencyDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncMaintenanceLog = Loadable({
  loader: () => import("Routes/maintenance-log/maintenanceLog"),
  loading: () => <RctPageLoader />,
});

const AsyncMaintenanceDetails = Loadable({
  loader: () => import("Routes/maintenance-log/maintenanceDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncSupport = Loadable({
  loader: () => import("Routes/support/support"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportDetails = Loadable({
  loader: () => import("Routes/support/supportDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportSetup = Loadable({
  loader: () => import("Routes/support/supportSetup"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportNew = Loadable({
  loader: () => import("Routes/support/newSupport"),
  loading: () => <RctPageLoader />,
});
const AsyncSupportOpened = Loadable({
  loader: () => import("Routes/support/openedSupport"),
  loading: () => <RctPageLoader />,
});
const AsyncSupportClosed = Loadable({
  loader: () => import("Routes/support/closedSupport"),
  loading: () => <RctPageLoader />,
});
const AsyncSupportUnresolved = Loadable({
  loader: () => import("Routes/support/unresolvedSupport"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportType = Loadable({
  loader: () => import("Routes/support/supportTypes"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportInProgress = Loadable({
  loader: () => import("Routes/support/inProgressSupport"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportContactUs = Loadable({
  loader: () => import("Routes/support/contactUs"),
  loading: () => <RctPageLoader />,
});

const AsyncSupportContactUsDetails = Loadable({
  loader: () => import("Routes/support/contactUsDetails"),
  loading: () => <RctPageLoader />,
});
const AsyncServiceRequests = Loadable({
  loader: () => import("Routes/service-requests/serviceRequests"),
  loading: () => <RctPageLoader />,
});

// home dashboard
const AsyncHomeDashboardComponent = Loadable({
  loader: () => import("Routes/dashboard/home"),
  loading: () => <RctPageLoader />,
});

const AsyncTrips = Loadable({
  loader: () => import("Routes/trips/trips"),
  loading: () => <RctPageLoader />,
});

const AsyncTripsCompleted = Loadable({
  loader: () => import("Routes/trips/tripsCompleted"),
  loading: () => <RctPageLoader />,
});

const AsyncTripsCancelled = Loadable({
  loader: () => import("Routes/trips/tripsCancelled"),
  loading: () => <RctPageLoader />,
});

const AsyncTripsWaiting = Loadable({
  loader: () => import("Routes/trips/tripsWaiting"),
  loading: () => <RctPageLoader />,
});

const AsyncTripsCurrent = Loadable({
  loader: () => import("Routes/trips/tripsCurrent"),
  loading: () => <RctPageLoader />,
});

const AsyncAdmins = Loadable({
  loader: () => import("Routes/admin/admins"),
  loading: () => <RctPageLoader />,
});

const AsyncUsers = Loadable({
  loader: () => import("Routes/users/users"),
  loading: () => <RctPageLoader />,
});

const AsyncWallets = Loadable({
  loader: () => import("Routes/wallets/wallets"),
  loading: () => <RctPageLoader />,
});
const AsyncWalletsPending = Loadable({
  loader: () => import("Routes/wallets/walletsPending"),
  loading: () => <RctPageLoader />,
});
const AsyncWalletsCompleted = Loadable({
  loader: () => import("Routes/wallets/walletsCompleted"),
  loading: () => <RctPageLoader />,
});
const AsyncWalletsRefund = Loadable({
  loader: () => import("Routes/wallets/walletsRefund"),
  loading: () => <RctPageLoader />,
});
const AsyncWalletsCancelled = Loadable({
  loader: () => import("Routes/wallets/walletsCancelled"),
  loading: () => <RctPageLoader />,
});
const AsyncWalletsDebit = Loadable({
  loader: () => import("Routes/wallets/walletsDebit"),
  loading: () => <RctPageLoader />,
});

const AsyncWallet = Loadable({
  loader: () => import("Routes/wallets/walletDetails"),
  loading: () => <RctPageLoader />,
});

const AsyncActivityLog = Loadable({
  loader: () => import("Routes/activity-log/activityLog"),
  loading: () => <RctPageLoader />,
});
const AsyncPromoDiscount = Loadable({
  loader: () => import("Routes/promo-discounts/promoDiscount"),
  loading: () => <RctPageLoader />,
});
const AsyncPromoDiscountDetails = Loadable({
  loader: () => import("Routes/promo-discounts/promoDiscountDetails"),
  loading: () => <RctPageLoader />,
});
const AsyncPromoBeneficiaries = Loadable({
  loader: () => import("Routes/promo-discounts/promoBeneficiaries"),
  loading: () => <RctPageLoader />,
});

// for setup
const AsyncFees = Loadable({
  loader: () => import("Routes/setup/fees"),
  loading: () => <RctPageLoader />,
});
const AsyncOem = Loadable({
  loader: () => import("Routes/setup/oem"),
  loading: () => <RctPageLoader />,
});

const AsyncOthers = Loadable({
  loader: () => import("Routes/setup/others"),
  loading: () => <RctPageLoader />,
});

const AsyncRevenueSplit = Loadable({
  loader: () => import("Routes/setup/revenueSplit"),
  loading: () => <RctPageLoader />,
});

const AsyncRoles = Loadable({
  loader: () => import("Routes/setup/roles"),
  loading: () => <RctPageLoader />,
});

const AsyncAddPersonnel = Loadable({
  loader: () => import("Routes/setup/component/addPersonnel"),
  loading: () => <RctPageLoader />,
});
const AsyncGeoFencing = Loadable({
  loader: () => import("Routes/setup/geoFence"),
  loading: () => <RctPageLoader />,
});
const AsyncNotifications = Loadable({
  loader: () => import("Routes/notifications/notifications"),
  loading: () => <RctPageLoader />,
});

// report

// google maps
const AsyncGooleMapsComponent = Loadable({
  loader: () => import("Routes/maps/google-map"),
  loading: () => <RctPageLoader />,
});

// google maps
const AsyncLeafletMapComponent = Loadable({
  loader: () => import("Routes/maps/leaflet-map"),
  loading: () => <RctPageLoader />,
});

// Simple Line Icons

/*---------------- Session ------------------*/

// Session Login
const AsyncSessionLoginComponent = Loadable({
  loader: () => import("Routes/session/login"),
  loading: () => <RctPageLoader />,
});

// Session Register
const AsyncSessionRegisterComponent = Loadable({
  loader: () => import("Routes/session/register"),
  loading: () => <RctPageLoader />,
});

// Session Lock Screen
const AsyncSessionLockScreenComponent = Loadable({
  loader: () => import("Routes/session/lock-screen"),
  loading: () => <RctPageLoader />,
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable({
  loader: () => import("Routes/session/forgot-password"),
  loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage404Component = Loadable({
  loader: () => import("Routes/session/404"),
  loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage500Component = Loadable({
  loader: () => import("Routes/session/500"),
  loading: () => <RctPageLoader />,
});


// partners

const AsyncPartners = Loadable({
  loader: () => import("Routes/partners/partners"),
  loading: () => <RctPageLoader />,
});

const AsyncPartnersPending = Loadable({
  loader: () => import("Routes/partners/partnersPending"),
  loading: () => <RctPageLoader />,
});

const AsyncPartnersVerified = Loadable({
  loader: () => import("Routes/partners/partnersVerified"),
  loading: () => <RctPageLoader />,
});

const AsyncPartner = Loadable({
  loader: () => import("Routes/partners/partner"),
  loading: () => <RctPageLoader />,
});

const AsyncPartnerDrivers = Loadable({
  loader: () => import("Routes/partners/partnerDrivers"),
  loading: () => <RctPageLoader />,
});

export {
  AsyncPaymentsSuccessful,
  AsyncPaymentsUnsuccessful,
  AsyncPayments,
  AsyncAdmins,
  AsyncBookingTypes,
  AsyncFeesOld,
  AsyncClassTypes,
  AsyncActiveVehicles,
  AsyncInactiveVehicles,
  AsyncVehicles,
  AsyncVerifiedDrivers,
  AsyncServiceRequests,
  AsyncPendingDrivers,
  AsyncAcceptedDrivers,
  AsyncTrainedDrivers,
  AsyncInactiveDrivers,
  AsyncActiveDrivers,
  AsyncTrips,
  AsyncRevenues,
  AsyncNotifications,
  AsyncPassengers,
  AsyncDrivers,
  AsyncDriver,
  AsyncFees,
  AsyncGeoFencing,
  AsyncOthers,
  AsyncRevenueSplit,
  AsyncRoles,
  AsyncOem,
  AsyncAddPersonnel,
  AsyncActivityLog,
  AsyncPromoDiscount,
  AsyncPromoDiscountDetails,
  AsyncPromoBeneficiaries,
  AsyncGooleMapsComponent,
  AsyncLeafletMapComponent,
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionLockScreenComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncSessionPage500Component,
  AsyncHomeDashboardComponent,
  AsyncPassenger,
  // AsyncPassengersActive,
  // AsyncPassengersInactive,
  AsyncDriverRatings,
  AsyncUserRatings,
  AsyncSupport,
  AsyncEmergency,
  AsyncEmergencyEmail,
  AsyncEmergencyDetails,
  AsyncMaintenanceLog,
  AsyncMaintenanceDetails,
  AsyncUsers,
  AsyncSupportDetails,
  AsyncSupportSetup,
  AsyncSupportNew,
  AsyncSupportOpened,
  AsyncSupportClosed,
  AsyncSupportUnresolved,
  AsyncSupportInProgress,
  AsyncAreas,
  AsyncSupportType,
  AsyncPaymentsDetails,
  AsyncSchedule,
  AsyncScheduleDetails,
  AsyncReferral,
  AsyncRevenueSplitOld,
  AsyncFdt,
  AsyncFdtDetails,
  AsyncTripDetails,
  AsyncTripsCompleted,
  AsyncTripsCancelled,
  AsyncTripsWaiting,
  AsyncTripsCurrent,
  AsyncCancellationReasons,
  AsyncVehicleDetails,
  AsyncRatingsDetails,
  AsyncEmergencyNumber,
  AsyncWallet,
  AsyncWallets,
  AsyncWalletsCancelled,
  AsyncWalletsCompleted,
  AsyncWalletsPending,
  AsyncWalletsDebit,
  AsyncSupportContactUs,
  AsyncSupportContactUsDetails,
  AsyncPaymentsServiceSuccessful,
  AsyncPaymentsServiceUnsuccessful,
  AsyncPaymentsServicePending,
  AsyncPaymentsService,
  AsyncPaymentsServiceDetails,
  AsyncCustomerCare,
  AsyncVehiclesFeedback,
  AsyncFinance,
  AsyncDisbursement,
  AsyncVehiclesFeedbackDetails,
  AsyncDisbursementHolders,
  AsyncPaymentsServiceRefund,
  AsyncWalletsRefund,
  AsyncPartners,
  AsyncPartner,
  AsyncPartnersPending,
  AsyncPartnersVerified,
  AsyncPartnerDrivers
};
