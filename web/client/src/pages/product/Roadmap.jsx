// src/pages/Product/Roadmap.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Lightbulb, Loader, CheckCircle2, ArrowUpRight } from "lucide-react";
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

const columns = [
  {
    key: "planned",
    labelKey: "colPlannedLabel",
    itemsKey: "colPlannedItems",
    icon: <Lightbulb size={16} />,
    accent: "text-sky-400",
    badge: "bg-sky-500/10 border-sky-500/30 text-sky-400",
  },
  {
    key: "progress",
    labelKey: "colProgressLabel",
    itemsKey: "colProgressItems",
    icon: <Loader size={16} />,
    accent: "text-orange-500",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-500",
  },
  {
    key: "shipped",
    labelKey: "colShippedLabel",
    itemsKey: "colShippedItems",
    icon: <CheckCircle2 size={16} />,
    accent: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
];

const Roadmap = () => {
  const { t } = useTranslation("roadmap");
  const navigate = useNavigate();

  return (
    <>
      <N />

      <PageHero
        badge={t("pageBadge")}
        title={t("pageTitle")}
        highlight={t("pageHighlight")}
        description={t("pageDescription")}
      />

      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {columns.map((col) => {
            const itemsRaw = t(col.itemsKey, { returnObjects: true });
            const items = Array.isArray(itemsRaw) ? itemsRaw : [];
            return (
              <motion.div
                key={col.key}
                variants={staggerItem}
                className="flex flex-col gap-5"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-[#2a2a2a]">
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border ${col.badge}`}
                  >
                    {col.icon}
                  </span>
                  <h2 className="text-xl font-bold text-white tracking-wide">
                    {t(col.labelKey)}
                  </h2>
                  <span className="ml-auto text-xs font-bold text-gray-500 bg-[#181818] border border-[#2a2a2a] px-2.5 py-1 rounded-full">
                    {items.length}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6, borderColor: "#f97316" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex flex-col gap-3 p-5 rounded-xl bg-[#181818]/90 border border-[#2a2a2a] group cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-bold text-white">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          size={16}
                          className="text-gray-600 group-hover:text-orange-500 transition-colors shrink-0 mt-0.5"
                        />
                      </div>
                      <p className="text-gray-400 text-sm leading-6">
                        {item.desc}
                      </p>
                      <span
                        className={`self-start text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${col.badge}`}
                      >
                        {item.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="max-w-6xl mx-auto mt-14 rounded-2xl border border-[#2a2a2a] bg-[#181818]/60 p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white">
            {t("feedbackTitle")}
          </h3>
          <p className="text-gray-400 mt-2">{t("feedbackDesc")}</p>
          <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
            {t("feedbackBtn")}
          </button>
        </motion.div>
      </section>

      <CtaBanner
        tag={t("ctaTag")}
        title={t("ctaTitle")}
        description={t("ctaDesc")}
        primaryLabel={t("ctaPrimary")}
        secondaryLabel={t("ctaSecondary")}
        onSecondary={() => navigate("/changelog")}
      />

      <F />
    </>
  );
};

export default Roadmap;