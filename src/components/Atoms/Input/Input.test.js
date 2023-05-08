import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input component", () => {
  test("renders an input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("applies the correct className", () => {
    render(<Input className="test" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("input");
    expect(inputElement).toHaveClass("test");
  });

  test("renders the value prop", () => {
    const handleChange = jest.fn();
    render(<Input value="test value" onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("test value");
  });

  test("renders the placeholder prop", () => {
    render(<Input placeholder="test placeholder" />);
    const inputElement = screen.getByPlaceholderText("test placeholder");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls the onChange function when the input value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "test");
    expect(handleChange).toHaveBeenCalledTimes(4); // One for each letter typed
  });

  test("disables the input when disabled prop is true", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });
});
