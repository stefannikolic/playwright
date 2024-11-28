const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.signupLoginLink = 'a[href="/login"]';
        this.emailInput = 'input[data-qa="login-email"]';
        this.passwordInput = 'input[data-qa="login-password"]';
        this.loginButton = 'button[data-qa="login-button"]';
        this.logoutLink = 'a[href="/logout"]';
        this.loggedInUsername = '.navbar-nav li:nth-child(10) a'; 
    }

    async navigate() {
        await this.page.goto('https://www.automationexercise.com');
    }

    async clickSignupLogin() {
        await this.page.click(this.signupLoginLink);
    }

    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async verifyLogin(username) {
        const displayedUsername = await this.page.locator(this.loggedInUsername).innerText();
        expect(displayedUsername).toContain(username);
    }

    async logout() {
        await this.page.click(this.logoutLink);
    }

    async verifyLogout() {
        await expect(this.page.locator(this.signupLoginLink)).toBeVisible();
    }
}

module.exports = { LoginPage };
