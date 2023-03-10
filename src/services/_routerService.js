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
  AsyncCancellationReasons,
  AsyncActivityLog,
  AsyncNotifications,
  AsyncSendNotifications,
  AsyncDisbursement,
  AsyncFinance,
  AsyncDisbursementHolders,
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
import RevenueRoute from "../routes/revenues/revenueRoutes";
import PartnersRoutes from "Routes/partners/partnersRoutes";
import ComplianceRoutes from "../routes/compliance/complianceRoutes";
import { AsyncRouteIntelligence } from "../components/AsyncComponent/AsyncComponent";

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
    permission: "view_drivers", // to be changed
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

  {
    path: "finance",
    component: AsyncFinance,
    permission: "view_trip_payments",
  },

  {
    path: "disbursement-driver",
    component: AsyncDisbursement,
    permission: "view_trip_payments",
  },
  {
    path: "disbursement-holder",
    component: AsyncDisbursementHolders,
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

  {
    path: "areas",
    component: AsyncAreas,
    permission: "view_setup",
  },
  {
    path: "support",
    component: SupportRoutes,
    permission: "view_tickets",
  },
  {
    path: "notifications",
    component: AsyncNotifications,
    permission: "view_notifications",
  },
  {
    path: "send-notifications",
    component: AsyncSendNotifications,
    permission: "view_notifications",
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
    permission: "view_activity_log",
  },

  {
    path: "setup",
    component: SetupRoutes,
    permission: "view_setup",
  },

  //routes that have no permission identifiers
  {
    path: "revenues",
    component: RevenueRoute,
    permission: "view_trip_payments",
  },

  {
    path: "partners",
    component: PartnersRoutes,
    permission: "view_partners",
  },
  {
    path: "compliance",
    component: ComplianceRoutes,
    permission: "view_partners",
  },
  {
    path: "route-intelligence",
    component: AsyncRouteIntelligence,
    permission: "view_partners",
  },
];
