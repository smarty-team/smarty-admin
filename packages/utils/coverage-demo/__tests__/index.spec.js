const main = require("../index");
describe("覆盖率演示", () => {
  it("main true", () => {
    main(true);
  });

  it("main false", () => {
    main(false);
  });
});
