import { render, screen } from "@testing-library/react";
import LandingPage from "containers/LandingPage";
import fetch from "jest-fetch-mock";

describe("containers/LandingPage", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("Container displays loading message", async () => {
    render(<LandingPage />);
    const loadingMessage = await screen.findByText(/Loading.../);
    expect(loadingMessage).toBeTruthy();
  });

  test("Container displays error message (if warranted)", async () => {
    render(<LandingPage />);
    const errorMessage = await screen.findByText(/Well, actually,/);
    expect(errorMessage).toBeTruthy();
  });

  test("Container displays data (if warranted)", async () => {
    fetch.once(
      JSON.stringify({
        count: 1,
        next: null,
        results: [
          {
            name: "Test Planet",
            climate: "warm, cold",
            terrain: "trees, not trees",
            diameter: "10000",
            surface_water: "20",
            population: "1000000",
            residents: [{ name: "Jake Thatguy" }],
            url: "https://truss.works",
          },
        ],
      })
    );

    render(<LandingPage />);
    const planet = await screen.findByText(/Test Planet/);
    expect(planet).toBeTruthy();

    expect(async () => {
      screen.getByText(/Well, actually,/);
    }).rejects.toThrow();
  });
});
