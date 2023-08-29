import {
  getAllByAltText,
  getAllByText,
  getByText,
  render,
} from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas First", () => {
  // test("hacer match con snapshot", () => {
  //   const title = "Hi i am a developer";
  //   const { container } = render(<FirstApp title={title} />);
  //   // console.log(container );

  //   expect(container).toMatchSnapshot();
  // });

  test("show title in H1", () => {
    const title = "Hi i am a developer";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // // HTML con Dom
    // const h1 = container.querySelector("h1");
    // console.log(h1.innerHTML);

    // // cualquiera de los dos
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title")).toBeTruthy(); //que exista
    expect(getByTestId("test-title").innerHTML).toBe(title); //que sea extactamente igual
    expect(getByTestId("test-title").innerHTML).toContain(title); //que contenga ese string
  });

  test("should show subtitle for props", () => {
    const title = "Hi i am a developer";
    const subTitle = "im a subTitle";
    const { getAllByText } = render(
      <FirstApp 
      title={ title }
      subTitle={ subTitle }
  /> 
    );

    expect( getAllByText(subTitle).length ).toBe(2);
  });
});
