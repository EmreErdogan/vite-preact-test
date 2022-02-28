import { Home } from "./Home";
import { render } from "./test/test-utils";

describe("Home", () => {
  it("should pass", () => {
    expect(true).toBeTruthy();
  });

  it("should render Home", () => {
    render(<Home />);
  });
});
