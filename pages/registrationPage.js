const { expect } = require('@playwright/test');

class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.signupLoginLink = 'a[href="/login"]';
        this.nameInput = 'input[data-qa="signup-name"]';
        this.emailInput = 'input[data-qa="signup-email"]';
        this.signupButton = 'button[data-qa="signup-button"]';
        this.genderRadio = '#id_gender1';
        this.passwordInput = '#password';
        this.dayDropdown = '#days';
        this.monthDropdown = '#months';
        this.yearDropdown = '#years';
        this.newsletterCheckbox = '#newsletter';
        this.specialOffersCheckbox = '#optin';
        this.firstNameInput = '#first_name';
        this.lastNameInput = '#last_name';
        this.companyInput = '#company';
        this.addressInput = '#address1';
        this.countryDropdown = '#country';
        this.stateInput = '#state';
        this.cityInput = '#city';
        this.zipcodeInput = '#zipcode';
        this.mobileNumberInput = '#mobile_number';
        this.createAccountButton = 'button[data-qa="create-account"]';
        this.successMessage = 'h2[data-qa="account-created"]';
    }

    async navigate() {
        await this.page.goto('https://www.automationexercise.com');
    }

    async clickSignupLogin() {
        await this.page.click(this.signupLoginLink);
    }

    async enterSignupDetails(name, email) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.signupButton);
    }

    async fillRegistrationForm(details) {
        await this.page.click(this.genderRadio);
        await this.page.fill(this.passwordInput, details.password);
        await this.page.selectOption(this.dayDropdown, details.day);
        await this.page.selectOption(this.monthDropdown, details.month);
        await this.page.selectOption(this.yearDropdown, details.year);
        if (details.subscribeToNewsletter) {
            await this.page.check(this.newsletterCheckbox);
        }
        if (details.receiveSpecialOffers) {
            await this.page.check(this.specialOffersCheckbox);
        }
        await this.page.fill(this.firstNameInput, details.firstName);
        await this.page.fill(this.lastNameInput, details.lastName);
        await this.page.fill(this.companyInput, details.company);
        await this.page.fill(this.addressInput, details.address);
        await this.page.selectOption(this.countryDropdown, details.country);
        await this.page.fill(this.stateInput, details.state);
        await this.page.fill(this.cityInput, details.city);
        await this.page.fill(this.zipcodeInput, details.zipcode);
        await this.page.fill(this.mobileNumberInput, details.mobileNumber);
        await this.page.click(this.createAccountButton);
    }

    async verifyAccountCreated() {
        await expect(this.page.locator(this.successMessage)).toHaveText('Account Created!');
    }
}

module.exports = { RegistrationPage };
