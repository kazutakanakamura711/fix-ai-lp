import {
  Bot,
  Check,
  Circle,
  Command,
  FileCode2,
  MoreHorizontal,
  RotateCw,
} from "lucide-react";

import { dashboardTasks } from "../../data/landing-page";

export function HeroDashboard() {
  return (
    <div
      className="hero-dashboard"
      role="img"
      aria-label="FIX AIエージェントがCheckout flowの要件整理、タスク分解、実装、テストを進めている管理画面"
    >
      <div className="hero-dashboard__topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>FIX AI / workspace</p>
        <span className="dashboard-online">
          <i aria-hidden="true" />
          Agent online
        </span>
      </div>

      <div className="hero-dashboard__body">
        <aside className="dashboard-sidebar" aria-hidden="true">
          <strong>F</strong>
          <Command />
          <FileCode2 />
          <Circle />
        </aside>

        <div className="dashboard-workspace">
          <p className="dashboard-kicker">ACTIVE MISSION</p>
          <div className="dashboard-heading">
            <h2>Checkout flow を改善</h2>
            <span>72%</span>
          </div>

          <div className="dashboard-tasks">
            {dashboardTasks.map((task) => (
              <div className={`dashboard-task is-${task.tone}`} key={task.title}>
                <span className="dashboard-task__icon" aria-hidden="true">
                  {task.tone === "success" ? (
                    <Check />
                  ) : task.tone === "active" ? (
                    <RotateCw />
                  ) : (
                    <Circle />
                  )}
                </span>
                <strong>{task.title}</strong>
                <span>{task.meta}</span>
              </div>
            ))}
          </div>

          <div className="dashboard-terminal">
            <div>
              <span>PaymentForm.tsx</span>
              <span>● 3 files changed</span>
            </div>
            <code>
              <span>export function PaymentForm() &#123;</span>
              <span>&nbsp; const &#123; submitPayment &#125; = useCheckout();</span>
              <span>&nbsp; return &lt;Form onSubmit=&#123;submitPayment&#125; /&gt;;</span>
              <span>&#125;</span>
            </code>
          </div>
        </div>
      </div>

      <div className="dashboard-agent-chip">
        <span aria-hidden="true">
          <Bot />
        </span>
        <div>
          <strong>FIX Agent</strong>
          <small>実装を進めています...</small>
        </div>
        <MoreHorizontal aria-hidden="true" />
      </div>
      <div className="hero-dashboard__beam" aria-hidden="true" />
    </div>
  );
}
