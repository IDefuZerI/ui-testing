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

  it('Перевірка додавання нового запису в таблицю', () => {
    cy.contains('Elements').click();
    cy.contains('Web Tables').click();

    // Натискання кнопки "Add"
    cy.get('#addNewRecordButton').click();

    // Заповнення форми
    cy.get('#firstName').type('Іван');
    cy.get('#lastName').type('Петров');
    cy.get('#userEmail').type('ivan.petrov@example.com');
    cy.get('#age').type('30');
    cy.get('#salary').type('5000');
    cy.get('#department').type('IT');

    // Натискання кнопки "Submit"
    cy.get('#submit').click();

    // Очікуємо, що запис з'явиться в таблиці
    cy.get('.rt-tbody').should('contain', 'Іван');
    cy.get('.rt-tbody').should('contain', 'Петров');
    cy.get('.rt-tbody').should('contain', 'ivan.petrov@example.com');
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
