const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../pages/productPage');

test('Add a Product to Cart and Verify Details', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigate();

    await productPage.selectAndAddFirstProductToCart();

    await productPage.viewCart();

    await productPage.verifyCartDetails({
        name: "Blue Top",
        price: "Rs. 500",
        quantity: '1', 
    });
});
