/**
 * @jest-environment jsdom
 */

 import { screen } from "@testing-library/react";
 import { MemoryRouter } from "react-router-dom";
 import Footer from ".";
 
 describe("Footer", () => {

     test("it shows © MAHARANI INC.", () => {
        render(<Footer />, { wrapper: MemoryRouter });
        const content = screen.getByRole("maharani");
        expect(content.textContent).toContain("© MAHARANI INC.Maharani Inc is really cool");
    });

 });
