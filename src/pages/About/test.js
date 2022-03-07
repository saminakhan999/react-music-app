/**
 * @jest-environment jsdom
 */

 import { screen } from "@testing-library/react";
 import About from ".";
 
 describe("About", () => {
   
    beforeEach(() => {
     render(<About />);
   });
 
   test("it shows page header", () => {
        const aboutheader = screen.getByRole("heading")
        expect(aboutheader.textContent).toBe("K-Pop Group");
   });

   test("it shows the image", () => {
        const image = screen.getByRole("img");
        expect(image.src).toBe("https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif");
   })
   
 });
