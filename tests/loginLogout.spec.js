const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Test Login and Logout Functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.clickSignupLogin();

    const email = '91.stefan.nikolic@gmail.com';
    const password = 'Test1234';
    await loginPage.login(email, password);

    const username = 'Stefan';
    await loginPage.verifyLogin(username);

    await loginPage.logout();

    await loginPage.verifyLogout();
});
