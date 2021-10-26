// sidebar nav links
export default {
   category1: [
      {
         "menu_title": "sidebar.setup",
         "menu_icon": "icon-settings",
         "type_multi": null,
         // "new_item": true,
         "child_routes": [
            {
               "menu_title": "sidebar.admins",
               "new_item": false,
               "path": "/admin/admins"
            },
            // {
            //    "menu_title": "sidebar.class-types",
            //    "new_item": false,
            //    "path": "/admin/class-types"
            // },
            // {
            //    "menu_title": "sidebar.booking-types",
            //    "new_item": false,
            //    "path": "/admin/booking-types"
            // },
            {
               "menu_title": "sidebar.fees",
               "new_item": false,
               "path": "/admin/fees"
            },
            {
               "menu_title": "sidebar.cancellationReasons",
               "new_item": false,
               "path": "/admin/cancellation-reasons"
            },
            {
               "menu_title": "sidebar.areas",
               "new_item": false,
               "path": "/admin/areas"
            },
         ]
      },
      {
         "menu_title": "sidebar.users",
         "menu_icon": "icon-user",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/users"
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
            // {
            //    "path": "/admin/passengers/active",
            //    "menu_title": "sidebar.active"
            // },
            // {
            //    "path": "/admin/passengers/inactive",
            //    "menu_title": "sidebar.inactive"
            // }
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
               "path": "/admin/drivers/pending",
               "new_item": false,
               "menu_title": "sidebar.pending"
            },
            {
               "path": "/admin/drivers/accepted",
               "new_item": false,
               "menu_title": "sidebar.accepted"
            },
            {
               "path": "/admin/drivers/verified",
               "new_item": false,
               "menu_title": "sidebar.verified"
            },
            {
               "path": "/admin/drivers/trained",
               "new_item": false,
               "menu_title": "sidebar.trained"
            },
            {
               "path": "/admin/drivers/approved",
               "new_item": false,
               "menu_title": "sidebar.approved"
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
               "path": "/admin/trips/waiting",
               "new_item": false,
               "menu_title": "sidebar.waiting"
            },
            {
               "path": "/admin/trips/completed",
               "new_item": false,
               "menu_title": "sidebar.completed"
            },
            {
               "path": "/admin/trips/current",
               "new_item": false,
               "menu_title": "sidebar.current"
            },
            {
               "path": "/admin/trips/cancelled",
               "new_item": false,
               "menu_title": "sidebar.cancelled"
            },


         ]
      },
      // {
      //    "menu_title": "sidebar.cancellation",
      //    "menu_icon": "zmdi zmdi-close",
      //    "type_multi": null,
      //    "new_item": false,
      //    "path": "/admin/cancellations"
      // },
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
         "menu_title": "sidebar.service-payments",
         "menu_icon": "icon-credit-card",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/payments-service",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/admin/payments-service/successful",
               "new_item": false,
               "menu_title": "sidebar.successful"
            },
            {
               "path": "/admin/payments-service/unsuccessful",
               "new_item": false,
               "menu_title": "sidebar.unsuccessful"
            },
         ]
      },


      {
         "menu_title": "sidebar.referral",
         "menu_icon": "zmdi zmdi-time-interval",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/referral"
      },
      {
         "menu_title": "sidebar.ratings",
         "menu_icon": " icon-star",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/ratings",
               "new_item": false,
               "menu_title": "sidebar.driver ratings"
            },
            {
               "path": "/admin/ratings/passengers",
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
         "child_routes": [
            {
               "path": "/admin/emergency",
               "new_item": false,
               "menu_title": "sidebar.emergency",
            },
            {
               "path": "/admin/emergency/numbers",
               "new_item": false,
               "menu_title": "sidebar.emergencyNumber",
            },
         ]
      },
      // {
      //    "menu_title": "sidebar.analytics",
      //    "menu_icon": "zmdi zmdi-hospital",
      //    "type_multi": null,
      //    "new_item": false,
      //    "path": "/admin/analytics"
      // },
      {
         "menu_title": "sidebar.fdt and schedule",
         "menu_icon": "zmdi zmdi-map",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "menu_title": "sidebar.Fdt",
               "menu_icon": "mdi zmdi-hospital",
               "type_multi": null,
               "new_item": false,
               "path": "/admin/fdt"
            },
            {
               "menu_title": "sidebar.schedule",
               "menu_icon": "mdi zmdi-hospital",
               "type_multi": null,
               "new_item": false,
               "path": "/admin/schedule"
            },
         ]
      },



      {
         "menu_title": "sidebar.support",
         "menu_icon": " mdi zmdi-hospital",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/admin/support/setup",
               "new_item": false,
               "menu_title": "sidebar.ticket types"
            },
            {
               "path": "/admin/support/create",
               "new_item": false,
               "menu_title": "sidebar.ticket create"
            },
            {
               "path": "/admin/support",
               "new_item": false,
               "menu_title": "sidebar.ticket all"
            },
            {
               "path": "/admin/support/new",
               "new_item": false,
               "menu_title": "sidebar.ticket new"
            },
            {
               "path": "/admin/support/opened",
               "new_item": false,
               "menu_title": "sidebar.ticket opened"
            },
            {
               "path": "/admin/support/in-progress",
               "new_item": false,
               "menu_title": "sidebar.ticket in-progress"
            },
            {
               "path": "/admin/support/closed",
               "new_item": false,
               "menu_title": "sidebar.ticket closed"
            },
            {
               "path": "/admin/support/unresolved",
               "new_item": false,
               "menu_title": "sidebar.ticket unresolved"
            },
            {
               "path": "/admin/support/contact-us",
               "new_item": false,
               "menu_title": "sidebar.contactUs"
            },
         ]
      },
      {
         "menu_title": "sidebar.maps",
         "menu_icon": "zmdi zmdi-map",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/map"
      },
      {
         "menu_title": "sidebar.settings",
         "menu_icon": "zmdi zmdi-map",
         "type_multi": null,
         "new_item": false,
         "path": "/admin/settings"
      },
   ],
}
