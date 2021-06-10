import Chance from 'chance';
const chance = new Chance();
import {isSuperSet, union, intersection, difference} from '../../utils/helper.js';

describe('Task 12.1 Set', () => {

    //12.1.1 Creating Set
    let currencySet = new Set (['USD', 'RUR', 'BYN']);

    it('12.1.2 Printing out currency Set', () => {
        currencySet.forEach(currency => {
            cy.log(currency)
        });
    });

    it('12.1.3 Adding existing and new values to currency Set', () => {
        currencySet.add('USD').add('CH').add('ZL')
        currencySet.forEach(currency => {
            cy.log(currency)
        });
    });

    it('12.1.4 Checking USD on Set inclusion', () => {
        cy.log('Set has USD value: ' + currencySet.has('USD'));
        currencySet.delete('USD');
        cy.log('Set has USD value: ' + currencySet.has('USD'));
    });

    it('12.1.5 Printing out random value', () => {
        cy.log(chance.pickone([...currencySet]));
        cy.log(chance.pickset([...currencySet], chance.integer({min: 1, max: currencySet.size})));
    });

    it('12.1.6 Custom function', () => {
        let A = new Set([1,3,5,4]);
        let B = new Set([1,3]);
        let C = new Set([1,3,4,6]);
        cy.log(isSuperSet(A, B));
        cy.log(union(A, C));
        cy.log(intersection(A, B));
        cy.log(difference(A, B));

    });
})