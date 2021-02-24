import express from "express";
import middlewaresConfig from "./config/middlewares";
import { CustomerRoutes } from "./modules";
import "./config/db";
import { CustomerRoutes, AddressRoutes } from "./modules";

const app = express();

middlewaresConfig(app);

app.get("/", (req, res) => {
	res.send("Welcome");
});

// route endpoints
app.use("/api/v1/customers", CustomerRoutes);
app.use("/api/v1/addresses", AddressRoutes);

app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server listen on port 3000");
	}
});
