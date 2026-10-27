// src/pages/Product/Features.jsx
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Users,
  UserGroup,
  BarChart3,
  CheckSquare,
  ShieldCheck,
  Bell,
  Workflow,
  Layers,
  Globe,
  ArrowRightToLine,
  CheckCircle2,
  Zap,
} from "lucide-react";
import N from "../../components/parts/Navbar.jsx";
import F from "../../components/parts/Footer.jsx";
import PageHero from "../../components/common/PageHero.jsx";
import CtaBanner from "../../components/common/CtaBanner.jsx";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  viewportOnce,
} from "../../components/common/motionVariants";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("features");

  const coreFeatures = [
    {
      icon: <Users size={24} />,
      title: t("feature1Title"),
      desc: t("feature1Desc"),
    },
    {
      icon: <UserGroup size={24} />,
      title: t("feature2Title"),
      desc: t("feature2Desc"),
    },
    {
      icon: <BarChart3 size={24} />,
      title: t("feature3Title"),
      desc: t("feature3Desc"),
    },
    {
      icon: <CheckSquare size={24} />,
      title: t("feature4Title"),
      desc: t("feature4Desc"),
    },
    {
      icon: <ShieldCheck size={24} />,
      title: t("feature5Title"),
      desc: t("feature5Desc"),
    },
    {
      icon: <Bell size={24} />,
      title: t("feature6Title"),
      desc: t("feature6Desc"),
    },
    {
      icon: <Workflow size={24} />,
      title: t("feature7Title"),
      desc: t("feature7Desc"),
    },
    {
      icon: <Globe size={24} />,
      title: t("feature8Title"),
      desc: t("feature8Desc"),
    },
  ];

  const deepDives = [
    {
      tag: t("deepDive1Tag"),
      pathKey: "pipeline",
      title: t("deepDive1Title"),
      highlight: t("deepDive1Highlight"),
      desc: t("deepDive1Desc"),
      points: [
        t("deepDive1Point1"),
        t("deepDive1Point2"),
        t("deepDive1Point3"),
        t("deepDive1Point4"),
      ],
    },
    {
      tag: t("deepDive2Tag"),
      pathKey: "automation",
      title: t("deepDive2Title"),
      highlight: t("deepDive2Highlight"),
      desc: t("deepDive2Desc"),
      points: [
        t("deepDive2Point1"),
        t("deepDive2Point2"),
        t("deepDive2Point3"),
        t("deepDive2Point4"),
      ],
    },
  ];

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
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-orange-500" /> {t("noCreditCard")}
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-orange-500" /> {t("setupIn5Minutes")}
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-orange-500" /> {t("soc2Ready")}
          </div>
        </div>
      </PageHero>

      {/* CORE FEATURES GRID */}
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
              {t("coreCapabilitiesTag")}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide"
            >
              {t("coreTitle")}{" "}
              <span className="text-orange-500">{t("coreHighlight")}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a] group"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-6">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full border-t border-[#2a2a2a]" />

      {/* DEEP DIVES */}
      {deepDives.map((block, idx) => (
        <section
          key={idx}
          className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20"
        >
          <div
            className={`max-w-6xl mx-auto flex flex-col ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12 lg:gap-16`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-5 w-full lg:w-1/2"
            >
              <motion.div
                variants={idx % 2 === 1 ? fadeInRight : fadeInLeft}
                className="text-orange-500 text-sm font-bold tracking-widest uppercase"
              >
                {block.tag}
              </motion.div>
              <motion.h2
                variants={idx % 2 === 1 ? fadeInRight : fadeInLeft}
                className="text-3xl sm:text-4xl font-bold text-white tracking-wide leading-snug"
              >
                {block.title}{" "}
                <span className="text-orange-500">{block.highlight}</span>
              </motion.h2>
              <motion.p
                variants={idx % 2 === 1 ? fadeInRight : fadeInLeft}
                className="text-gray-400 text-lg leading-8"
              >
                {block.desc}
              </motion.p>

              <motion.ul variants={staggerContainer} className="flex flex-col gap-4 mt-2">
                {block.points.map((point, j) => (
                  <motion.li
                    key={j}
                    variants={idx % 2 === 1 ? fadeInRight : fadeInLeft}
                    className="flex items-center gap-3 text-gray-300 font-medium"
                  >
                    <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                variants={fadeInUp}
                whileHover={{ x: 4 }}
                onClick={() => {
                  navigate(`/features/${block.pathKey}`);
                }}
                className="self-start mt-2 inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer"
              >
                {t("learnMore")} <ArrowRightToLine size={18} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl border border-[#2a2a2a] bg-[#181818]/90 p-8 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-orange-500/15 blur-3xl"
                />
                <div className="relative flex flex-col gap-4">
                  {block.points.map((p, k) => (
                    <div
                      key={k}
                      className="flex items-center justify-between gap-4 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-orange-500/20 flex items-center justify-center text-orange-500">
                          <Layers size={16} />
                        </div>
                        <span className="text-gray-300 text-sm font-medium">
                          {p}
                        </span>
                      </div>
                      <CheckCircle2 size={16} className="text-orange-500" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

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

export default Features;