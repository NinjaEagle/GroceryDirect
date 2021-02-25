import { types, flow } from "mobx-state-tree";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customersApi } from "../api/Api";
import { NavigationService } from "../api/NavigationService";
import { CurrentUserModel } from "../models/CurrentUser";

const TOKEN_KEY = "@instore/token";

export const AuthStore = types
	.model("AuthStore", {
		authToken: types.maybe(types.string),
		info: types.maybe(CurrentUserModel),
	})
	.actions((self) => ({
		setupAuth: flow(function* (token) {
			yield self.getAuthToken();
			yield self.getUserInfo();
		}),
		getAuthToken: flow(function* (token) {
			try {
				const token = yield AsyncStorage.getItem(TOKEN_KEY);
				if (token) {
					self.authToken = token;
				} else {
					NavigationService.navigate("Auth");
				}
			} catch (error) {
				console.log("error", error);
			}
		}),
		saveToken: flow(function* (token) {
			try {
				yield AsyncStorage.setItem(TOKEN_KEY, token);
			} catch (error) {
				console.log("error", error);
			}
		}),
		getUserInfo: flow(function* () {
			try {
				if (self.authToken) {
					const res = yield customersApi
						.url("/me")
						.headers({ Authorization: `Bearer ${self.authToken}` })
						.get()
						.json();
					self.info = res;
					NavigationService.navigate("Main");
				}
			} catch (error) {
				console.log("error", error);
			}
		}),

		login: flow(function* (providerToken, provider) {
			try {
				const res = yield customersApi
					.post({
						token: providerToken,
						provider,
					})
					.json();
				if (res.token) {
					self.authToken = res.token;
					yield self.saveToken(res.token);
					yield self.getUserInfo();
				}
				// console.log('result', res)
			} catch (error) {
				console.log("error", error);
			}
		}),
	}));
