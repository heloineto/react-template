import i18n from 'i18next';
import Home from '../Home';

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(<Home />);
  });

  it('shows a title', () => {
    cy.get('body').should('contain.text', i18n.t('home.title'));
  });

  it('has a counter button', () => {
    cy.get('bds-button').as('button');

    cy.get('@button').should(
      'contain.text',
      i18n.t('home.button-count', { count: 0 })
    );

    cy.get('@button').click();
    cy.get('@button').should(
      'contain.text',
      i18n.t('home.button-count', { count: 1 })
    );

    cy.get('@button').click();
    cy.get('@button').should(
      'contain.text',
      i18n.t('home.button-count', { count: 2 })
    );
  });
});
