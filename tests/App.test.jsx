import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";

describe("App Integration Flow", () => {
  it("adds a product to the cart and updates the navigation bar counter", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const user = userEvent.setup();
    const incrementButton = screen.getByRole("button", { name: "+" });
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(incrementButton);
    await user.click(addToCartButton);

    const cartLink = screen.getByRole("link", { name: /cart/i });
    await user.click(cartLink);
    const cartItemTitle = screen.getByRole("heading", { name: "Test Backpack" });
    const cartItemQuantity = screen.getByText(/quantity: 2/i);

    expect(cartItemTitle).toBeInTheDocument();
    expect(cartItemQuantity).toBeInTheDocument();
  });
});