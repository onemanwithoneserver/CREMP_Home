import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { ChevronDown, Mail } from 'lucide-react'
import { Button } from '../../components/ui'
import { faqs } from './data'

function FAQItem({ faq, isOpen, onToggle, isMobile }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void; isMobile: boolean }) {
  return (
    <div className="border-b border-[#E2E6EE] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className={`text-[0.95rem] md:text-[1.1rem] font-bold pr-4 md:pr-8 transition-colors ${
          isOpen ? 'text-[#C79A17]' : 'text-[#2A3A69] group-hover:text-[#C79A17]'
        }`}>
          {faq.question}
        </span>
        <div className={`w-7 md:w-8 h-7 md:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
          isOpen ? 'border-[#C79A17] bg-[rgba(199, 154, 23, 0.05)]' : 'border-[#E2E6EE] bg-white group-hover:border-[#C79A17]'
        }`}>
          <ChevronDown
            size={isMobile ? 16 : 18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C79A17]' : 'text-[#6B7491]'}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-[0.85rem] md:text-[1rem] text-[#3A4566] font-medium leading-relaxed pr-8 md:pr-12">
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
    <div className={`w-full bg-[#ffffff] ${isMobile ? 'pt-10 pb-10' : 'pt-10 pb-10'} overflow-hidden border-t border-[#E2E6EE]`}>
      <Container>
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className={`inline-block px-3 md:px-4 py-1.5 rounded-full bg-[rgba(199, 154, 23, 0.05)] text-[#C79A17] ${isMobile ? 'text-[0.6rem]' : 'text-[0.65rem]'} font-bold tracking-widest uppercase mb-4 border border-[rgba(199, 154, 23, 0.15)]`}>
              SUPPORT & QUESTIONS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-extrabold text-[#2A3A69] leading-[1.1] tracking-tight mb-4 md:mb-5`}
          >
            Frequently Asked <span className="text-[#C79A17]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.05rem]'} text-[#3A4566] font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Everything you need to know about the product and how it works. Can't find the answer? Contact our support team.
          </motion.p>
        </div>

        {isMobile ? (
          <div className="bg-white border border-[#E2E6EE] rounded-sm shadow-sm overflow-hidden">
            {faqs.map((faq, idx) => (
              <div key={idx} className="px-5">
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
          <div className="flex gap-12 max-w-5xl mx-auto relative z-10">
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${isMobile ? 'mt-8' : 'mt-16'} bg-[#F5F7FA] border border-[#E2E6EE] rounded-sm ${isMobile ? 'p-6' : 'p-8'} flex ${isMobile ? 'flex-col gap-4' : 'items-center justify-between'} max-w-5xl mx-auto`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[rgba(199, 154, 23, 0.05)] border border-[rgba(199, 154, 23, 0.15)] flex items-center justify-center shrink-0">
              <Mail size={18} className="text-[#C79A17]" />
            </div>
            <div>
              <h4 className="text-[0.95rem] font-bold text-[#2A3A69]">Still have questions?</h4>
              <p className="text-[0.8rem] text-[#3A4566] font-medium">Our team is here to help you 24/7.</p>
            </div>
          </div>
          <Button
            variant="primary"
            className={`!bg-[#2A3A69] hover:!bg-[#1F2A4A] !text-white text-[0.85rem] font-bold px-6 py-2.5 rounded-sm ${isMobile ? 'w-full' : ''}`}
          >
            Contact Support
          </Button>
        </motion.div>
      </Container>
    </div>
  )
}
