//// cypress/integration/home.spec.js
describe('Home Page', () => {
  it('loads successfully and shows title', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Welcome to MyApp')
  });
});