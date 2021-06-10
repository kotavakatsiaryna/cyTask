import Store from '../page-objects/GoogleStore';
import Cart from '../page-objects/GoogleCart';

describe('User adds products to cart', () => {
    it('US_1: User is able to add single and multiple color product to the cart', () => {
        cy.fixture('products').then(scope => {
            scope.goods.forEach(product => {
                let item = {};
                cy.log('GIVEN user is at Accessories page');
                Store.openAccessoriesPage();
                cy.log('WHEN user performs search');
                Store.searchIcon.click();
                Store.searchInput.type(`${product.name}{enter}`);
                cy.log('AND adds product to the cart');
                Store.navToProductPage();
                Store.getProductName(item);

            });
        });
    });
});