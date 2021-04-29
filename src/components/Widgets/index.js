/**
 * App Widgets
 */
import React from 'react';
import Loadable from 'react-loadable';
import PreloadWidget from 'Components/PreloadLayout/PreloadWidget';

const MyLoadingComponent = () => (
   <PreloadWidget />
)

const SupportRequest = Loadable({
   loader: () => import("./SupportRequest"),
   loading: MyLoadingComponent
});

const FollowersWidget = Loadable({
   loader: () => import("./Followers"),
   loading: MyLoadingComponent
})

const BookingInfo = Loadable({
   loader: () => import("./BookingInfo"),
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

const TodayOrdersStatsWidget = Loadable({
   loader: () => import("./TodayOrdersStats"),
   loading: MyLoadingComponent
})








export {
   SupportRequest,
   FollowersWidget,
   BookingInfo,
   VisitorAreaChartWidget,
   OverallTrafficStatusWidget,
   TodayOrdersStatsWidget,
}
