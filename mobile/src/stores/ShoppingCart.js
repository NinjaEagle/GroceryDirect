import { types, flow } from "mobx-state-tree";

import { ProductModel } from "../models/Product";

export const ShoppingCartStore = types
	.model("ShoppinCartStore", {
		products: types.array(types.reference(ProductModel)),
	})
	.views((self) => ({
		get totalProducts() {
			return self.products.length;
		},
		get totalAmount() {
			return self.products
				.reduce((acc, current) => acc + parseFloat(current.totalPrice), 0)
				.toFixed(2);
		},
		get productsList() {
			return self.products.slice();
		},
		get isEmpty() {
			return self.products.length === 0;
		},
	}))
	.actions((self) => ({
		addProduct(product) {
			const entry = self.products.find((el) => el.id === product.id);

			if (!entry) {
				self.products.push(product);
			}
		},
		emptyCart() {
			if (!self.isEmpty) {
				self.products = undefined;
			}
		},
		logout() {
			flow(function* () {
				try {
					yield self.emptyCart();
				} catch (e) {
					console.log(e);
				}
			});
		},
		removeProduct(product) {
			self.products = self.products.filter((el) => el.id !== product.id);
		},
	}));
