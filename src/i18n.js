import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      search_services: "🔍 Search Nearby Services",
      login: "Login",
      register: "Register",
      logout: "Logout",
      booking: "Booking",
      select_service: "Select Service",
      select_location: "Select Location",
      search: "Search",
    },
  },
  ta: {
    translation: {
      search_services: "🔍 அருகிலுள்ள சேவைகளைத் தேடுங்கள்",
      login: "உள்நுழை",
      register: "பதிவு செய்",
      logout: "வெளியேறு",
      booking: "முன்பதிவு",
      select_service: "சேவையைத் தேர்ந்தெடுக்கவும்",
      select_location: "இடத்தைத் தேர்ந்தெடுக்கவும்",
      search: "தேடு",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: { escapeValue: false },
});

export default i18n;
