import { allItems } from './utils'

// @ts-ignore
const Chance = require('chance')

const chance = new Chance()

describe('TodoMVC', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  context('New Todo', function () {
    it('should allow me to add todo items', function () {
      const text1 = chance.sentence({ words: 3 })

      cy.addTodo(text1)
      allItems().eq(0).find('label').should('contain', text1)

      const text2 = chance.sentence({ words: 3 })
      cy.addTodo(text2)
      allItems().eq(1).find('label').should('contain', text2)
    })
  })
})
