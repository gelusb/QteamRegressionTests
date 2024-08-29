export class ProductPageSelectors {

    productSizeOption = '.swatch-option.text';
    colorOption =  `[option-label="${color}"]`;
    productQuantityBox = '#qty';
    addToCartButton = '#product-addtocart-button';
    messageSuccessPopUp = '.message-success.success.message';

}

export const productPageSelectors = new ProductPageSelectors();