import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { describe, test, expect, vi } from "vitest";

// Mock del componente Tab
vi.mock("../Tab/Tab", () => ({
  Tab: ({ tab, selected, onTabClick }: any) => (
    <div
      role="tab"
      data-testid={`tab-${tab.id}`}
      aria-selected={selected}
      onClick={() => onTabClick(tab.id)}
    >
      {tab.label}
    </div>
  ),
}));

// Mock del CSS Module di Tabs
vi.mock("./Tabs.module.css", () => ({
  default: {
    tabs: "tabs",
    pill: "pill",
    underline: "underline",
  },
}));

describe("Tabs component", () => {
  const tabs = [
    { id: "t1", label: "Tab 1" },
    { id: "t2", label: "Tab 2" },
  ];

  test("renders all tabs", () => {
    render(<Tabs tabs={tabs} selectedTabId="t1" onChange={vi.fn()} />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  test("sets role='tablist' and aria-label", () => {
    render(
      <Tabs
        tabs={tabs}
        selectedTabId="t1"
        onChange={vi.fn()}
        aria-label="My Tabs"
      />
    );

    const tablist = screen.getByRole("tablist");
    expect(tablist).toHaveAttribute("aria-label", "My Tabs");
  });

  test("marks the selected tab correctly", () => {
    render(<Tabs tabs={tabs} selectedTabId="t2" onChange={vi.fn()} />);

    expect(screen.getByTestId("tab-t1")).toHaveAttribute(
      "aria-selected",
      "false"
    );
    expect(screen.getByTestId("tab-t2")).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("calls onChange when clicking a tab", () => {
    const onChange = vi.fn();

    render(<Tabs tabs={tabs} selectedTabId="t1" onChange={onChange} />);

    fireEvent.click(screen.getByTestId("tab-t2"));
    expect(onChange).toHaveBeenCalledWith("t2");
  });

  test("applies variant classes", () => {
    const { rerender, container } = render(
      <Tabs tabs={tabs} selectedTabId="t1" onChange={vi.fn()} variant="pill" />
    );

    expect((container.firstChild as HTMLElement)?.className).toMatch(/pill/);

    rerender(
      <Tabs
        tabs={tabs}
        selectedTabId="t1"
        onChange={vi.fn()}
        variant="underline"
      />
    );

    expect((container.firstChild as HTMLElement)?.className).toMatch(
      /underline/
    );
  });

  test("supports custom className", () => {
    render(
      <Tabs
        tabs={tabs}
        selectedTabId="t1"
        onChange={vi.fn()}
        className="custom-class"
      />
    );

    expect(screen.getByRole("tablist").classList.contains("custom-class")).toBe(
      true
    );
  });
});
