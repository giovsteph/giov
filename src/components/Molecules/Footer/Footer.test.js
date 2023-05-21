import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders mobile view when window width is less than or equal to 768", () => {
    // Mock the window.innerWidth property
    global.innerWidth = 768;

    render(<Footer />);

    // Assert that the mobile view content is rendered
    expect(screen.getByTestId("github-link")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-link")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-link")).toBeInTheDocument();
    expect(screen.getByTestId("mail-link")).toBeInTheDocument();
  });

  it("renders desktop view when window width is greater than 768", () => {
    // Mock the window.innerWidth property
    global.innerWidth = 1024;

    render(<Footer />);

    // Assert that the desktop view content is rendered
    expect(screen.queryByTestId("github-link")).not.toBeInTheDocument();
    expect(screen.queryByTestId("instagram-link")).not.toBeInTheDocument();
    expect(screen.queryByTestId("linkedin-link")).not.toBeInTheDocument();
    expect(screen.queryByTestId("mail-link")).not.toBeInTheDocument();
  });
});
