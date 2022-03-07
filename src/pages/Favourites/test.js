/**
 * @jest-environment jsdom
 */

 import { screen } from "@testing-library/react";
 import Favourites from ".";
 
 describe("Favourites", () => {
   
    beforeEach(() => {
        render(<Favourites />);
    });
 
    test("it shows page header", () => {
        expect( screen.getByRole("heading").textContent).toBe("Most Popular Music by NCT");
    });

    test("it shows a table", () => {
        expect(screen.getByRole("table")).toBeTruthy()
    })

    test('renders a p with a heart (🤍) in it', () => {
        let heartP = screen.getByRole("Boss")
        expect(heartP.textContent).toBe('🤍')
    })

    test('changes colour of heart when clicked', () => {
        let heartP = screen.getByRole("Boss")
        let initColour = heartP.textContent
        userEvent.click(heartP)
        let clickedColour = heartP.textContent
        expect(clickedColour).not.toBe(initColour)
    })
   
 });
