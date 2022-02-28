import { createClient } from "@urql/preact";

const client = createClient({
  url: "http://localhost:3000/graphql",
});

export { client };
