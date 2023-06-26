import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders a button element", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies the correct className", () => {
    render(<Button className="test">Click me</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("test");
  });

  test("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  test("disables the button when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
