import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { faqs } from "../data/landing-page";
import { App } from "./app";

describe("FIX AI landing page", () => {
  it("displays the hero and every major section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "開発の面倒を、AIエージェントに。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "面倒な工程を、気持ちよく前へ。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "開発の流れに、AIをひとり加えるだけ。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "速さだけじゃない。開発の余白が生まれる。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "チームに合った、ちょうどいい始め方。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "よくある質問" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "AIと一緒に、次の開発を始めよう。",
      }),
    ).toBeInTheDocument();
  });

  it("renders four feature cards and three pricing plans", () => {
    render(<App />);

    expect(screen.getAllByTestId("feature-card")).toHaveLength(4);
    expect(screen.getAllByTestId("pricing-card")).toHaveLength(3);
    expect(screen.getByText("おすすめ")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Pro" }),
    ).toBeInTheDocument();
  });

  it("renders every FAQ question", () => {
    render(<App />);

    for (const faq of faqs) {
      expect(
        screen.getByRole("button", { name: faq.question }),
      ).toBeInTheDocument();
    }
  });

  it("opens and closes an FAQ with pointer interaction and updates ARIA", async () => {
    const user = userEvent.setup();
    render(<App />);

    const question = screen.getByRole("button", {
      name: "どのような開発環境に対応していますか？",
    });

    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/GitHubと連携し、主要なJavaScript/),
    ).toBeVisible();
    expect(question).toHaveAttribute("aria-controls");

    await user.click(question);

    expect(question).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByText(/GitHubと連携し、主要なJavaScript/),
    ).not.toBeInTheDocument();
    await user.click(question);

    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/GitHubと連携し、主要なJavaScript/),
    ).toBeVisible();
  });

  it("supports keyboard control and keeps only one FAQ open", async () => {
    const user = userEvent.setup();
    render(<App />);

    const firstQuestion = screen.getByRole("button", {
      name: "どのような開発環境に対応していますか？",
    });
    const secondQuestion = screen.getByRole("button", {
      name: "自社のコードが学習に使われることはありますか？",
    });

    firstQuestion.focus();
    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Tab}");
    expect(secondQuestion).toHaveFocus();
    await user.keyboard("{Enter}");

    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");

    await user.keyboard(" ");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");
  });
});
