export class CartPageSelectors{

    cartItemsTable = '.cart.items.data.table';
    productQuantity = '.input-text.qty';
    shoppingCartTable = '#shopping-cart-table';
    deleteActionIcon = '.action.action-delete';
    cartSummaryTotal =  '.cart-summary';
    proceedToCheckOutButton = 'button[type="button"][title="Proceed to Checkout"]';

}

export const cartPageSelectors = new CartPageSelectors();