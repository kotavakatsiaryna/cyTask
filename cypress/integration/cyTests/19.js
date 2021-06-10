before(() => {
    cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1622376306').its('body').as("payload")
})

it('19.2 cy.request in "before" block', function ()  {
    let items = this.payload.products;
    cy.log('Total amount of products is ' + items.length);
    cy.log(items[0]);
});

it('19.1 cy.request and code in "it" block', () => {

    cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1622376306').then((response) => {
        cy.wrap(response.body).as("payload");
    })

    cy.get("@payload").then(payload => {
        cy.log('Total amount of products is ' + payload.products.length);
        cy.log(payload.products[0]);
    })
});
