import { Provider } from "@urql/preact";
import { render as originalRender } from "@testing-library/preact";
import { FunctionComponent } from "preact";

import { client } from "../client";

type UI = Parameters<typeof originalRender>[0];

const render = (ui: UI) => {
  const Wrapper: FunctionComponent = ({ children }) => {
    return <Provider value={client}>{children}</Provider>;
  };

  return originalRender(ui, { wrapper: Wrapper });
};

export * from "@testing-library/preact";
export { render };
