import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas First", () => {
  const title = "Hi i am a developer";
  const subTitle = "Hi i am a subtitle";

  test("should match snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('should show text "Hi i am a developer"', () => {
    render(<FirstApp title={title} />);
    // screen.debug()
    expect(screen.getAllByText(title)).toBeTruthy();
    // expect(screen.getAllByText(title)).not.toBeTruthy();    //si no debe existir
  });

  test("should show a title on a h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show subtitle for props", () => {
    render(
    <FirstApp 
     title={title} 
     subTitle={subTitle} 
    />);

    expect( screen.getAllByText(subTitle).length ).toBe(2);
    
  });
});
