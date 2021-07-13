/**
 * App Widgets
 */
import React from 'react';
import Loadable from 'react-loadable';
import PreloadWidget from 'Components/PreloadLayout/PreloadWidget';

const MyLoadingComponent = () => (
   <PreloadWidget />
)

const TripCard = Loadable({
   loader: () => import("./TripCard"),
   loading: MyLoadingComponent
});

const RefundsWidget = Loadable({
   loader: () => import("./RefundWidget"),
   loading: MyLoadingComponent
})

const PaymentWidget = Loadable({
   loader: () => import("./PaymentWidget"),
   loading: MyLoadingComponent
})

const VisitorAreaChartWidget = Loadable({
   loader: () => import("./VisitorAreaChart"),
   loading: MyLoadingComponent
})

const OverallTrafficStatusWidget = Loadable({
   loader: () => import("./OverallTrafficStatus"),
   loading: MyLoadingComponent
})

const SchedulesWidget = Loadable({
   loader: () => import("./ScheduleWidget"),
   loading: MyLoadingComponent
})

const VehicleChartWidget = Loadable({
   loader: () => import("./VehicleChart"),
   loading: MyLoadingComponent
})








export {
   TripCard,
   RefundsWidget,
   PaymentWidget,
   VisitorAreaChartWidget,
   OverallTrafficStatusWidget,
   SchedulesWidget,
   VehicleChartWidget
}
