const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should sum two numbers", async () => {
    const user = await User.create({
      name: "leonardo",
      email: "leo@test.com",
      password_hash: "23123"
    });

    console.log(user);

    expect(user.email).toBe("leo@test.com");
  });
});
