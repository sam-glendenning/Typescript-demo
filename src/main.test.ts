import {Student, greeter} from "./main";

describe("Student", () => {
  it("says hello", () => {
    const user = new Student("Johnny", "B.", "Goode");
    expect(greeter(user)).toBe("Hello Johnny B. Goode");
  });
});
