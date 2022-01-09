import {configureStore} from "../store";


const api = (() =>
  configureStore().getState().environment.isTest
    ? {
        user: "http://staging-server.lagosride.com/user-service",
        wallet: "http://staging-server.lagosride.com/wallet-service",
        referral: "http://staging-server.lagosride.com/referral-service",
        fdt: "http://staging-server.lagosride.com/fdt-service",
        trip: "http://staging-server.lagosride.com/tripreporting-service",
        rating: "http://staging-server.lagosride.com/triprating-service",
        messageWorker: "http://staging-server.lagosride.com/message-service",
        cancellationReasons: "http://staging-server.lagosride.com/trip-cancellation",
        customerCare: "http://staging-server.lagosride.com/setting-service",
        support: "http://staging-server.lagosride.com/support-service",
        sos: "http://staging-server.lagosride.com/sos-service",
        vehicles: "http://staging-server.lagosride.com/vehicle-service",
        area: "http://staging-server.lagosride.com/area-service",
        revenueSplit: "http://staging-server.lagosride.com/revenue-service",
        idVerification: "http://staging-server.lagosride.com/verify-service ",
        messageSending: "http://staging-server.lagosride.com/message-service",
        fees: "http://staging-server.lagosride.com/fees-service",
      }
    : {
        bookingTypes: "https://taxitriptypebackend-microservices.api.lagosride.com",
        // classTypes: 'https://134.209.16.20:7090',
        classTypes: "https://taxiclasstypebackend-microservices.api.lagosride.com",
        user: "https://users-service-microservices.api.lagosride.com",
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
      })();

export default api;
