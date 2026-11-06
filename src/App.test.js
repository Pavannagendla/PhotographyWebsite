import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./App";

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {} }));
  window.scrollTo = () => {};
});

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  );

test("home page shows the photographer's name", () => {
  renderAt("/");
  expect(screen.getByRole("heading", { level: 1, name: /pavan kumar nagendla/i })).toBeInTheDocument();
});

test("work page filters by category from the URL", () => {
  renderAt("/work?category=street");
  expect(screen.getByRole("heading", { level: 1, name: "Street" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /street/i, pressed: true })).toBeInTheDocument();
});

test("unknown pages show a not-found message", () => {
  renderAt("/does-not-exist");
  expect(screen.getByText(/out of focus/i)).toBeInTheDocument();
});
