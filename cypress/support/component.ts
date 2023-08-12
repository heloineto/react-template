import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
import '../../src/@types/cypress.d.ts';
import '../../src/index.css';
import './commands';
import './i18n';

Cypress.Commands.add('mount', mount);
