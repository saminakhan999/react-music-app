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
   
 });
