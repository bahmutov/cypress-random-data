import { allItems, TODO_ITEM_ONE, TODO_ITEM_TWO } from './utils'

describe('TodoMVC', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  context('New Todo', function () {
    // These tests confirm that add new Todo items works.
    // All tests go through the DOM and events just like a real user would.

    // Input element selector for typing new todo title
    const NEW_TODO = '.new-todo'

    it('should allow me to add todo items', function () {
      cy.get(NEW_TODO).type(TODO_ITEM_ONE).type('{enter}')
      allItems().eq(0).find('label').should('contain', TODO_ITEM_ONE)
      cy.get(NEW_TODO).type(TODO_ITEM_TWO).type('{enter}')
      allItems().eq(1).find('label').should('contain', TODO_ITEM_TWO)
    })
  })
})
