const { expect } = require('@playwright/test');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = '[data-product-id="1"]';
        this.viewCartButton = 'a[href="/view_cart"]'; 
        this.cartProductName = '.cart_description'; 
        this.cartProductPrice = '.cart_price'; 
        this.cartProductQuantity = '.cart_quantity button'; 
    }

    async navigate() {
        await this.page.goto('https://www.automationexercise.com/products');
    }

    async selectAndAddFirstProductToCart() {
        await this.page.locator(this.addToCartButton).first().click();
    }
    

    async viewCart() {
        await this.page.locator(this.viewCartButton).last().click();
    }

    async verifyCartDetails(expectedProduct) {
        const cartProductName = await this.page.locator(this.cartProductName).innerText();
        const cartProductPrice = await this.page.locator(this.cartProductPrice).innerText();
        const cartProductQuantity = await this.page.locator(this.cartProductQuantity).innerText();
    
        expect(cartProductName).toContain(expectedProduct.name);
        expect(cartProductPrice).toContain(expectedProduct.price);
        expect(cartProductQuantity).toContain(expectedProduct.quantity || '1');
    }
}

module.exports = { ProductPage };
