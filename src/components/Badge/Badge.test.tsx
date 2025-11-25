import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

jest.mock("./Badge.module.css", () => ({
  badge: "badge",
  neutral: "neutral",
  positive: "positive",
  negative: "negative",
}));

describe("Badge component", () => {
  test("renders the label", () => {
    render(<Badge label="Hello" variant="neutral" />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("applies the base badge class", () => {
    const { container } = render(<Badge label="Test" variant="neutral" />);

    const element = container.firstElementChild as HTMLElement;

    expect(element.classList.contains("badge")).toBe(true);
  });

  test("applies neutral class when variant is 'neutral'", () => {
    const { container } = render(<Badge label="Test" variant="neutral" />);

    const element = container.firstElementChild as HTMLElement;

    expect(element.classList.contains("neutral")).toBe(true);
  });

  test("applies positive class when variant is 'positive'", () => {
    const { container } = render(<Badge label="Test" variant="positive" />);

    const element = container.firstElementChild as HTMLElement;

    expect(element.classList.contains("positive")).toBe(true);
  });

  test("applies negative class when variant is 'negative'", () => {
    const { container } = render(<Badge label="Test" variant="negative" />);

    const element = container.firstElementChild as HTMLElement;

    expect(element.classList.contains("negative")).toBe(true);
  });
});
