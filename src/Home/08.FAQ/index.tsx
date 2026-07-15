import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { ChevronDown, Mail, Sparkles } from 'lucide-react'
import { Button } from '../../components/ui'
import { faqs } from './data'

function FAQItem({ faq, isOpen, onToggle, isMobile }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void; isMobile: boolean }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
      >
        <span className={`text-[1.05rem] md:text-[1.2rem] font-bold pr-4 md:pr-8 transition-colors ${
          isOpen ? 'text-[#D7B73F]' : 'text-white group-hover:text-[#D7B73F]'
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen 
            ? 'border-[#D7B73F] bg-[#D7B73F] shadow-[0_0_15px_rgba(215,183,63,0.4)]' 
            : 'border-white/20 bg-[#0B101E] group-hover:border-[#D7B73F]/50 group-hover:bg-[#1A1F2E]'
        }`}>
          <ChevronDown
            size={isMobile ? 18 : 20}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0B101E]' : 'text-white/50 group-hover:text-[#D7B73F]'}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-[0.95rem] md:text-[1.05rem] text-white/60 font-medium leading-relaxed pr-8 md:pr-16">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ({ isMobile }: { isMobile: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const midPoint = Math.ceil(faqs.length / 2)
  const leftFaqs = faqs.slice(0, midPoint)
  const rightFaqs = faqs.slice(midPoint)

  return (
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pt-16 pb-16' : 'pt-24 pb-24'} overflow-hidden relative`}>
      <Container className="relative z-10">
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center rounded-full border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.15)] bg-[#1A1F2E]/80 backdrop-blur-sm overflow-hidden mb-6 self-center px-4 py-1.5">
              <Sparkles size={14} className="text-[#D7B73F] mr-2 animate-pulse" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-bold text-[#D7B73F] tracking-wider uppercase`}>
                SUPPORT & QUESTIONS
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[3rem]'} font-extrabold text-white leading-[1.1] tracking-tight mb-5`}
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] to-[#F9E596] drop-shadow-[0_0_15px_rgba(215,183,63,0.2)]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.1rem]'} text-white/60 font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Everything you need to know about the platform and how it works. Can't find the answer? Contact our support team.
          </motion.p>
        </div>

        {isMobile ? (
          <div className="bg-[#1A1F2E]/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden mb-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="px-6">
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-16 max-w-5xl mx-auto relative z-10 mb-16">
            <div className="w-1/2 flex flex-col">
              {leftFaqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  faq={faq}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  isMobile={isMobile}
                />
              ))}
            </div>
            <div className="w-1/2 flex flex-col">
              {rightFaqs.map((faq, idx) => {
                const actualIdx = idx + midPoint
                return (
                  <FAQItem
                    key={actualIdx}
                    faq={faq}
                    isOpen={openIndex === actualIdx}
                    onToggle={() => setOpenIndex(openIndex === actualIdx ? null : actualIdx)}
                    isMobile={isMobile}
                  />
                )
              })}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className={`bg-[#1A1F2E]/60 backdrop-blur-md border border-white/10 rounded-2xl ${isMobile ? 'p-6 mt-4' : 'p-8'} flex ${isMobile ? 'flex-col gap-5 text-center items-center' : 'items-center justify-between'} max-w-4xl mx-auto shadow-[0_15px_30px_rgba(0,0,0,0.4)]`}
        >
          <div className={`flex ${isMobile ? 'flex-col' : ''} items-center gap-4`}>
            <div className="w-14 h-14 rounded-2xl bg-[#0B101E] border border-[#D7B73F]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(215,183,63,0.15)]">
              <Mail size={24} className="text-[#D7B73F]" />
            </div>
            <div className={isMobile ? 'mt-2' : ''}>
              <h4 className="text-[1.1rem] font-bold text-white mb-1">Still have questions?</h4>
              <p className="text-[0.95rem] text-white/60 font-medium">Our premium support team is here to help you 24/7.</p>
            </div>
          </div>
          <Button
            variant="primary"
            className={`!bg-gradient-to-r !from-[#D7B73F] !to-[#F9E596] hover:!from-[#C79A17] hover:!to-[#D7B73F] !text-[#0B101E] text-[0.95rem] font-bold px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(215,183,63,0.3)] transition-all ${isMobile ? 'w-full mt-2' : ''}`}
          >
            Contact Support
          </Button>
        </motion.div>
      </Container>
    </div>
  )
}
