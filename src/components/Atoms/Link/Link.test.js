import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link component", () => {
  it("renders a normal link without animation", () => {
    render(<Link href="https://example.com">Link Text</Link>);
    const link = screen.getByText("Link Text");
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("normal");
    expect(link).not.toHaveClass("animated");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("renders an animated link", () => {
    render(
      <Link href="https://example.com" animated>
        Link Text
      </Link>
    );
    const link = screen.getByText("Link Text");
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("animated");
    expect(link).not.toHaveClass("normal");
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
