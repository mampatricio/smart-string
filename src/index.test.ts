import { slugify, capitalize, truncate } from "../src/index";
import { test, expect } from "vitest";

test("slugify works", () => {
  expect(slugify("Olá Mundo")).toBe("ola-mundo");
});

test("capitalize works", () => {
  expect(capitalize("mARcos")).toBe("Marcos");
});

test("truncate works", () => {
  expect(truncate("abcdef", 4)).toBe("abcd...");
});
