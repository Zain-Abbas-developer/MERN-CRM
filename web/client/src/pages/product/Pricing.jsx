// src/pages/Product/Pricing.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  Star,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
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

const plans = [
  {
    nameKey: "plan1Name",
    taglineKey: "plan1Tagline",
    monthly: 19,
    yearly: 15,
    highlight: false,
    ctaKey: "plan1Cta",
    featuresKey: "plan1Features",
  },
  {
    nameKey: "plan2Name",
    taglineKey: "plan2Tagline",
    monthly: 49,
    yearly: 39,
    highlight: true,
    ctaKey: "plan2Cta",
    featuresKey: "plan2Features",
  },
  {
    nameKey: "plan3Name",
    taglineKey: "plan3Tagline",
    monthly: 99,
    yearly: 79,
    highlight: false,
    ctaKey: "plan3Cta",
    featuresKey: "plan3Features",
  },
];

const comparison = [
  { labelKey: "compUsers", starterKey: "valUsersStarter", proKey: "valUsersPro", entKey: "unlimited" },
  { labelKey: "compContacts", starterKey: "valContactsStarter", proKey: "valContactsPro", entKey: "unlimited" },
  { labelKey: "compPipelines", starterKey: "valPipelinesStarter", proKey: "unlimited", entKey: "unlimited" },
  { labelKey: "compAutomation", starter: false, pro: true, ent: true },
  { labelKey: "compAnalytics", starter: false, pro: true, ent: true },
  { labelKey: "compPermissions", starter: false, pro: true, ent: true },
  { labelKey: "compSso", starter: false, pro: false, ent: true },
  { labelKey: "compApi", starter: false, pro: true, ent: true },
  { labelKey: "compManager", starter: false, pro: false, ent: true },
];

const faqs = [
  { qKey: "faq1Q", aKey: "faq1A" },
  { qKey: "faq2Q", aKey: "faq2A" },
  { qKey: "faq3Q", aKey: "faq3A" },
  { qKey: "faq4Q", aKey: "faq4A" },
];

const Cell = ({ value }) => {
  if (value === true)
    return <Check size={18} className="text-orange-500 mx-auto" />;
  if (value === false)
    return <Minus size={18} className="text-gray-600 mx-auto" />;
  return <span className="text-gray-300 text-sm font-medium">{value}</span>;
};

const Pricing = () => {
  const { t } = useTranslation("pricing");
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const resolveRow = (row) => ({
    label: t(row.labelKey),
    starter: row.starter !== undefined ? row.starter : t(row.starterKey),
    pro: row.pro !== undefined ? row.pro : t(row.proKey),
    ent: row.ent !== undefined ? row.ent : t(row.entKey),
  });

  return (
    <>
      <N />

      <PageHero
        badge={t("pageBadge")}
        title={t("pageTitle")}
        highlight={t("pageHighlight")}
        description={t("pageDescription")}
      >
        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <span
            className={`text-sm font-semibold ${
              !yearly ? "text-white" : "text-gray-500"
            }`}
          >
            {t("monthly")}
          </span>
          <button
            onClick={() => setYearly((v) => !v)}
            className="relative w-14 h-7 rounded-full bg-[#2a2a2a] border border-[#3a3a3a] cursor-pointer"
            aria-label="Toggle billing period"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-orange-500 ${
                yearly ? "right-0.5" : "left-0.5"
              }`}
            />
          </button>
          <span
            className={`text-sm font-semibold ${
              yearly ? "text-white" : "text-gray-500"
            }`}
          >
            {t("yearly")}
          </span>
          <span className="text-xs font-bold text-orange-500 bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 rounded-full">
            {t("saveBadge")}
          </span>
        </div>
      </PageHero>

      {/* PLANS */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, i) => {
            const features = t(plan.featuresKey, { returnObjects: true });
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  plan.highlight
                    ? "bg-linear-to-b from-orange-500/15 to-[#181818] border-orange-500/60 shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                    : "bg-[#181818]/90 border-[#2a2a2a]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide">
                    <Star size={12} fill="currentColor" /> {t("mostPopular")}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white">
                  {t(plan.nameKey)}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {t(plan.taglineKey)}
                </p>

                <div className="flex items-end gap-1.5 mt-6">
                  <span className="text-4xl font-bold text-white">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-gray-500 text-sm mb-1.5">
                    {t("perUserMo")}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  {yearly ? t("billedAnnually") : t("billedMonthly")}
                </p>

                <button
                  className={`mt-6 w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                    plan.highlight
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {t(plan.ctaKey)}
                </button>

                <ul className="flex flex-col gap-3 mt-8">
                  {features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <Check
                        size={16}
                        className="text-orange-500 mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-orange-500" /> {t("trialBadge")}
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-orange-500" /> {t("cancelBadge")}
          </div>
          <div className="flex items-center gap-2">
            <Check size={18} className="text-orange-500" /> {t("noSetupBadge")}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="w-full bg-[#0f0f0f] border-y border-[#2a2a2a] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center gap-10"
        >
          <div className="text-center flex flex-col items-center gap-3">
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("compareTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("compareTitle")}{" "}
              <span className="text-orange-500">{t("compareHighlight")}</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeInUp}
            className="w-full overflow-x-auto rounded-2xl border border-[#2a2a2a] bg-[#181818]/60"
          >
            <table className="w-full min-w-160 border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left text-gray-400 text-sm font-semibold px-6 py-4">
                    {t("featureCol")}
                  </th>
                  <th className="text-center text-gray-300 text-sm font-bold px-6 py-4">
                    {t("starterCol")}
                  </th>
                  <th className="text-center text-orange-500 text-sm font-bold px-6 py-4">
                    {t("proCol")}
                  </th>
                  <th className="text-center text-gray-300 text-sm font-bold px-6 py-4">
                    {t("entCol")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => {
                  const r = resolveRow(row);
                  return (
                    <tr
                      key={i}
                      className="border-b border-[#2a2a2a] last:border-0 hover:bg-[#1f1f1f]/50 transition-colors"
                    >
                      <td className="text-left text-gray-300 text-sm font-medium px-6 py-4">
                        {r.label}
                      </td>
                      <td className="text-center px-6 py-4">
                        <Cell value={r.starter} />
                      </td>
                      <td className="text-center px-6 py-4 bg-orange-500/5">
                        <Cell value={r.pro} />
                      </td>
                      <td className="text-center px-6 py-4">
                        <Cell value={r.ent} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-3xl mx-auto flex flex-col items-center gap-10"
        >
          <div className="text-center flex flex-col items-center gap-3">
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("faqTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("faqTitle")}{" "}
              <span className="text-orange-500">{t("faqHighlight")}</span>
            </motion.h2>
          </div>

          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="rounded-xl border border-[#2a2a2a] bg-[#181818]/90 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-white font-semibold">
                    <HelpCircle size={18} className="text-orange-500 shrink-0" />
                    {t(faq.qKey)}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-orange-500 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pl-15 text-gray-400 text-sm leading-6">
                        {t(faq.aKey)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <CtaBanner
        tag={t("ctaTag")}
        title={t("ctaTitle")}
        description={t("ctaDesc")}
        primaryLabel={t("ctaPrimary")}
        secondaryLabel={t("ctaSecondary")}
      />

      <F />
    </>
  );
};

export default Pricing;