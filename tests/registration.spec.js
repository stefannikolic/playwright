const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');

test('User Registration Flow', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    
    await registrationPage.navigate();
    
    await registrationPage.clickSignupLogin();
    
    const uniqueEmail = `testuser${Date.now()}@example.com`;
    await registrationPage.enterSignupDetails('Test User', uniqueEmail);
    
    await registrationPage.fillRegistrationForm({
        password: 'Password123',
        day: '10',
        month: '5',
        year: '1990',
        subscribeToNewsletter: true,
        receiveSpecialOffers: true,
        firstName: 'Test',
        lastName: 'User',
        company: 'Test Company',
        address: '123 Test Street',
        country: 'United States',
        state: 'Test State',
        city: 'Test City',
        zipcode: '12345',
        mobileNumber: '1234567890',
    });
    
    await registrationPage.verifyAccountCreated();
});
