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
  AsyncPromoDiscount,
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
import SetupRoutes from "Routes/setup/setupRoutes";
import MaintenanceLog from "../routes/maintenance-log/maintenanceRoutes";
import MaintenanceRoutes from "../routes/maintenance-log/maintenanceRoutes";
import promoRoutes from "../routes/promo-discounts/promoRoutes";

export default [
  {
    path: "dashboard",
    component: Dashboard,
    permission: "view_dashboard",
  },
  {
    path: "drivers",
    component: DriverRoutes,
    permission: "view_drivers",
  },
  {
    path: "admins",
    component: AsyncAdmins,
    permission: "view_personnels",
  },
  {
    path: "users",
    component: AsyncUsers,
    permission: "view_users",
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
    permission: "view_setup",
  },
  {
    path: "wallets",
    component: WalletsRoutes,
    permission: "view_drivers",
  },
  {
    path: "cancellation-reasons",
    component: AsyncCancellationReasons,
    permission: "view_setup",
  },
  // {
  //    path: 'voucher',
  //    component: AsyncVoucher
  // },
  {
    path: "referral",
    component: ReferralRoutes,
    permission: "view_referral",
  },
  // {
  //   path: "revenue",
  //   component: AsyncRevenueSplitOld,
  //   permission: "view_referral",
  // },
  {
    path: "promo-discounts",
    component: promoRoutes,
    permission: "view_promo",
  },
  // {
  //    path: 'cancellations',
  //    component: AsyncCancellations
  // },
  {
    path: "payments",
    component: PaymentsRoutes,
    permission: "view_trip_payments",
  },
  {
    path: "payments-service",
    component: PaymentsServiceRoutes,
    permission: "view_trip_payments",
  },
  // {
  //    path: 'refunds',
  //    component: RefundsRoutes
  // },
  {
    path: "trips",
    component: TripRoutes,
    permission: "view_trip_manifest",
  },
  {
    path: "vehicles",
    component: VehicleRoutes,
    permission: "view_vehicles",
  },
  {
    path: "passengers",
    component: PassengerRoutes,
    permission: "view_passengers",
  },
  {
    path: "map",
    component: AsyncGooleMapsComponent,
    permission: "view_maps",
  },
  {
    path: "schedule",
    component: ScheduleRoutes,
    permission: "view_FDTs_and_Schedules",
  },
  {
    path: "fdt",
    component: FdtRoutes,
    permission: "view_FDTs_and_Schedules",
  },
  {
    path: "ratings",
    component: RatingsRoutes,
    permission: "view_ratings_and_reviews",
  },

  // {
  //   path: "areas",
  //   component: AsyncAreas,
  //   permission: "view_ratings_and_reviews",
  // },
  {
    path: "support",
    component: SupportRoutes,
    permission: "view_tickets",
  },
  // {
  //   path: "settings",
  //   component: AsyncCustomerCare,
  // },
  // {
  //    path: 'analytics',
  //    component: AsyncAnalytics
  // },
  {
    path: "emergency",
    component: EmergencyRoutes,
    permission: "view_emergency",
  },
  {
    path: "maintenance",
    component: MaintenanceRoutes,
    permission: "view_maintenance_&_repairs",
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "activity-log",
    component: AsyncActivityLog,
    permision: "view_activity_log",
  },

  {
    path: "setup",
    component: SetupRoutes,
    permision: "view_setup",
  },
];
