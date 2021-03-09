// sidebar nav links
export default {
   category1: [
      {
         "menu_title": "sidebar.setup",
         "menu_icon": " icon-settings",
         "type_multi": null,
         // "new_item": true,
         "child_routes": [
            {
               "menu_title": "sidebar.admins",
               "new_item": false,
               "path": "/admin/admins"
            },
            {
               "menu_title": "sidebar.class-types",
               "new_item": false,
               "path": "/admin/class-types"
            },
            {
               "menu_title": "sidebar.booking-types",
               "new_item": false,
               "path": "/admin/booking-types"
            },
            {
               "menu_title": "sidebar.fees",
               "new_item": false,
               "path": "/admin/fees"
            },
         ]
      },
      {
         "menu_title": "sidebar.passengers",
         "menu_icon": "icon-user",
         "type_multi": null,
         // "new_item": true,
         "child_routes": [
            {
               "path": "/admin/passengers",
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/passengers/active",
               "menu_title": "sidebar.active"
            },
            {
               "path": "/admin/passengers/inactive",
               "menu_title": "sidebar.inactive"
            }
         ]
      },
      {
         "menu_title": "sidebar.drivers",
         "menu_icon": "icon-user",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/drivers",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/drivers/active",
               "new_item": false,
               "menu_title": "sidebar.approved"
            },
            {
               "path": "/admin/drivers/verified",
               "new_item": false,
               "menu_title": "sidebar.verified"
            },
            {
               "path": "/admin/drivers/pending",
               "new_item": false,
               "menu_title": "sidebar.pending"
            },
            {
               "path": "/admin/drivers/inactive",
               "new_item": false,
               "menu_title": "sidebar.inactive"
            },
            // {
            //    "path": "/app/home/shop-grid",
            //    "new_item": false,
            //    "menu_title": "sidebar.shopGrid"
            // },
            // {
            //    "path": "/app/home/invoice",
            //    "new_item": false,
            //    "menu_title": "sidebar.invoice"
            // }
         ]
      },
      {
         "menu_title": "sidebar.vehicles",
         "menu_icon": "zmdi zmdi-car",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/vehicles",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/vehicles/active",
               "new_item": false,
               "menu_title": "sidebar.active"
            },
            {
               "path": "/admin/vehicles/inactive",
               "new_item": false,
               "menu_title": "sidebar.inactive"
            },
         ]
      },
      {
         "menu_title": "sidebar.trip manifest",
         "menu_icon": "icon-graph",
         // "path": "/app/widgets",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/trips",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/trips",
               "new_item": false,
               "menu_title": "sidebar.waiting"
            },
            {
               "path": "/admin/trips",
               "new_item": false,
               "menu_title": "sidebar.completed"
            },
            {
               "path": "/admin/trips",
               "new_item": false,
               "menu_title": "sidebar.current"
            },
            {
               "path": "/admin/trips",
               "new_item": false,
               "menu_title": "sidebar.cancelled"
            },


         ]
      },
      {
         "menu_title": "sidebar.cancellation",
         "menu_icon": "zmdi zmdi-close",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/cancellations"
      },
      {
         "menu_title": "sidebar.payments",
         "menu_icon": "icon-credit-card",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/payments",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/payments/successful",
               "new_item": false,
               "menu_title": "sidebar.successful"
            },
            {
               "path": "/admin/payments/unsuccessful",
               "new_item": false,
               "menu_title": "sidebar.unsuccessful"
            },
         ]
      },
      {
         "menu_title": "sidebar.refunds",
         "menu_icon": "zmdi zmdi-money",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/refunds",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/refunds/pending",
               "new_item": false,
               "menu_title": "sidebar.pending"
            },
            {
               "path": "/admin/refunds/completed",
               "new_item": false,
               "menu_title": "sidebar.completed"
            },
         ]
      },
      {
         "menu_title": "sidebar.promodiscounts",
         "menu_icon": "zmdi zmdi-time-interval",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/promo-discounts"
      },
      {
         "menu_title": "sidebar.ratings",
         "menu_icon": " icon-star",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/driver-ratings",
               "new_item": false,
               "menu_title": "sidebar.driver ratings"
            },
            {
               "path": "/admin/taxi-ratings",
               "new_item": false,
               "menu_title": "sidebar.taxi ratings"
            },
            {
               "path": "/admin/user-ratings",
               "new_item": false,
               "menu_title": "sidebar.user ratings"
            },
         ]
      },
      {
         "menu_title": "sidebar.emergency",
         "menu_icon": "zmdi zmdi-hospital",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/emergency"
      },
      {
         "menu_title": "sidebar.analytics",
         "menu_icon": "zmdi zmdi-hospital",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/analytics"
      },
      {
         "menu_title": "sidebar.maps",
         "menu_icon": "zmdi zmdi-map",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/map"
      },
      {
         "menu_title": "sidebar.support",
         "menu_icon": "zmdi zmdi-hospital",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/support"
      },
   ],
}
