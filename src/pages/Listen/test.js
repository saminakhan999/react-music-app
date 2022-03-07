/**
 * @jest-environment jsdom
 */

 import { screen } from "@testing-library/react";
 import Listen from ".";
 
 describe("Listen", () => {
   
    beforeEach(() => {
        render(<Listen />);
    });
 
    test("it shows page header", () => {
        expect(screen.getByRole("listen-header").textContent).toBe("Listen to some music here!");
    });
   
 });
