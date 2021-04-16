import ErrorBlock from "./index";

export default {
  component: ErrorBlock,
  title: "Error Message",
};

export const standard = () => (
  <ErrorBlock header="Hey, something went wrong" subhead="You should consider fixing it idk" />
);
