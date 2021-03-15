import { types, flow } from "mobx-state-tree";

import { ProductModel } from "../models/Product";

export const ProductsStore = types
	.model("ProductsStore", {
		data: types.array(types.reference(ProductModel)),
	})
	.actions((self) => ({
		logout: flow(function* () {
			try {
				if (!self.isEmpty) {
					self.data.forEach((item) => {
						item.removeFromCart();
					});
				}
			} catch (error) {
				console.log(error);
			}
		}),
	}));
