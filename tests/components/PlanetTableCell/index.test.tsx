import PlanetTableCell from "components/PlanetTableCell";
import { render, screen } from "@testing-library/react";

describe("components/PlanetTableCell", () => {
  it("renders number values", async () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlanetTableCell value={12345} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText("12 345")).toBeTruthy();
  });

  it("renders string values", async () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlanetTableCell value={"12345"} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText("12345")).toBeTruthy();
  });

  it("renders strings as links", async () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlanetTableCell value={"12345"} url="https://truss.works" />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByRole("link")).toBeTruthy();
  });

  it("renders arrays as lists", async () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlanetTableCell value={["apples", "bananas", "carrots"]} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByRole("list")).toBeTruthy();
    expect(screen.getByText(/Apples/)).toBeTruthy();
  });

  it("renders null values as question marks", async () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlanetTableCell value={null} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText(/\?/)).toBeTruthy();
  });

  it("renders null values with links", async () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlanetTableCell value={null} url="https://truss.works" />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText(/\[unknown\]/)).toBeTruthy();
    expect(screen.getByRole("link")).toBeTruthy();
  });
});
