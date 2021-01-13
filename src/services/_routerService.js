// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';
import ImageCropper from 'Routes/image-cropper';
import VideoPlayer from 'Routes/video-player';
import Dropzone from 'Routes/dropzone';
import PaymentsRoutes from "Routes/payments/paymentsRoutes";


// async component
import {
   AsyncAboutUsComponent,
   AsyncChatComponent,
   AsyncMailComponent,
   AsyncTodoComponent,
   AsyncVehicles,
   AsyncPassengers,
   AsyncTrips,
   AsyncAdmins,
   AsyncClassTypes,
   AsyncBookingTypes,
   AsyncFees,
   AsyncCancellations,
   AsyncPayments,
   AsyncPromoDiscount
} from 'Components/AsyncComponent/AsyncComponent';
import DriverRoutes from "Routes/drivers/driverRoutes";
import VehicleRoutes from "Routes/vehicles/vehicleRoutes";
import RefundsRoutes from "Routes/refunds/refundsRoutes";


export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'widgets',
      component: Widgets
   },
   {
      path: 'ecommerce',
      component: Ecommerce
   },
   {
      path: 'icons',
      component: Icons
   },
   {
      path: 'about-us',
      component: AsyncAboutUsComponent
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
      component: AsyncPassengers
   },
   {
      path: 'pages',
      component: Pages
   },
   {
      path: 'chat',
      component: AsyncChatComponent
   },
   {
      path: 'mail',
      component: AsyncMailComponent
   },
   {
      path: 'todo',
      component: AsyncTodoComponent
   },
   {
      path: 'charts',
      component: ChartsComponents
   },
   {
      path: 'tables',
      component: Tables
   },
   {
      path: 'maps',
      component: Maps
   },
   {
      path: 'users',
      component: Users
   },
   {
      path: 'ui-components',
      component: Components
   },
   {
      path: 'advanced-component',
      component: AdvanceUIComponents
   },
   {
      path: 'drag-andDrop',
      component: DragAndDrop
   },
   {
      path: 'forms',
      component: FormElements
   },
   {
      path: 'editor',
      component: Editor
   },
   {
      path: 'calendar',
      component: CalendarComponents
   },
   {
      path: 'image-cropper',
      component: ImageCropper
   },
   {
      path: 'video-player',
      component: VideoPlayer
   },
   {
      path: 'dropzone',
      component: Dropzone
   }
]
