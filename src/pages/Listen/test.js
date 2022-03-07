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

    test("render play button", () => {
        const buttonwithsongnameonit = screen.getByRole("1")
        userEvent.click(buttonwithsongnameonit)
        const playButton = screen.getByRole("play-button")
        expect(playButton.textContent).toBe("Play BOSS")
    });

    test("render pause button", () => {
        const buttonwithsongnameonit = screen.getByRole("1")
        userEvent.click(buttonwithsongnameonit)
        const pauseButton = screen.getByRole("pause-button")
        expect(pauseButton.textContent).toBe("Pause BOSS")
    });

    test("render stop button", () => {
        const buttonwithsongnameonit = screen.getByRole("1")
        userEvent.click(buttonwithsongnameonit)
        const stopButton = screen.getByRole("the-stop-button")
        expect(stopButton.textContent).toBe("Stop BOSS")
    });

    test("render lyrics", () => {
        const buttonwithsongnameonit = screen.getByRole("1");
        userEvent.click(buttonwithsongnameonit)
        const lyrics = screen.getByRole("BOSS");
        expect(lyrics.textContent).toBe("  ");
    });
   
 });
