import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

test("renders Sidebar component", () => {
  render(<Sidebar />);

  // Verify that the GitHub icon is rendered
  const githubLink = screen.getByTestId("github-link");
  expect(githubLink).toBeInTheDocument();

  // Verify that the Instagram icon is rendered
  const instagramLink = screen.getByTestId("instagram-link");
  expect(instagramLink).toBeInTheDocument();

  // Verify that the LinkedIn icon is rendered
  const linkedinLink = screen.getByTestId("linkedin-link");
  expect(linkedinLink).toBeInTheDocument();

  // Verify that the Mail icon is rendered
  const mailLink = screen.getByTestId("mail-link");
  expect(mailLink).toBeInTheDocument();

  // Verify that the email address is rendered
  const emailAddress = screen.getByText("giov.ponce@gmail.com");
  expect(emailAddress).toBeInTheDocument();
});
