import { motion } from "framer-motion";
import CrempTextLogo from "../../components/CrempTextLogo";
import { footerLinks, socialLinks } from "./data";

export default function Desktop(_props: { hideCTA?: boolean }) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full flex flex-col">
            {

            }

            <div className="w-full bg-white dark:bg-[#17274C] dark:border-white/10 py-4 px-4 flex flex-col items-center">
                <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center">
                            <CrempTextLogo className="h-5 w-auto text-[#0a1128] dark:text-white" />
                        </div>
                        <div className="h-8 w-px bg-gray-300 dark:bg-white/10 hidden md:block" />
                        <span className="text-gray-500 dark:text-gray-500 text-sm">
                            © {currentYear} CREMP. All rights reserved.
                        </span>
                    </div>

                    <nav className="flex items-center gap-8">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-500 dark:text-gray-400 hover:text-[#0a1128] dark:hover:text-white text-sm font-medium transition-colors border-b border-dotted border-gray-400 dark:border-gray-600 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] pb-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <motion.a
                                initial={{ scale: 1, rotate: 0 }} animate={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.3 }}
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className={`w-10 h-10 rounded-[4px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-colors ${social.hoverClass || "hover:border-[#D4AF37]/50 dark:hover:border-[#D4AF37]/50 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-[#D4AF37] dark:hover:text-[#D4AF37]"}`}
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
