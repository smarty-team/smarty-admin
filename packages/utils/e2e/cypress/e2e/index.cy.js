describe("双向绑定", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080/");
  });
  it("初始状态", () => {
    cy.get("input").should("have.value", "Hello");
    cy.get("button").should("have.text", "Hello");
  });
  it("Input 输入", () => {
    cy.get("input").type(" Cypress");
    cy.get("input").should("have.value", "Hello Cypress");
    cy.get("button").should("have.text", "Hello Cypress");
  });
  it("按钮点击", () => {
    cy.get("button").click();
    cy.get("input").should("have.value", "olleH");
    cy.get("button").should("have.text", "olleH");
  });
});
