
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import enHome from "../locales/en/home.json";
import enFeatures from "../locales/en/features.json";
import enPricing from "../locales/en/pricing.json";
import enIntegration from "../locales/en/integrations.json";
import enChangelog from '../locales/en/changelog.json';
import enRoadmap from '../locales/en/roadmap.json';
import enAbout from '../locales/en/about.json';
import enCareers from '../locales/en/careers.json';
import enContact from '../locales/en/contact.json';
import enPartners from '../locales/en/partners.json';
import enBlog from '../locales/en/blog.json';

import esCommon from "../locales/es/common.json";
import esHome from "../locales/es/home.json";
import esFeatures from "../locales/es/features.json";
import esPricing from "../locales/es/pricing.json";
import esIntegration from "../locales/es/integrations.json";
import esChangelog from '../locales/es/changelog.json';
import esRoadmap from '../locales/es/roadmap.json';
import esAbout from '../locales/es/about.json';
import esCareers from '../locales/es/careers.json';
import esContact from '../locales/es/contact.json';
import esPartners from '../locales/es/partners.json';
import esBlog from '../locales/es/blog.json';

import frCommon from "../locales/fr/common.json";
import frHome from "../locales/fr/home.json";
import frFeatures from "../locales/fr/features.json";
import frPricing from "../locales/fr/pricing.json";
import frIntegration from "../locales/fr/integrations.json";
import frChangelog from '../locales/fr/changelog.json';
import frRoadmap from '../locales/fr/roadmap.json';
import frAbout from '../locales/fr/about.json';
import frCareers from '../locales/fr/careers.json';
import frContact from '../locales/fr/contact.json';
import frPartners from '../locales/fr/partners.json';
import frBlog from '../locales/fr/blog.json';

import arCommon from "../locales/ar/common.json";
import arHome from "../locales/ar/home.json";
import arFeatures from "../locales/ar/features.json";
import arPricing from "../locales/ar/pricing.json";
import arIntegration from "../locales/ar/integrations.json";
import arChangelog from '../locales/ar/changelog.json';
import arRoadmap from '../locales/ar/roadmap.json';
import arAbout from '../locales/ar/about.json';
import arCareers from '../locales/ar/careers.json';
import arContact from '../locales/ar/contact.json';
import arPartners from '../locales/ar/partners.json';
import arBlog from '../locales/ar/blog.json';

import zhCommon from "../locales/zh/common.json";
import zhHome from "../locales/zh/home.json";
import zhFeatures from "../locales/zh/features.json";
import zhPricing from "../locales/zh/pricing.json";
import zhIntegration from "../locales/zh/integrations.json";
import zhChangelog from '../locales/zh/changelog.json';
import zhRoadmap from '../locales/zh/roadmap.json';
import zhAbout from '../locales/zh/about.json';
import zhCareers from '../locales/zh/careers.json';
import zhContact from '../locales/zh/contact.json';
import zhPartners from '../locales/zh/partners.json';
import zhBlog from '../locales/zh/blog.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    features: enFeatures,
    pricing: enPricing,
    integration: enIntegration,
    changelog: enChangelog,
    roadmap: enRoadmap,
    about: enAbout,
    careers: enCareers,
    contact: enContact,
    partners: enPartners,
    blog: enBlog,
  },
  es: {
    common: esCommon,
    home: esHome,
    features: esFeatures,
    pricing: esPricing,
    integration: esIntegration,
    changelog: esChangelog,
    roadmap: esRoadmap,
    about: esAbout,
    careers: esCareers,
    contact: esContact,
    partners: esPartners,
    blog: esBlog,
  },
  fr: {
    common: frCommon,
    home: frHome,
    features: frFeatures,
    pricing: frPricing,
    integration: frIntegration,
    changelog: frChangelog,
    roadmap: frRoadmap,
    about: frAbout,
    careers: frCareers,
    contact: frContact,
    partners: frPartners,
    blog: frBlog,
  },
  ar: {
    common: arCommon,
    home: arHome,
    features: arFeatures,
    pricing: arPricing,
    integration: arIntegration,
    changelog: arChangelog,
    roadmap: arRoadmap,
    about: arAbout,
    careers: arCareers,
    contact: arContact,
    partners: arPartners,
    blog: arBlog,
  },
  zh: {
    common: zhCommon,
    home: zhHome,
    features: zhFeatures,
    pricing: zhPricing,
    integration: zhIntegration,
    changelog: zhChangelog,
    roadmap: zhRoadmap,
    about: zhAbout,
    careers: zhCareers,
    contact: zhContact,
    partners: zhPartners,
    blog: zhBlog,
  },
};

const getInitialLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem("apex-lang");

    return resources[savedLanguage] ? savedLanguage : "en";
  } catch {
    return "en";
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: ["en", "es", "fr", "ar", "zh"],
  ns: ["common", "home", "features", "pricing"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  try {
    localStorage.setItem("apex-lang", language);
  } catch {
    // Language switching still works if storage is unavailable.
  }

  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
  document.documentElement.dir =
    i18n.language === "ar" ? "rtl" : "ltr";
}

export default i18n;
