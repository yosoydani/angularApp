import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {

    items: ShoppingCartItem[] = [];
    constructor (public key: string, public itemsMap: {[key: string]: ShoppingCartItem}) {
        // tslint:disable-next-line:forin
        for (const productId in itemsMap) {
            const item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
     }

    // get productsIds(){
    //    // console.log(Object.keys(this.items));
    //     return Object.keys(this.itemsMap);
    // }

     get totalItemsCounts() {
        let count = 0 ;
        // tslint:disable-next-line:forin
        for (const productId in this.itemsMap) {
        count += this.itemsMap[productId].quantity;
        }
        return count;
    }

    get totalPrice() {
        let totalPrice = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.items) {
            totalPrice += this.items[productId].totalPrice;
            }
        return totalPrice;
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }


}
