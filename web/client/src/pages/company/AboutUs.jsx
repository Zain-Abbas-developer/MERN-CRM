// src/pages/Company/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Target,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  Globe,
  Rocket,
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

const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 2019, suffixKey: null, labelKey: "stat1Label", isYear: true },
  { value: 12000, suffixKey: "stat2Suffix", labelKey: "stat2Label" },
  { value: 48, suffixKey: "stat3Suffix", labelKey: "stat3Label" },
  { value: 94, suffixKey: "stat4Suffix", labelKey: "stat4Label" },
];

const values = [
  { icon: <Target size={22} />, titleKey: "value1Title", descKey: "value1Desc" },
  { icon: <Lightbulb size={22} />, titleKey: "value2Title", descKey: "value2Desc" },
  { icon: <Heart size={22} />, titleKey: "value3Title", descKey: "value3Desc" },
  { icon: <ShieldCheck size={22} />, titleKey: "value4Title", descKey: "value4Desc" },
];

const milestones = [
  { year: "2019", titleKey: "mile1Title", descKey: "mile1Desc" },
  { year: "2021", titleKey: "mile2Title", descKey: "mile2Desc" },
  { year: "2023", titleKey: "mile3Title", descKey: "mile3Desc" },
  { year: "2025", titleKey: "mile4Title", descKey: "mile4Desc" },
];

const team = [
  { name: "Ahmed Raza", roleKey: "role1", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sara Malik", roleKey: "role2", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Bilal Khan", roleKey: "role3", img: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Hina Sheikh", roleKey: "role4", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const About = () => {
  const { t } = useTranslation("about");
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

      {/* STORY */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-5"
          >
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("storyTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide leading-snug"
            >
              {t("storyTitle")}{" "}
              <span className="text-orange-500">{t("storyHighlight")}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 leading-8">
              {t("storyP1")}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 leading-8">
              {t("storyP2")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-5 mt-2 text-gray-300 text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <Users size={18} className="text-orange-500" /> {t("storyBadge1")}
              </span>
              <span className="flex items-center gap-2">
                <Globe size={18} className="text-orange-500" /> {t("storyBadge2")}
              </span>
              <span className="flex items-center gap-2">
                <Rocket size={18} className="text-orange-500" /> {t("storyBadge3")}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 p-8 rounded-2xl border border-[#2a2a2a] bg-[#181818]/90"
              >
                <div className="text-3xl font-bold text-orange-500">
                  <CountUp
                    to={s.value}
                    suffix={s.suffixKey ? t(s.suffixKey) : ""}
                  />
                </div>
                <div className="text-gray-400 text-sm font-medium text-center">
                  {t(s.labelKey)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* VALUES */}
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
              {t("valuesTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("valuesTitle")}{" "}
              <span className="text-orange-500">{t("valuesHighlight")}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a]"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t(v.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-6">
                  {t(v.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* TIMELINE */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col gap-12"
        >
          <div className="text-center flex flex-col items-center gap-3">
            <motion.div
              variants={fadeInUp}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              {t("milestonesTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("milestonesTitle")}{" "}
              <span className="text-orange-500">{t("milestonesHighlight")}</span>
            </motion.h2>
          </div>

          <div className="relative pl-8 border-l border-[#2a2a2a] flex flex-col gap-10">
            {milestones.map((m, i) => (
              <motion.div key={i} variants={staggerItem} className="relative">
                <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#0f0f0f]" />
                <div className="text-orange-500 font-bold text-sm tracking-widest">
                  {m.year}
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  {t(m.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm mt-1 leading-6">
                  {t(m.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* TEAM */}
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
              {t("teamTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("teamTitle")}{" "}
              <span className="text-orange-500">{t("teamHighlight")}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {team.map((person, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a] text-center"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-orange-500/40"
                />
                <div>
                  <div className="text-white font-bold">{person.name}</div>
                  <div className="text-gray-500 text-xs mt-1">
                    {t(person.roleKey)}
                  </div>
                </div>
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
        onPrimary={() => navigate("/careers")}
        onSecondary={() => navigate("/contact")}
        secondaryLabel={t("ctaSecondary")}
      />

      <F />
    </>
  );
};

export default About;