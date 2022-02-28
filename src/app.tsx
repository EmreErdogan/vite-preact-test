import { Provider } from "@urql/preact";
import { client } from "./client";
import { Home } from "./Home";

export function App() {
  return (
    <Provider value={client}>
      <Home />
    </Provider>
  );
}
