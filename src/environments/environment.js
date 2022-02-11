import {configureStore} from "../store";
console.log(configureStore?.getState()?.authUser?.userProfile);
const api =
  configureStore?.getState()?.authUser?.userProfile?.data_mode !== "live"
    ? // configureStore.getState().environment.isTest
      {
        user: "https://staging-server.lagosride.com/user-service",
        wallet: "https://staging-server.lagosride.com/wallet-service",
        referral: "https://staging-server.lagosride.com/referral-service",
        fdt: "https://staging-server.lagosride.com/fdt-service",
        trip: "https://staging-server.lagosride.com/tripreporting-service",
        rating: "https://staging-server.lagosride.com/triprating-service",
        messageWorker: "https://staging-server.lagosride.com/message-service",
        cancellationReasons: "https://staging-server.lagosride.com/trip-cancellation",
        customerCare: "https://staging-server.lagosride.com/setting-service",
        support: "https://staging-server.lagosride.com/support-service",
        sos: "https://staging-server.lagosride.com/sos-service",
        vehicles: "https://staging-server.lagosride.com/vehicle-service",
        area: "https://staging-server.lagosride.com/area-service",
        revenueSplit: "https://staging-server.lagosride.com/revenue-service",
        idVerification: "https://staging-server.lagosride.com/verify-service ",
        messageSending: "https://staging-server.lagosride.com/message-service",
        fees: "https://staging-server.lagosride.com/fees-service",
        socket: "https://staging-server.lagosride.com/admin-socket",
      }
    : {
        bookingTypes: "https://taxitriptypebackend-microservices.api.lagosride.com",
        // classTypes: 'https://134.209.16.20:7090',
        classTypes: "https://taxiclasstypebackend-microservices.api.lagosride.com",
        user: "https://users-service-microservices.api.lagosride.com",
        // user: "https://staging-server.lagosride.com/user-service",

        fees: "https://fees-service-microservices.api.lagosride.com",
        area: "https://area-service-microservices.api.lagosride.com",
        promo: "https://taxipromobackend-microservices.api.lagosride.com",
        vehicles: "https://vehicle-service-microservices.api.lagosride.com",
        admins: "https://taxiadminbackend-microservices.api.lagosride.com",
        ticket: "https://taxiticketbackend-microservices.api.lagosride.com",
        support: "https://support-service-microservices.api.lagosride.com",
        rating: "https://triprating-service-microservices.api.lagosride.com",
        fdt: "https://fdt-service-microservices.api.lagosride.com",
        trip: "https://tripreporting-service-microservices.api.lagosride.com",
        sos: "https://sos-service-microservices.api.lagosride.com",
        // revenueSplit: 'https://taxirevenuesplitbackend-microservices.api.lagosride.com',
        cancellationReasons: "https://tripcancel-reasons-microservices.api.lagosride.com",
        customerCare: "https://settings-service-microservices.api.lagosride.com",
        referral: "https://referral-service-microservices.api.lagosride.com",
        messageWorker: "https://message-service-microservices.api.lagosride.com",
        wallet: "https://wallet-service-microservices.api.lagosride.com",
        contactUs: "https://contact-us-microservices.api.lagosride.com",
        revenueSplit: "https://revenue-service-microservices.api.lagosride.com",
        idVerification: "https://verify-service-microservices.api.lagosride.com",
        messageSending: "https://message-service-microservices.api.lagosride.com",
        socket: "https://staging-server.lagosride.com",
        // socketHttp: "https://staging-server.lagosride.com/admin-socket ",
      };
export default api;
