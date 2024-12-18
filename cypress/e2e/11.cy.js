Cypress.Commands.add('registerUser', (name, email, password) => {
  cy.visit('http://automationexercise.com');
  cy.get('.shop-menu > .nav > :nth-child(4)').click(); // Click on 'Signup / Login'
  cy.contains('New User Signup!').should('be.visible');
  cy.get('[data-qa="signup-name"]').type(name);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
  cy.contains("Enter Account Information").should("be.visible");
  cy.get('[data-qa="password"]').type(password);
  cy.get('form > :nth-child(6)').type('1990-01-01'); // Enter date of birth
  cy.get('#newsletter').check(); // Select newsletter
  cy.get('#optin').check(); // Select special offers
  cy.get('[data-qa="first_name"]').type(name.split(' ')[0]);
  cy.get('[data-qa="last_name"]').type(name.split(' ')[1]);
  cy.get('[data-qa="company"]').type('TestCompany');
  cy.get('[data-qa="address"]').type('123 Main Street');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('California');
  cy.get('[data-qa="city"]').type('Los Angeles');
  cy.get('[data-qa="zipcode"]').type('90001');
  cy.get('[data-qa="mobile_number"]').type('1234567890');
  cy.get('[data-qa="create-account"]').click();
  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

// Custom command to log in
Cypress.Commands.add('login', (email, password) => {
  cy.visit('http://automationexercise.com');
  cy.get('.shop-menu > .nav > :nth-child(4)').click(); 
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
 
});

// Test case: Verify user registration and login
describe('User Registration and Login', () => {
  it('Should register and log in successfully', () => {
    const name = 'Laliko goletiani';
  
    const email = 'lgoletiani7@gmail.com'; 
    const password = '123456'; 
    // Register user
    cy.registerUser(name, email, password);

    // Log out after registration
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click(); 

    // Log in with registered credentials
    cy.login(email, password);
  });
});

// Test case: Verify subscription functionality
describe('Verify Subscription on Home Page', () => {
  it('Should verify subscription functionality', () => {
    cy.visit('http://automationexercise.com');
    cy.scrollTo('bottom');
    cy.get('#susbscribe_email').type('testuser@example.com');
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});

// Test case: Add products to cart
describe('Add Products to Cart', () => {
  it('Should add products to the cart and verify', () => {
    cy.visit('http://automationexercise.com');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

    // Add first product to cart
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').click(); // Click 'Continue Shopping'

    // Add second product to cart
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    Cypress.Commands.add('registerUser', (name, email, password) => {
  cy.visit('http://automationexercise.com');
  cy.get('.shop-menu > .nav > :nth-child(4)').click(); 
  cy.contains('New User Signup!').should('be.visible');
  cy.get('[data-qa="signup-name"]').type(name);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
  cy.contains("Enter Account Information").should("be.visible");
  cy.get('[data-qa="password"]').type(password);
  cy.get('form > :nth-child(6)').type('1990-01-01'); 
  cy.get('#newsletter').check(); 
  cy.get('#optin').check(); 
  cy.get('[data-qa="first_name"]').type(name.split(' ')[0]);
  cy.get('[data-qa="last_name"]').type(name.split(' ')[1]);
  cy.get('[data-qa="company"]').type('TestCompany');
  cy.get('[data-qa="address"]').type('123 Main Street');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('California');
  cy.get('[data-qa="city"]').type('Los Angeles');
  cy.get('[data-qa="zipcode"]').type('90001');
  cy.get('[data-qa="mobile_number"]').type('1234567890');
  cy.get('[data-qa="create-account"]').click();
  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

// Custom command to log in
Cypress.Commands.add('login', (email, password) => {
  cy.visit('http://automationexercise.com');
  cy.get('.shop-menu > .nav > :nth-child(4)').click(); 
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
  cy.contains('Logged in as').should('be.visible');
});

// Test case: Verify user registration and login
describe('User Registration and Login', () => {
  it('Should register and log in successfully', () => {
    const name = 'Laliko One'; 
    const email = 'lgoletiani7@gmail.com'; 
    const password = '123456'; 
    // Register user
    cy.registerUser(name, email, password);

    // Log out after registration
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click(); 

    // Log in with registered credentials
    cy.login(email, password);
  });
});

// Test case: Verify subscription functionality
describe('Verify Subscription on Home Page', () => {
  it('Should verify subscription functionality', () => {
    cy.visit('http://automationexercise.com');
    cy.scrollTo('bottom');
    cy.get('#susbscribe_email').type('testuser@example.com');
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});

// Test case: Add products to cart
describe('Add Products to Cart', () => {
  it('Should add products to the cart and verify', () => {
    cy.visit('http://automationexercise.com');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

    // Add first product to cart
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').click(); 

    // Add second product to cart
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').contains('View Cart').click(); 

    // Verify both products are added to the cart
    cy.get('.cart_description').should('have.length', 2);

    // Verify product details: price, quantity, and total
    cy.get('.cart_total_price').then(($prices) => {
      const prices = $prices.map((index, price) => parseFloat(price.innerText.replace('$', ''))).get();
      const totalPrice = prices.reduce((sum, price) => sum + price, 0);
      cy.get('.cart_total').should('contain', totalPrice.toFixed(2));
    });
  });
})

    // Verify both products are added to the cart
    cy.get('.cart_description').should('have.length', 2);

    // Verify product details: price, quantity, and total
    cy.get('.cart_total_price').then(($prices) => {
      const prices = $prices.map((index, price) => parseFloat(price.innerText.replace('$', ''))).get();
      const totalPrice = prices.reduce((sum, price) => sum + price, 0);
      cy.get('.cart_total').should('contain', totalPrice.toFixed(2));
    }); 

  });
});
describe('Test Case 16: Place Order - Login before Checkout', () => {
  it('Should place an order successfully after logging in', () => {
    const email = 'lgoletiani7@gmail.com'; 
    const password = '123456'; 

    // 1. Launch browser and navigate to the URL
    cy.visit('http://automationexercise.com');

    // 2. Verify that the home page is visible successfully
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

    // 3. Click 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click();

    // 4. Fill email, password and click 'Login' button
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();

    // 5. Verify 'Logged in as username' at the top
    cy.contains('Logged in as laliko1').should('be.visible');

    // 6. Add products to cart
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').click(); 
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

    // 7. Click 'Cart' button
    cy.get('.shop-menu > .nav > :nth-child(3)').click();

    // 8. Verify that cart page is displayed
    cy.contains('Shopping Cart').should('be.visible');

    // 9. Click Proceed To Checkout
    cy.get('.col-sm-6 > .btn').click(); 

    // 10. Verify Address Details and Review Your Order
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    // 11. Enter description in comment text area and click 'Place Order'
    cy.get('[name="message"]').type('Please deliver between 9 AM to 5 PM.');
    cy.get('.form-control.btn.btn-primary').click(); // 'Place Order' button

    // 12. Enter payment details
    cy.get('[name="name_on_card"]').type('Laliko One');
    cy.get('[name="card_number"]').type('4111111111111111'); 
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2025');

    // 13. Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').click();

    // 14. Verify success message
    cy.contains('Your order has been placed successfully!').should('be.visible');

    // 15. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5)').click(); 

    // 16. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.contains('ACCOUNT DELETED!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
});