import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "../Button";

test("Renders the button component correctly", () => {
  const testMessage = "Hello";
  const { queryByText } = render(<Button>{testMessage}</Button>);

  expect(queryByText(testMessage)).toBeInTheDocument();
});

test("Button Onclick functionality works as expected", () => {
  const testMessage = "Hello";
  const mockOnclick = jest.fn(x => {});

  const { queryByText } = render(
    <Button onClick={mockOnclick}>{testMessage}</Button>
  );
  fireEvent.click(queryByText(testMessage));
  expect(mockOnclick.mock.calls.length).toBe(1);
});

test("Onclick function is not called when button is disabled", () => {
  const testMessage = "Hello";
  const mockOnclick = jest.fn(x => {});

  const { queryByText } = render(
    <Button onClick={mockOnclick} disabled={true}>
      {testMessage}
    </Button>
  );
  fireEvent.click(queryByText(testMessage));
  expect(mockOnclick.mock.calls.length).toBe(0);
});
