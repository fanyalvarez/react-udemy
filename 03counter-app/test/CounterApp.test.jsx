import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("counter", () => {
  const initialValue = 100;

  test("should match with spanshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("should show a initial value 100", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test("should increase with button +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("should decrease with button -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("should rest with button rest", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));

    // expect(screen.getByText(initialValue)).toBeTruthy()    //confirm that rest retur a number of reset
    
    fireEvent.click(screen.getByRole( 'button', {name:'btn-reset'}))  
    expect(screen.getByText(355)).toBeTruthy()   

    screen.debug()
    
  });
});
