// src/pages/Company/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Headphones,
  Building2,
  Clock,
} from "lucide-react";
import N from "../../components/parts/Navbar.jsx";
import F from "../../components/parts/Footer.jsx";
import PageHero from "../../components/common/PageHero.jsx";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  viewportOnce,
} from "../../components/common/motionVariants.js";

const contactCards = [
  {
    icon: <Mail size={22} />,
    titleKey: "card1Title",
    lines: ["hello@yourcrm.com", "support@yourcrm.com"],
  },
  {
    icon: <Phone size={22} />,
    titleKey: "card2Title",
    line2Key: "card2Line2",
    lines: ["+1 (555) 123-4567"],
  },
  {
    icon: <MapPin size={22} />,
    titleKey: "card3Title",
    lines: [], // replaced below with translated keys
  },
];

const reasons = [
  { icon: <MessageSquare size={20} />, titleKey: "reason1Title", descKey: "reason1Desc" },
  { icon: <Headphones size={20} />, titleKey: "reason2Title", descKey: "reason2Desc" },
  { icon: <Building2 size={20} />, titleKey: "reason3Title", descKey: "reason3Desc" },
];

const Contact = () => {
  const { t } = useTranslation("contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "general",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  const inputClass =
    "w-full bg-[#0f0f0f] border border-[#2a2a2a] focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors";

  return (
    <>
      <N />

      <PageHero
        badge={t("pageBadge")}
        title={t("pageTitle")}
        highlight={t("pageHighlight")}
        description={t("pageDescription")}
      />

      {/* CONTACT CARDS */}
      <section className="w-full bg-[#0f0f0f] px-6 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {contactCards.map((card, i) => {
            // Build the display lines per card
            let displayLines = card.lines;
            if (card.line2Key) {
              displayLines = [card.lines[0], t(card.line2Key)];
            }
            if (i === 2) {
              displayLines = [t("card3Line1"), t("card3Line2")];
            }
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, borderColor: "#f97316" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-4 p-6 rounded-xl bg-[#181818]/90 border border-[#2a2a2a]"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t(card.titleKey)}
                </h3>
                <div className="flex flex-col gap-1">
                  {displayLines.map((line, j) => (
                    <span
                      key={j}
                      className={
                        j === 0
                          ? "text-gray-300 text-sm font-medium"
                          : "text-gray-500 text-xs"
                      }
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="w-full bg-[#0f0f0f] border-t border-[#2a2a2a] px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3 rounded-2xl border border-[#2a2a2a] bg-[#181818]/90 p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white tracking-wide">
              {t("formTitle")}
            </h2>
            <p className="text-gray-400 text-sm mt-2">{t("formDesc")}</p>

            {sent ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("successTitle")}
                </h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  {t("successDesc")}
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      subject: "general",
                      message: "",
                    });
                  }}
                  className="mt-2 text-orange-500 font-semibold cursor-pointer"
                >
                  {t("sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 text-sm font-medium">
                      {t("labelName")}
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("placeholderName")}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 text-sm font-medium">
                      {t("labelEmail")}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("placeholderEmail")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 text-sm font-medium">
                      {t("labelCompany")}
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={t("placeholderCompany")}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 text-sm font-medium">
                      {t("labelSubject")}
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="general">{t("subjectGeneral")}</option>
                      <option value="support">{t("subjectSupport")}</option>
                      <option value="sales">{t("subjectSales")}</option>
                      <option value="partnership">{t("subjectPartnership")}</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium">
                    {t("labelMessage")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("placeholderMessage")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="self-start inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  <Send size={18} />
                  {loading ? t("sending") : t("sendMessage")}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-lg font-bold text-white mb-4">
                {t("helpTitle")}
              </h3>
              <div className="flex flex-col gap-4">
                {reasons.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#181818]/90 border border-[#2a2a2a]"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                      {r.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {t(r.titleKey)}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {t(r.descKey)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="rounded-xl bg-[#181818]/90 border border-[#2a2a2a] p-6"
            >
              <div className="flex items-center gap-2 text-orange-500 mb-3">
                <Clock size={18} />
                <span className="font-bold text-sm tracking-wide">
                  {t("hoursTitle")}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">{t("hoursMonFri")}</span>
                  <span className="text-gray-300 font-medium">
                    {t("hoursMonFriTime")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t("hoursSat")}</span>
                  <span className="text-gray-300 font-medium">
                    {t("hoursSatTime")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t("hoursSun")}</span>
                  <span className="text-gray-500 font-medium">
                    {t("hoursClosed")}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-6"
            >
              <h4 className="text-white font-bold">{t("urgentTitle")}</h4>
              <p className="text-gray-400 text-sm mt-1.5">
                {t("urgentDesc")}
              </p>
              <button className="mt-4 text-orange-500 font-semibold text-sm cursor-pointer">
                {t("urgentBtn")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <F />
    </>
  );
};

export default Contact;