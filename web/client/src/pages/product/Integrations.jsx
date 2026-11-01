// src/pages/Product/Integrations.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Plug, ArrowUpRight, CheckCircle2, X } from "lucide-react";
import N from "../../components/parts/Navbar.jsx";
import F from "../../components/parts/Footer.jsx";
import PageHero from "../../components/common/PageHero.jsx";
import CtaBanner from "../../components/common/CtaBanner.jsx";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  viewportOnce,
} from "../../components/common/motionVariants";

const categories = [
  { id: "All", labelKey: "catAll" },
  { id: "Communication", labelKey: "catCommunication" },
  { id: "Marketing", labelKey: "catMarketing" },
  { id: "Payments", labelKey: "catPayments" },
  { id: "Productivity", labelKey: "catProductivity" },
  { id: "Developer", labelKey: "catDeveloper" },
];

const categoryLabelMap = {
  Communication: "catCommunication",
  Marketing: "catMarketing",
  Payments: "catPayments",
  Productivity: "catProductivity",
  Developer: "catDeveloper",
};

const integrations = [
  {
    name: "Slack",
    category: "Communication",
    descKey: "intSlackDesc",
    initials: "SL",
    color: "#4A154B",
  },
  {
    name: "Gmail",
    category: "Communication",
    descKey: "intGmailDesc",
    initials: "GM",
    color: "#EA4335",
  },
  {
    name: "Zoom",
    category: "Communication",
    descKey: "intZoomDesc",
    initials: "ZM",
    color: "#2D8CFF",
  },
  {
    name: "Mailchimp",
    category: "Marketing",
    descKey: "intMailchimpDesc",
    initials: "MC",
    color: "#FFE01B",
  },
  {
    name: "HubSpot Forms",
    category: "Marketing",
    descKey: "intHubspotDesc",
    initials: "HS",
    color: "#FF7A59",
  },
  {
    name: "Meta Ads",
    category: "Marketing",
    descKey: "intMetaDesc",
    initials: "MA",
    color: "#0866FF",
  },
  {
    name: "Stripe",
    category: "Payments",
    descKey: "intStripeDesc",
    initials: "ST",
    color: "#635BFF",
  },
  {
    name: "PayPal",
    category: "Payments",
    descKey: "intPaypalDesc",
    initials: "PP",
    color: "#003087",
  },
  {
    name: "Notion",
    category: "Productivity",
    descKey: "intNotionDesc",
    initials: "NO",
    color: "#111111",
  },
  {
    name: "Google Calendar",
    category: "Productivity",
    descKey: "intGcalDesc",
    initials: "GC",
    color: "#4285F4",
  },
  {
    name: "Zapier",
    category: "Developer",
    descKey: "intZapierDesc",
    initials: "ZP",
    color: "#FF4F00",
  },
  {
    name: "REST API",
    category: "Developer",
    descKey: "intApiDesc",
    initials: "API",
    color: "#f97316",
  },
];

const Integrations = () => {
  const { t } = useTranslation("integration");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return integrations.filter((item) => {
      const matchCat = active === "All" || item.category === active;
      const matchQuery =
        item.name.toLowerCase().includes(q) ||
        t(item.descKey).toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, active, t]);

  return (
    <>
      <N />

      <PageHero
        badge={t("pageBadge")}
        title={t("pageTitle")}
        highlight={t("pageHighlight")}
        description={t("pageDescription")}
      >
        {/* SEARCH */}
        <div className="relative max-w-xl mx-auto mt-6">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-orange-500 rounded-lg pl-11 pr-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition-colors"
          />
        </div>
      </PageHero>

      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* FILTERS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeInUp}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
                  active === cat.id
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-[#181818] border-[#2a2a2a] text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {t(cat.labelKey)}
              </motion.button>
            ))}
          </motion.div>

          {/* GRID */}
          {filtered.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={staggerItem}
                  whileHover={{ y: -8, borderColor: "#f97316" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a] group"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm border border-[#2a2a2a]"
                      style={{
                        backgroundColor: `${item.color}22`,
                        color: "#f97316",
                      }}
                    >
                      {item.initials}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 bg-[#0f0f0f] border border-[#2a2a2a] px-2.5 py-1 rounded-full">
                      {t(categoryLabelMap[item.category])}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-6 flex-1">
                    {t(item.descKey)}
                  </p>

                  <button
                    onClick={() => setSelectedIntegration(item)}
                    className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all cursor-pointer"
                  >
                    {t("connect")} <ArrowUpRight size={15} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <Plug size={40} className="text-gray-700 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">{t("noResults")}</p>
            </div>
          )}

          {/* API STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-2xl border border-orange-500/30 bg-linear-to-r from-orange-500/15 to-transparent p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {t("apiTitle")}
              </h3>
              <p className="text-gray-400 mt-2">{t("apiDesc")}</p>
              <div className="flex flex-wrap gap-5 mt-4 text-gray-400 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-orange-500" />{" "}
                  {t("apiBadge1")}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-orange-500" />{" "}
                  {t("apiBadge2")}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-orange-500" />{" "}
                  {t("apiBadge3")}
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate("/integrations/api-docs")}
              className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              {t("apiBtn")}
            </button>
          </motion.div>
        </div>
      </section>

      <CtaBanner
        tag={t("ctaTag")}
        title={t("ctaTitle")}
        description={t("ctaDesc")}
        primaryLabel={t("ctaPrimary")}
        secondaryLabel={t("ctaSecondary")}
      />

      {/* modal for connection app */}

      {selectedIntegration && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedIntegration(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="integration-modal-title"
            className="w-full max-w-md rounded-2xl border border-[#2a2a2a] bg-[#181818] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-500">
                  {t("modalSetupLabel")}
                </p>
                <h2
                  id="integration-modal-title"
                  className="mt-1 text-2xl font-bold text-white"
                >
                  {selectedIntegration.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIntegration(null)}
                aria-label={t("modalCloseAria")}
                className="rounded-lg p-2 text-gray-400 hover:bg-[#252525] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-400">
              {t(selectedIntegration.descKey)}
            </p>

            <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
              <p className="font-semibold text-white">{t("modalReadyTitle")}</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {t("modalReadyBody", { name: selectedIntegration.name })}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIntegration(null)}
              className="mt-6 w-full rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              {t("modalCloseBtn")}
            </button>
          </div>
        </div>
      )}

      <F />
    </>
  );
};

export default Integrations;