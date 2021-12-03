// routes
import Dashboard from "Routes/dashboard";
import PaymentsRoutes from "Routes/payments/paymentsRoutes";

// async component
import {
   AsyncAdmins,
   AsyncFeesOld,
   AsyncGooleMapsComponent,
   AsyncUsers,
   AsyncAreas,
   AsyncRevenueSplitOld,
   AsyncCancellationReasons,
   AsyncCustomerCare,
   AsyncActivityLog,
} from "Components/AsyncComponent/AsyncComponent";
import DriverRoutes from "Routes/drivers/driverRoutes";
import VehicleRoutes from "Routes/vehicles/vehicleRoutes";
import Login from "Routes/session/login";
import PassengerRoutes from "Routes/passengers/passengerRoutes";
import EmergencyRoutes from "Routes/emergency/emergencyRoutes";
import SupportRoutes from "Routes/support/supportRoutes";
import ScheduleRoutes from "Routes/schedule/scheduleRoutes";
import ReferralRoutes from "Routes/referral/referralRoutes";
import FdtRoutes from "Routes/fdt/fdtRoutes";
import TripRoutes from "Routes/trips/tripsRoutes";
import RatingsRoutes from "Routes/ratings/ratingsRoutes";
import WalletsRoutes from "Routes/wallets/walletsRoutes";
import PaymentsServiceRoutes from "Routes/payments-service/paymentsServiceRoutes";
<<<<<<< HEAD
import SetupRoutes from "Routes/setup/setupRoutes";
=======
import SetupRoutes from "Routes/setup/SetupRoutes";
import MaintenanceLog from "../routes/maintenance-log/maintenanceRoutes";
import MaintenanceRoutes from "../routes/maintenance-log/maintenanceRoutes";
>>>>>>> 0722b6393e4f6e28dfd6676177d03f7121c7c080

export default [
   {
      path: "dashboard",
      component: Dashboard,
   },
   {
      path: "drivers",
      component: DriverRoutes,
   },
   {
      path: "admins",
      component: AsyncAdmins,
   },
   {
      path: "users",
      component: AsyncUsers,
   },
   // {
   //    path: 'class-types',
   //    component: AsyncClassTypes
   // },
   // {
   //    path: 'booking-types',
   //    component: AsyncBookingTypes
   // },
   {
      path: "fees",
      component: AsyncFeesOld,
   },
   {
      path: "wallets",
      component: WalletsRoutes,
   },
   {
      path: "cancellation-reasons",
      component: AsyncCancellationReasons,
   },
   // {
   //    path: 'voucher',
   //    component: AsyncVoucher
   // },
   {
      path: "referral",
      component: ReferralRoutes,
   },
   {
      path: "revenue",
      component: AsyncRevenueSplitOld,
   },
   // {
   //    path: 'promo-discounts',
   //    component: AsyncPromoDiscount
   // },
   // {
   //    path: 'cancellations',
   //    component: AsyncCancellations
   // },
   {
      path: "payments",
      component: PaymentsRoutes,
   },
   {
      path: "payments-service",
      component: PaymentsServiceRoutes,
   },
   // {
   //    path: 'refunds',
   //    component: RefundsRoutes
   // },
   {
      path: "trips",
      component: TripRoutes,
   },
   {
      path: "vehicles",
      component: VehicleRoutes,
   },
   {
      path: "passengers",
      component: PassengerRoutes,
   },
   {
      path: "map",
      component: AsyncGooleMapsComponent,
   },
   {
      path: "schedule",
      component: ScheduleRoutes,
   },
   {
      path: "fdt",
      component: FdtRoutes,
   },
   {
      path: "ratings",
      component: RatingsRoutes,
   },

<<<<<<< HEAD
   {
      path: "areas",
      component: AsyncAreas,
   },
   {
      path: "support",
      component: SupportRoutes,
   },
   {
      path: "settings",
      component: AsyncCustomerCare,
   },
   // {
   //    path: 'analytics',
   //    component: AsyncAnalytics
   // },
   {
      path: "emergency",
      component: EmergencyRoutes,
   },
   {
      path: "login",
      component: Login,
   },
   {
      path: "activity-log",
      component: AsyncActivityLog,
   },
=======
  {
    path: "areas",
    component: AsyncAreas,
  },
  {
    path: "support",
    component: SupportRoutes,
  },
  {
    path: "settings",
    component: AsyncCustomerCare,
  },
  // {
  //    path: 'analytics',
  //    component: AsyncAnalytics
  // },
  {
    path: "emergency",
    component: EmergencyRoutes,
  },
  {
    path: "maintenance",
    component: MaintenanceRoutes,
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "activity-log",
    component: AsyncActivityLog,
  },
>>>>>>> 0722b6393e4f6e28dfd6676177d03f7121c7c080

   {
      path: "setup",
      component: SetupRoutes,
   },
];
