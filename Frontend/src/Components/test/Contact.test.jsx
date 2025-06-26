import { render,screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../contact/Contact";


describe("Contact US Page Test Cases",()=>{

    it("Should load Contact Us Component",()=>{
    render(<Contact />);

    const heading = screen.getByText("We'd love to hear from you!");

    // Assertion

    expect(heading).toBeInTheDocument()
});

    it("Should my button component load on Contact Us Component",()=>{
    render(<Contact />);

    const input = screen.getAllByRole("textbox")

    // Assertion

    expect(input.length).toBe(3)
})
})