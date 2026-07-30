import { ArrowRight, Bot } from "lucide-react";

import { faqs } from "../../data/landing-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FaqSection() {
  return (
    <section
      className="site-section faq-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="page-container faq-section__inner">
        <div className="faq-section__copy">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">よくある質問</h2>
          <p>導入前の疑問にお答えします。</p>
          <div className="faq-support">
            <span aria-hidden="true">
              <Bot />
            </span>
            <div>
              <strong>まだ気になることがありますか？</strong>
              <p>
                サポートに相談する <ArrowRight aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
        <Accordion
          className="faq-list"
          type="single"
          collapsible
          defaultValue="faq-1"
          aria-label="よくある質問"
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={`faq-${index + 1}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
