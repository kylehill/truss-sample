import PlanetTableCell from "./index";

export default {
  title: "Planet Table Cell",
  component: PlanetTableCell,
};

export const number = () => (
  <table style={{ width: "200px", border: "solid 1px gray" }}>
    <tr>
      <PlanetTableCell value={8675309} />
    </tr>
  </table>
);

export const string = () => (
  <table style={{ width: "200px", border: "solid 1px gray" }}>
    <tr>
      <PlanetTableCell value="Trussooine" url="https://truss.works" />
    </tr>
  </table>
);

export const array = () => (
  <table style={{ width: "200px", border: "solid 1px gray" }}>
    <tr>
      <PlanetTableCell value={["mountains", "forests", "islands", "swamps", "plains"]} />
    </tr>
  </table>
);

export const blank = () => (
  <table style={{ width: "200px", border: "solid 1px gray" }}>
    <tr>
      <PlanetTableCell value={null} />
    </tr>
  </table>
);
