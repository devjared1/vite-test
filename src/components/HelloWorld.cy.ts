import HelloWorld from './HelloWorld.vue'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(HelloWorld)
      .then(() => {
        expect(Cypress.vueWrapper.vm.count).to.eq(0);
      })
  })
})