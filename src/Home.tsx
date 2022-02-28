import { gql, useMutation } from "@urql/preact";

const mutation = gql`
  mutation CreateTodo($text: String!) {
    createTodo(text: $text) {
      id
      text
      complete
    }
  }
`;

export const Home = () => {
  const [result, mutate] = useMutation(mutation);

  return <div>Hello world!</div>;
};
