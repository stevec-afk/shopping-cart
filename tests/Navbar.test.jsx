import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";

describe("Navbar Component", () => {
  it("renders the correct total item count from the cart data", () => {
    const mockCart = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={mockCart} />
      </MemoryRouter>,
    );

    const totalCountElement = screen.getByText("5");
    expect(totalCountElement).toBeInTheDocument();
  });
  it("contains a navigation link to the store page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const shopLink = screen.getByRole("link", { name: "Shop" });
    expect(shopLink).toHaveAttribute("href", "/shop");
  });
});
