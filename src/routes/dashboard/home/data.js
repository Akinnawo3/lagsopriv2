// chart config
import ChartConfig from 'Constants/chart-config';

// visitors data
export const visitorsData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   monthly: 7233,
   weekly: 5529
}

// sales data
export const salesData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   today: 6544,
   totalRevenue: 9125
}

// orders data
export const ordersData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   today: 5652,
   totalRevenue: 8520
}




// traffic Status
export const trafficStatus = {
   chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'oct', 'Nov', 'Dec'],
   chartDatasets: [
      {
         label: 'Series A',
         backgroundColor: ChartConfig.color.primary,
         borderColor: ChartConfig.color.primary,
         borderWidth: 1,
         hoverBackgroundColor: ChartConfig.color.primary,
         hoverBorderColor: ChartConfig.color.primary,
			data: [65, 59, 80, 81, 56, 55, 40, 34, 78, 26, 98, 100]
      },
   ],
   onlineSources: '3500',
   today: '17,020',
   lastMonth: '20.30%'
}
