/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";
import Main from ".";

describe("Main", () => {
  beforeEach(() => {
    render(<Main />);
  });

  test("it shows page header", () => {
    expect(screen.getByRole("heading").textContent).toBe("WELCOME NCTZENS");
  });

  test("it shows the image", () => {
      expect(screen.getByRole("img").src).toBe("https://nowcdn.smtown.com/upload/news/images/2021/05/07/7AhMiEMWadDTe91E_180e02717be24d8090cfcd0e2327a833_1620356481618.jpg");
  })
  
});

