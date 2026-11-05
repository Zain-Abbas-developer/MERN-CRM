// src/pages/Product/Changelog.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Rocket, Wrench, Bug, ChevronDown } from "lucide-react";
import N from "../../components/parts/Navbar.jsx";
import F from "../../components/parts/Footer.jsx";
import PageHero from "../../components/common/PageHero.jsx";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../components/common/motionVariants";

const typeMeta = {
  new: {
    labelKey: "typeNew",
    icon: <Rocket size={14} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  improved: {
    labelKey: "typeImproved",
    icon: <Wrench size={14} />,
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/30",
  },
  fixed: {
    labelKey: "typeFixed",
    icon: <Bug size={14} />,
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/30",
  },
};

const releases = [
  { versionKey: "rel1Version", dateKey: "rel1Date", titleKey: "rel1Title", summaryKey: "rel1Summary", changesKey: "rel1Changes" },
  { versionKey: "rel2Version", dateKey: "rel2Date", titleKey: "rel2Title", summaryKey: "rel2Summary", changesKey: "rel2Changes" },
  { versionKey: "rel3Version", dateKey: "rel3Date", titleKey: "rel3Title", summaryKey: "rel3Summary", changesKey: "rel3Changes" },
  { versionKey: "rel4Version", dateKey: "rel4Date", titleKey: "rel4Title", summaryKey: "rel4Summary", changesKey: "rel4Changes" },
];

const ChangeRow = ({ change }) => {
  const { t } = useTranslation("changelog");
  const meta = typeMeta[change.type];
  return (
    <li className="flex items-start gap-3 text-gray-300 text-sm leading-6">
      <span
        className={`inline-flex items-center gap-1.5 shrink-0 mt-0.5 px-2 py-0.5 rounded-full border text-[11px] font-bold uppercase tracking-wide ${meta.bg} ${meta.color}`}
      >
        {meta.icon}
        {t(meta.labelKey)}
      </span>
      <span>{change.text}</span>
    </li>
  );
};

const Changelog = () => {
  const { t } = useTranslation("changelog");
  const [open, setOpen] = useState(0);

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
          className="max-w-4xl mx-auto flex flex-col gap-6"
        >
          {releases.map((release, i) => {
            const isOpen = open === i;
            const changesRaw = t(release.changesKey, { returnObjects: true });
            const changes = Array.isArray(changesRaw) ? changesRaw : [];
            return (
              <motion.div
                key={release.versionKey}
                variants={staggerItem}
                className="relative rounded-2xl border border-[#2a2a2a] bg-[#181818]/90 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 sm:p-7 text-left cursor-pointer"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-500 text-sm font-bold tracking-wide">
                        {t(release.versionKey)}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">
                        {t(release.dateKey)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {t(release.titleKey)}
                    </h3>
                    <p className="text-gray-400 text-sm leading-6">
                      {t(release.summaryKey)}
                    </p>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 mt-1 text-orange-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-[#2a2a2a] px-6 sm:px-7 py-6"
                  >
                    <ul className="flex flex-col gap-3">
                      {changes.map((c, j) => (
                        <ChangeRow key={j} change={c} />
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <F />
    </>
  );
};

export default Changelog;