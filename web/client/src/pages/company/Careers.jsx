// src/pages/Company/Careers.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowUpRight,
  Heart,
  Globe,
  GraduationCap,
  Coffee,
  Wallet,
  Laptop,
} from "lucide-react";
import N from "../../components/parts/Navbar.jsx";
import F from "../../components/parts/Footer.jsx";
import PageHero from "../../components/common/PageHero.jsx";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  viewportOnce,
} from "../../components/common/motionVariants";

const perks = [
  { icon: <Globe size={22} />, titleKey: "perk1Title", descKey: "perk1Desc" },
  { icon: <Wallet size={22} />, titleKey: "perk2Title", descKey: "perk2Desc" },
  { icon: <Heart size={22} />, titleKey: "perk3Title", descKey: "perk3Desc" },
  { icon: <GraduationCap size={22} />, titleKey: "perk4Title", descKey: "perk4Desc" },
  { icon: <Laptop size={22} />, titleKey: "perk5Title", descKey: "perk5Desc" },
  { icon: <Coffee size={22} />, titleKey: "perk6Title", descKey: "perk6Desc" },
];

const departments = [
  { id: "All", labelKey: "deptAll" },
  { id: "Engineering", labelKey: "deptEngineering" },
  { id: "Design", labelKey: "deptDesign" },
  { id: "Sales", labelKey: "deptSales" },
  { id: "Marketing", labelKey: "deptMarketing" },
  { id: "Support", labelKey: "deptSupport" },
];

const deptLabelMap = {
  Engineering: "deptEngineering",
  Design: "deptDesign",
  Sales: "deptSales",
  Marketing: "deptMarketing",
  Support: "deptSupport",
};

const jobs = [
  { titleKey: "job1Title", dept: "Engineering", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job2Title", dept: "Engineering", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job3Title", dept: "Engineering", locationKey: "locDubai", typeKey: "typeFullTime" },
  { titleKey: "job4Title", dept: "Design", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job5Title", dept: "Design", locationKey: "locRemote", typeKey: "typeContract" },
  { titleKey: "job6Title", dept: "Sales", locationKey: "locLondon", typeKey: "typeFullTime" },
  { titleKey: "job7Title", dept: "Sales", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job8Title", dept: "Marketing", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job9Title", dept: "Marketing", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job10Title", dept: "Support", locationKey: "locRemote", typeKey: "typeFullTime" },
  { titleKey: "job11Title", dept: "Support", locationKey: "locRemote", typeKey: "typePartTime" },
];

const Careers = () => {
  const { t } = useTranslation("careers");
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? jobs : jobs.filter((j) => j.dept === active)),
    [active]
  );

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
            <Globe size={18} className="text-orange-500" /> {t("statRemote")}
          </span>
          <span className="flex items-center gap-2">
            <Briefcase size={18} className="text-orange-500" />{" "}
            {t("statOpenRoles", { count: jobs.length })}
          </span>
          <span className="flex items-center gap-2">
            <Heart size={18} className="text-orange-500" /> {t("statBenefits")}
          </span>
        </div>
      </PageHero>

      {/* PERKS */}
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
              {t("perksTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("perksTitle")}{" "}
              <span className="text-orange-500">{t("perksHighlight")}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a]"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t(perk.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    {t(perk.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* OPEN ROLES */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col gap-10"
        >
          <div className="text-center flex flex-col items-center gap-3">
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("openPositionsTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("openPositionsTitle")}{" "}
              <span className="text-orange-500">{t("openPositionsHighlight")}</span>
            </motion.h2>
          </div>

          {/* FILTER */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActive(dept.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
                  active === dept.id
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-[#181818] border-[#2a2a2a] text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {t(dept.labelKey)}
              </button>
            ))}
          </motion.div>

          {/* LIST */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {filtered.map((job, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ x: 6, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a] group cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                    {t(job.titleKey)}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-orange-500" />
                      {t(deptLabelMap[job.dept])}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-orange-500" />
                      {t(job.locationKey)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-orange-500" />
                      {t(job.typeKey)}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm shrink-0">
                  {t("applyNow")} <ArrowUpRight size={16} />
                </span>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-12">
                {t("noOpenings")}
              </p>
            )}
          </motion.div>
        </motion.div>
      </section>

      <F />
    </>
  );
};

export default Careers;