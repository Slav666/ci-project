const add = require("./index");

test("adds 1 + 2 + 3 to equal 6", () => {
  expect(add(1, 2, 3)).toBe(6);
});
