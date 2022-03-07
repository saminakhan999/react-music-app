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

    test("clicking it stops music", () => {
        const stopButton = screen.getByRole("stop-button");
        userEvent.click(stopButton);
        expect(stopButton.textContent).toBe("Simon Says STOP (the music)");
     });
   
 });
