import { render, screen, fireEvent } from "@testing-library/react";
import { Tab } from "./Tab";
import type { BadgeProps } from "../Badge/Badge";
import { vi, describe, test, expect } from "vitest";

// Mock del Badge
vi.mock("../Badge/Badge", () => ({
  Badge: ({ label }: { label: string }) => (
    <span data-testid="badge">{label}</span>
  ),
}));

describe("Tab component", () => {
  const baseTab = {
    id: "tab-1",
    label: "Tab 1",
  };

  test("renders tab label", () => {
    render(
      <Tab tab={baseTab} variant="pill" selected={false} onTabClick={vi.fn()} />
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
  });

  test("calls onTabClick when clicked", () => {
    const onTabClick = vi.fn();

    render(
      <Tab
        tab={baseTab}
        variant="pill"
        selected={false}
        onTabClick={onTabClick}
      />
    );

    fireEvent.click(screen.getByRole("tab"));
    expect(onTabClick).toHaveBeenCalledWith("tab-1");
  });

  test("calls onTabClick when pressing Enter", () => {
    const onTabClick = vi.fn();

    render(
      <Tab
        tab={baseTab}
        variant="pill"
        selected={false}
        onTabClick={onTabClick}
      />
    );

    fireEvent.keyDown(screen.getByRole("tab"), { key: "Enter" });
    expect(onTabClick).toHaveBeenCalledWith("tab-1");
  });

  test("calls onTabClick when pressing Space", () => {
    const onTabClick = vi.fn();

    render(
      <Tab
        tab={baseTab}
        variant="pill"
        selected={false}
        onTabClick={onTabClick}
      />
    );

    fireEvent.keyDown(screen.getByRole("tab"), { key: " " });
    expect(onTabClick).toHaveBeenCalledWith("tab-1");
  });

  test("renders badge when provided", () => {
    const tabWithBadge = {
      ...baseTab,
      badge: { label: "3", variant: "positive" as BadgeProps["variant"] },
    };

    render(
      <Tab
        tab={tabWithBadge}
        variant="pill"
        selected={false}
        onTabClick={vi.fn()}
      />
    );

    expect(screen.getByTestId("badge")).toHaveTextContent("3");
  });

  test("sets aria-selected correctly", () => {
    const { container } = render(
      <Tab tab={baseTab} variant="pill" selected={true} onTabClick={vi.fn()} />
    );

    expect(container.firstChild).toHaveAttribute("aria-selected", "true");
  });

  test("applies variant classes", () => {
    const { rerender, container } = render(
      <Tab tab={baseTab} variant="pill" selected={false} onTabClick={vi.fn()} />
    );

    expect((container.firstChild as HTMLElement).className).toMatch(/pill/);

    rerender(
      <Tab
        tab={baseTab}
        variant="underline"
        selected={false}
        onTabClick={vi.fn()}
      />
    );

    expect((container.firstChild as HTMLElement).className).toMatch(
      /underline/
    );
  });
});
