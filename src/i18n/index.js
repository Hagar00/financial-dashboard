import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dashboard: "Financial Dashboard",
      name: "Name",
      details: "Details",
      showChart: "Show Chart",
    },
  },
  ar: {
    translation: {
      dashboard: "لوحة البيانات المالية",
      name: "الاسم",
      details: "التفاصيل",
      showChart: "عرض الرسم",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
