// routes
import Dashboard from 'Routes/dashboard';
import PaymentsRoutes from "Routes/payments/paymentsRoutes";


// async component
import {
   AsyncTrips,
   AsyncAdmins,
   AsyncClassTypes,
   AsyncBookingTypes,
   AsyncFees,
   AsyncCancellations,
   AsyncPromoDiscount
} from 'Components/AsyncComponent/AsyncComponent';
import DriverRoutes from "Routes/drivers/driverRoutes";
import VehicleRoutes from "Routes/vehicles/vehicleRoutes";
import RefundsRoutes from "Routes/refunds/refundsRoutes";
import Maps from "Routes/maps";
import Login from  "Routes/session/login"
import PassengerRoutes from "Routes/passengers/passengerRoutes";


export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'drivers',
      component: DriverRoutes
   },
   {
      path: 'admins',
      component: AsyncAdmins
   },
   {
      path: 'class-types',
      component: AsyncClassTypes
   },
   {
      path: 'booking-types',
      component: AsyncBookingTypes
   },
   {
      path: 'fees',
      component: AsyncFees
   },
   {
      path: 'promo-discounts',
      component: AsyncPromoDiscount
   },
   {
      path: 'cancellations',
      component: AsyncCancellations
   },
   {
      path: 'payments',
      component: PaymentsRoutes
   },
   {
      path: 'refunds',
      component: RefundsRoutes
   },
   {
      path: 'trips',
      component: AsyncTrips
   },
   {
      path: 'vehicles',
      component: VehicleRoutes
   },
   {
      path: 'passengers',
      component: PassengerRoutes
   },
   {
      path: 'maps',
      component: Maps
   },

   {
      path: 'login',
      component: Login
   }
]
