// src/pages/Company/Partners.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Handshake,
  Code2,
  Megaphone,
  Users,
  TrendingUp,
  Globe,
  CheckCircle2,
  ArrowUpRight,
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

const partnerTypes = [
  {
    icon: <Code2 size={24} />,
    titleKey: "type1Title",
    descKey: "type1Desc",
    pointKeys: ["type1Point1", "type1Point2", "type1Point3"],
  },
  {
    icon: <Users size={24} />,
    titleKey: "type2Title",
    descKey: "type2Desc",
    pointKeys: ["type2Point1", "type2Point2", "type2Point3"],
  },
  {
    icon: <Megaphone size={24} />,
    titleKey: "type3Title",
    descKey: "type3Desc",
    pointKeys: ["type3Point1", "type3Point2", "type3Point3"],
  },
];

const logos = ["Northwind", "Acme Corp", "Globex", "Initech", "Umbrella", "Soylent", "Hooli", "Vandelay"];

const tiers = [
  {
    nameKey: "tier1Name",
    priceKey: "tier1Price",
    descKey: "tier1Desc",
    featureKeys: ["tier1Feature1", "tier1Feature2", "tier1Feature3", "tier1Feature4"],
    highlight: false,
  },
  {
    nameKey: "tier2Name",
    priceKey: "tier2Price",
    descKey: "tier2Desc",
    featureKeys: ["tier2Feature1", "tier2Feature2", "tier2Feature3", "tier2Feature4", "tier2Feature5"],
    highlight: true,
  },
  {
    nameKey: "tier3Name",
    priceKey: "tier3Price",
    descKey: "tier3Desc",
    featureKeys: ["tier3Feature1", "tier3Feature2", "tier3Feature3", "tier3Feature4", "tier3Feature5"],
    highlight: false,
  },
];

const Partners = () => {
  const { t } = useTranslation("partners");

  return (
    <>
      <N />

      <PageHero
        badge={t("pageBadge")}
        title={t("pageTitle")}
        highlight={t("pageHighlight")}
        description={t("pageDescription")}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-gray-400 text-sm font-medium">
          <span className="flex items-center gap-2">
            <Globe size={18} className="text-orange-500" /> {t("statActive")}
          </span>
          <span className="flex items-center gap-2">
            <TrendingUp size={18} className="text-orange-500" /> {t("statCommission")}
          </span>
          <span className="flex items-center gap-2">
            <Handshake size={18} className="text-orange-500" /> {t("statSupport")}
          </span>
        </div>
      </PageHero>

      {/* PARTNER TYPES */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col items-center gap-12"
        >
          <div className="text-center flex flex-col items-center gap-3">
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("programsTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("programsTitle")}{" "}
              <span className="text-orange-500">{t("programsHighlight")}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-5 p-8 rounded-xl bg-[#181818]/90 border border-[#2a2a2a]"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t(type.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-6">
                  {t(type.descKey)}
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {type.pointKeys.map((pk, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-orange-500 mt-0.5 shrink-0"
                      />
                      {t(pk)}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto self-start inline-flex items-center gap-2 text-orange-500 font-semibold text-sm cursor-pointer">
                  {t("applyNow")} <ArrowUpRight size={15} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* LOGOS */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col items-center gap-10"
        >
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-sm font-semibold tracking-widest uppercase text-center"
          >
            {t("trustedBy")}
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center h-20 rounded-xl border border-[#2a2a2a] bg-[#181818]/60 text-gray-500 hover:text-orange-500 font-bold tracking-wide transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* TIERS */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col items-center gap-12"
        >
          <div className="text-center flex flex-col items-center gap-3">
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("tiersTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("tiersTitle")}{" "}
              <span className="text-orange-500">{t("tiersHighlight")}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl">
              {t("tiersDesc")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  tier.highlight
                    ? "bg-linear-to-b from-orange-500/15 to-[#181818] border-orange-500/60 shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                    : "bg-[#181818]/90 border-[#2a2a2a]"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide">
                    {t("recommended")}
                  </div>
                )}

                <h3 className="text-xl font-bold text-white">
                  {t(tier.nameKey)}
                </h3>
                <div className="text-3xl font-bold text-orange-500 mt-3">
                  {t(tier.priceKey)}
                </div>
                <p className="text-gray-400 text-sm mt-2">{t(tier.descKey)}</p>

                <ul className="flex flex-col gap-3 mt-7">
                  {tier.featureKeys.map((fk, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-orange-500 mt-0.5 shrink-0"
                      />
                      {t(fk)}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                    tier.highlight
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {t("applyToJoin")}
                </button>
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

export default Partners;