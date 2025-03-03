describe('UI Тестування DemoQA', () => {
  beforeEach(() => {
      cy.visit('https://demoqa.com'); // Відкриваємо сайт перед кожним тестом
  });

  it('Перевірка відкриття сторінки "Text Box"', () => {
      cy.contains('Elements').click();
      cy.contains('Text Box').click();
      cy.url().should('include', '/text-box'); 
  });

  it('Введення тексту в поле "Full Name" та перевірка', () => {
      cy.contains('Elements').click();
      cy.contains('Text Box').click();
      cy.get('#userName').type('Тестове Ім’я');
      cy.get('#userName').should('have.value', 'Тестове Ім’я');
  });

  it('Перевірка роботи чекбокса', () => {
      cy.contains('Elements').click();
      cy.contains('Check Box').click();
      cy.get('.rct-checkbox').click();
      cy.get('.rct-icon-check').should('be.visible');
  });

  it('Перевірка натискання кнопки', () => {
      cy.contains('Elements').click();
      cy.contains('Buttons').click();
      cy.contains('Click Me').click();
      cy.contains('You have clicked').should('be.visible');
  });

  it('Перевірка появи модального вікна', () => {
      cy.contains('Alerts, Frame & Windows').click();
      cy.contains('Modal Dialogs').click();
      cy.contains('Small modal').click();
      cy.get('.modal-content').should('be.visible');
      cy.contains('Close').click();
      cy.get('.modal-content').should('not.exist');
  });
});
