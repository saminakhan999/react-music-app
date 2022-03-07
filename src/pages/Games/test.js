/**
 * @jest-environment jsdom
 */

 import { screen } from "@testing-library/react";
 import Games from ".";
 
 describe("Games", () => {
   
    beforeEach(() => {
        render(<Games />);
    });
 
    test("it shows page header", () => {
        expect(screen.getByRole("heading").textContent).toBe("SIMON SAYS");
    });

    test("clicking it plays music", () => {
        // come back to this
    });
   
 });
