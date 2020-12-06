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
               "menu_title": "sidebar.operators",
               "new_item": false,
               "path": "/app/dashboard/ecommerce"
            },
            {
               "menu_title": "sidebar.class type",
               "new_item": false,
               "path": "/app/dashboard/ecommerce"
            },
            {
               "menu_title": "sidebar.booking type",
               "new_item": false,
               "path": "/app/dashboard/ecommerce"
            },
            {
               "menu_title": "sidebar.fees",
               "new_item": false,
               "path": "/app/dashboard/ecommerce"
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
               "path": "/dashboard/crm/projects",
               "menu_title": "sidebar.all"
            },
            {
               "path": "/dashboard/crm/clients",
               "menu_title": "sidebar.active"
            },
            {
               "path": "/dashboard/crm/reports",
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
               "path": "/app/drivers",
               "new_item": false,
               "menu_title": "sidebar.all"
            },
            {
               "path": "/app/ecommerce/cart",
               "new_item": false,
               "menu_title": "sidebar.active"
            },
            {
               "path": "/app/ecommerce/checkout",
               "new_item": false,
               "menu_title": "sidebar.suspended"
            },
            {
               "path": "/app/ecommerce/shop-list",
               "new_item": false,
               "menu_title": "sidebar.inactive"
            },
            // {
            //    "path": "/app/ecommerce/shop-grid",
            //    "new_item": false,
            //    "menu_title": "sidebar.shopGrid"
            // },
            // {
            //    "path": "/app/ecommerce/invoice",
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
               "path": "/app/ecommerce/shop",
               "new_item": false,
               "menu_title": "sidebar.active"
            },
            {
               "path": "/app/ecommerce/cart",
               "new_item": false,
               "menu_title": "sidebar.inactive"
            },
         ]
      },
      {
         "menu_title": "sidebar.trip manifest",
         "menu_icon": "icon-graph",
         "path": "/app/widgets",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/widgets/charts",
               "new_item": false,
               "menu_title": "sidebar.waiting"
            },
            {
               "path": "/app/widgets/promo",
               "new_item": false,
               "menu_title": "sidebar.completed"
            },
            {
               "path": "/app/widgets/general",
               "new_item": false,
               "menu_title": "sidebar.current"
            },
            {
               "path": "/app/widgets/user",
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
         "path": "/app/pages/gallery"
      },
      {
         "menu_title": "sidebar.payments",
         "menu_icon": "icon-credit-card",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/session/login",
               "new_item": false,
               "menu_title": "sidebar.successful"
            },
            {
               "path": "/session/register",
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
               "path": "/session/login",
               "new_item": false,
               "menu_title": "sidebar.pending"
            },
            {
               "path": "/session/register",
               "new_item": false,
               "menu_title": "sidebar.completed"
            },
         ]
      },
      {
         "menu_title": "sidebar.promo and discounts",
         "menu_icon": "zmdi zmdi-time-interval",
         "type_multi": null,
         "new_item": false,
         "path": "/session/register"
      },
      {
         "menu_title": "sidebar.ratings",
         "menu_icon": " icon-star",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/session/login",
               "new_item": false,
               "menu_title": "sidebar.driver ratings"
            },
            {
               "path": "/session/register",
               "new_item": false,
               "menu_title": "sidebar.taxi ratings"
            },
            {
               "path": "/session/register",
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
         "path": "/session/register"
      },
      {
         "menu_title": "sidebar.support",
         "menu_icon": "zmdi zmdi-hospital",
         "type_multi": null,
         "new_item": false,
         "path": "/session/register"
      },
      {
         "menu_title": "sidebar.analytics",
         "menu_icon": "zmdi zmdi-hospital",
         "type_multi": null,
         "new_item": false,
         "path": "/session/register"
      },
      {
         "menu_title": "sidebar.maps",
         "menu_icon": "zmdi zmdi-map",
         "type_multi": null,
         "new_item": false,
         "path": "/session/register"
      },
   ],
   // category2: [
   //
   //
   // ],
   // category3: [
   //    {
   //       "menu_title": "sidebar.uiComponents",
   //       "menu_icon": "zmdi zmdi-wrench",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/ui-components/alerts",
   //             "new_item": false,
   //             "menu_title": "sidebar.alerts"
   //          },
   //          {
   //             "path": "/app/ui-components/app-bar",
   //             "new_item": false,
   //             "menu_title": "sidebar.appBar"
   //          },
   //          {
   //             "path": "/app/ui-components/avatars",
   //             "new_item": false,
   //             "menu_title": "sidebar.avatars"
   //          },
   //          {
   //             "path": "/app/ui-components/buttons",
   //             "new_item": false,
   //             "menu_title": "sidebar.buttons"
   //          },
   //          {
   //             "path": "/app/ui-components/bottom-navigations",
   //             "new_item": false,
   //             "menu_title": "sidebar.bottomNavigations"
   //          },
   //          {
   //             "path": "/app/ui-components/badges",
   //             "new_item": false,
   //             "menu_title": "sidebar.badges"
   //          },
   //          {
   //             "path": "/app/ui-components/cards",
   //             "new_item": false,
   //             "menu_title": "sidebar.cards"
   //          },
   //          {
   //             "path": "/app/ui-components/cards-masonry",
   //             "new_item": false,
   //             "menu_title": "sidebar.cardsMasonry"
   //          },
   //          {
   //             "path": "/app/ui-components/chip",
   //             "new_item": false,
   //             "menu_title": "sidebar.chip"
   //          },
   //          {
   //             "path": "/app/ui-components/dialog",
   //             "new_item": false,
   //             "menu_title": "sidebar.dialog"
   //          },
   //          {
   //             "path": "/app/ui-components/dividers",
   //             "new_item": false,
   //             "menu_title": "sidebar.dividers"
   //          },
   //          {
   //             "path": "/app/ui-components/drawers",
   //             "new_item": false,
   //             "menu_title": "sidebar.drawers"
   //          },
   //          {
   //             "path": "/app/ui-components/expansion-panel",
   //             "new_item": false,
   //             "menu_title": "sidebar.expansionPanel"
   //          },
   //          {
   //             "path": "/app/ui-components/grid-list",
   //             "new_item": false,
   //             "menu_title": "sidebar.gridList"
   //          },
   //          {
   //             "path": "/app/ui-components/list",
   //             "new_item": false,
   //             "menu_title": "sidebar.list"
   //          },
   //          {
   //             "path": "/app/ui-components/menu",
   //             "new_item": false,
   //             "menu_title": "sidebar.menu"
   //          },
   //          {
   //             "path": "/app/ui-components/popover",
   //             "new_item": false,
   //             "menu_title": "sidebar.popoverAndToolTip"
   //          },
   //          {
   //             "path": "/app/ui-components/progress",
   //             "new_item": false,
   //             "menu_title": "sidebar.progress"
   //          },
   //          {
   //             "path": "/app/ui-components/snackbar",
   //             "new_item": false,
   //             "menu_title": "sidebar.snackbar"
   //          },
   //          {
   //             "path": "/app/ui-components/selection-controls",
   //             "new_item": false,
   //             "menu_title": "sidebar.selectionControls"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.advancedComponent",
   //       "menu_icon": "zmdi zmdi-view-carousel",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/advanced-component/dateTime-picker",
   //             "new_item": false,
   //             "menu_title": "sidebar.dateAndTimePicker"
   //          },
   //          {
   //             "path": "/app/advanced-component/tabs",
   //             "new_item": false,
   //             "menu_title": "sidebar.tabs"
   //          },
   //          {
   //             "path": "/app/advanced-component/stepper",
   //             "new_item": false,
   //             "menu_title": "sidebar.stepper"
   //          },
   //          {
   //             "path": "/app/advanced-component/notification",
   //             "new_item": false,
   //             "menu_title": "sidebar.notification"
   //          },
   //          {
   //             "path": "/app/advanced-component/sweet-alert",
   //             "new_item": false,
   //             "menu_title": "sidebar.sweetAlert"
   //          },
   //          {
   //             "path": "/app/advanced-component/auto-complete",
   //             "new_item": false,
   //             "menu_title": "sidebar.autoComplete"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.aboutUs",
   //       "menu_icon": "zmdi zmdi-info",
   //       "path": "/app/about-us",
   //       "new_item": false,
   //       "child_routes": null
   //    }
   // ],
   // category4: [
   //    {
   //       "menu_title": "sidebar.forms",
   //       "menu_icon": "zmdi zmdi-file-text",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/forms/form-elements",
   //             "new_item": false,
   //             "menu_title": "sidebar.formElements"
   //          },
   //          {
   //             "path": "/app/forms/text-field",
   //             "new_item": false,
   //             "menu_title": "sidebar.textField"
   //          },
   //          {
   //             "path": "/app/forms/select-list",
   //             "new_item": false,
   //             "menu_title": "sidebar.selectList"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.charts",
   //       "menu_icon": "zmdi zmdi-chart-donut",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/charts/re-charts",
   //             "new_item": false,
   //             "menu_title": "sidebar.reCharts"
   //          },
   //          {
   //             "path": "/app/charts/react-chartjs2",
   //             "new_item": false,
   //             "menu_title": "sidebar.reactChartjs2"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.icons",
   //       "menu_icon": "zmdi zmdi-star",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/icons/themify-icons",
   //             "new_item": false,
   //             "menu_title": "sidebar.themifyIcons"
   //          },
   //          {
   //             "path": "/app/icons/simple-lineIcons",
   //             "new_item": false,
   //             "menu_title": "sidebar.simpleLineIcons"
   //          },
   //          {
   //             "path": "/app/icons/material-icons",
   //             "new_item": false,
   //             "menu_title": "sidebar.materialIcons"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.tables",
   //       "menu_icon": "zmdi zmdi-grid",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/tables/basic",
   //             "new_item": false,
   //             "menu_title": "sidebar.basic"
   //          },
   //          {
   //             "path": "/app/tables/data-table",
   //             "new_item": false,
   //             "menu_title": "sidebar.dataTable"
   //          },
   //          {
   //             "path": "/app/tables/responsive",
   //             "new_item": false,
   //             "menu_title": "sidebar.responsive"
   //          }
   //       ]
   //    }
   // ],
   // category5: [
   //    {
   //       "menu_title": "sidebar.maps",
   //       "menu_icon": "zmdi zmdi-map",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/maps/google-maps",
   //             "new_item": false,
   //             "menu_title": "sidebar.googleMaps"
   //          },
   //          {
   //             "path": "/app/maps/leaflet-maps",
   //             "new_item": false,
   //             "menu_title": "sidebar.leafletMaps"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.users",
   //       "menu_icon": "zmdi zmdi-accounts",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/users/user-profile-1",
   //             "new_item": false,
   //             "menu_title": "sidebar.userProfile1"
   //          },
   //          {
   //             "path": "/app/users/user-profile",
   //             "new_item": false,
   //             "menu_title": "sidebar.userProfile2"
   //          },
   //          {
   //             "path": "/app/users/user-management",
   //             "new_item": false,
   //             "menu_title": "sidebar.userManagement"
   //          },
   //          {
   //             "path": "/app/users/user-list",
   //             "new_item": false,
   //             "menu_title": "sidebar.userList"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.calendar",
   //       "menu_icon": "zmdi zmdi-calendar-note",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/calendar/basic",
   //             "new_item": false,
   //             "menu_title": "components.basic"
   //          },
   //          {
   //             "path": "/app/calendar/cultures",
   //             "new_item": false,
   //             "menu_title": "sidebar.cultures"
   //          },
   //          {
   //             "path": "/app/calendar/selectable",
   //             "new_item": false,
   //             "menu_title": "sidebar.selectable"
   //          },
   //          {
   //             "path": "/app/calendar/custom-rendering",
   //             "new_item": false,
   //             "menu_title": "sidebar.customRendering"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.editor",
   //       "menu_icon": "zmdi zmdi-edit",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/editor/wysiwyg-editor",
   //             "new_item": false,
   //             "menu_title": "sidebar.wysiwygEditor"
   //          },
   //          {
   //             "path": "/app/editor/quill-editor",
   //             "new_item": false,
   //             "menu_title": "sidebar.quillEditor"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.dragAndDrop",
   //       "menu_icon": "zmdi zmdi-mouse",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/drag-andDrop/react-dragula",
   //             "new_item": false,
   //             "menu_title": "sidebar.reactDragula"
   //          },
   //          {
   //             "path": "/app/drag-andDrop/react-dnd",
   //             "new_item": false,
   //             "menu_title": "sidebar.reactDnd"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.multiLevel",
   //       "menu_icon": "zmdi zmdi-view-web",
   //       "type_multi": true,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "menu_title": "sidebar.level1",
   //             "child_routes": [
   //                {
   //                   "path": "/app/level2",
   //                   "menu_title": "sidebar.level2"
   //                }
   //             ]
   //          }
   //       ]
   //    },
   // ],
   // category6: [
   //    {
   //       "menu_title": "sidebar.imageCropper",
   //       "menu_icon": "zmdi zmdi-crop",
   //       "path": "/app/image-cropper",
   //       "new_item": false,
   //       "child_routes": null
   //
   //    },
   //    {
   //       "menu_title": "sidebar.videoPlayer",
   //       "menu_icon": "zmdi zmdi-collection-video",
   //       "path": "/app/video-player",
   //       "new_item": false,
   //       "child_routes": null
   //    },
   //    {
   //       "menu_title": "sidebar.dropzone",
   //       "menu_icon": "zmdi zmdi-dropbox",
   //       "path": "/app/dropzone",
   //       "new_item": false,
   //       "child_routes": null
   //    }
   // ]
}
