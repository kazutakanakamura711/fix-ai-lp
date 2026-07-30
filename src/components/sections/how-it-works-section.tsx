import { steps } from "../../data/landing-page";
import { SectionHeading } from "../ui/section-heading";

export function HowItWorksSection() {
  return (
    <section
      className="site-section how-section"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="page-container">
        <SectionHeading
          headingId="how-title"
          eyebrow="HOW IT WORKS"
          title="開発の流れに、AIをひとり加えるだけ。"
        />
        <ol className="steps-list" aria-labelledby="how-title">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li className="step-card" key={step.number}>
                <div className="step-card__number">{step.number}</div>
                <div className="step-card__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 ? (
                  <div className="step-card__line" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
