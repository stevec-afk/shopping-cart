import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard";
import userEvent from "@testing-library/user-event";

describe("Product Card Component", () => {
  const mockProduct = {
    id: 1,
    title: "Test Backpack",
    price: 99.99,
    image: "https://example.com",
  };
  it("renders a product title and price based on props", () => {
    render(<ProductCard product={mockProduct} />);

    const title = screen.getByText("Test Backpack");
    const price = screen.getByText("$99.99");
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
  it(
    "should render a quantity input with the default value of 1, " +
      "with increment, decrement, " +
      "and add-to-cart buttons.",
    () => {
      render(<ProductCard product={mockProduct} />);

      const quantityInput = screen.getByRole("spinbutton");
      const incrementButton = screen.getByRole("button", { name: "+" });
      const decrementButton = screen.getByRole("button", { name: "-" });
      const addButton = screen.getByRole("button", { name: "Add to Cart" });

      expect(quantityInput).toBeInTheDocument();
      expect(quantityInput).toHaveValue(1);
      expect(incrementButton).toBeInTheDocument();
      expect(decrementButton).toBeInTheDocument();
      expect(addButton).toBeInTheDocument();
    },
  );
  it("clicking the + button increments the quantity.", async () => {
    render(<ProductCard product={mockProduct} />);
    const user = userEvent.setup();
    const incrementButton = screen.getByRole("button", { name: "+" });
    const quantityInput = screen.getByRole("spinbutton");

    await user.click(incrementButton);
    expect(quantityInput).toHaveValue(2);
  });
  it("clicking the - button decrements quantity", async () => {
    render(<ProductCard product={mockProduct} />);

    const user = userEvent.setup();
    const decrementButton = screen.getByRole("button", { name: "-" });
    const incrementButton = screen.getByRole("button", { name: "+" });
    const quantityInput = screen.getByRole("spinbutton");

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(quantityInput).toHaveValue(1);
  });
  it("enforces boundary limits between 1 and 99", async () => {
    render(<ProductCard product={mockProduct} />);
    const user = userEvent.setup();
    const decrementButton = screen.getByRole("button", { name: "-" });
    const incrementButton = screen.getByRole("button", { name: "+" });
    const quantityInput = screen.getByRole("spinbutton");

    await user.click(decrementButton);
    expect(quantityInput).toHaveValue(1);

    for (let i = 0; i < 105; i++) {
      await user.click(incrementButton);
    }
    expect(quantityInput).toHaveValue(99);
  });
});
