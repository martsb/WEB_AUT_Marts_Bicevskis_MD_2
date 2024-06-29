
describe('Making Appointment', () => {
  context("Validating", () => {
    it('1', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.get('#btn-make-appointment').click();
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').check();
      cy.get('input[value="Medicaid"]').check();
      cy.get('#txt_visit_date').click();
      cy.get('.datepicker-days').find('.day').contains(30).click();
      cy.get('#txt_comment').type("CURA Healthcare Service");
      cy.get('#btn-book-appointment').click();
      cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
      cy.get('#hospital_readmission').should('have.text', 'Yes');
      cy.get('#program').should('have.text', 'Medicaid');
      cy.get('#visit_date').invoke('text').then((text) => {
          const actualDateDay = text.split('/')[0];
          expect(actualDateDay).to.eq('30');
        });
      cy.get('#comment').should('have.text', 'CURA Healthcare Service');
    });
    it('2', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.get('#btn-make-appointment').click();
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
      cy.get('#menu-toggle').click();
      cy.get('#sidebar-wrapper').should('have.class', 'active');
      cy.get('.sidebar-nav').contains('History').click();
      cy.get('.col-sm-12.text-center').contains('p', 'No appointment').should('be.visible'); 
    });
  });
});
