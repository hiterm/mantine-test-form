import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Form, FormValue } from "./Form";

test("type", async () => {
  const handleSubmit = vi.fn((values: FormValue) => {});
  const { getByRole } = render(<Form onSubmit={handleSubmit} />);
  const user = userEvent.setup();
  await user.type(getByRole("textbox", { name: "Email" }), "a@example.com");
  await user.click(getByRole("button"));
  expect(handleSubmit.mock.calls.length).toBe(1);
  expect(handleSubmit.mock.calls[0][0]).toStrictEqual({
    email: "a@example.com",
    termsOfService: false,
  });
});
