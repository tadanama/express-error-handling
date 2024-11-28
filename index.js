import express from "express";

const app = express();

app.use((req, res, next) => {
	console.log("I am triggered");
	// If a string is provided (except for the string "route" and "router" or an empty string) as the argument for the next callback function, Express will treats it that ana error has ocuured and will skip the next middleware and route handlers
	// It goes straight to the error handler middleware
	// If an error handler middleware is not defined Express will trigger an error with the message provided. The argument is displayed on the page and it will appear on the console in red color
	//  If nothing is provided as an argument, the next callback function will got to the next middleware or route handlers

	// Comment one of the next callback function below to see the difference in behaviour
	next(); // This will not trigger an error
	//next("saya error"); // This will trigger an error
});

// Render the homepage
app.get("/", (req, res) => {
	res.send("I am the homepage");
});

// Return error if route doesn't not exist
app.use((req, res, next) => {
	res.status(404).send("You are lost young one");
});

// This middleware is triggered only when an error happens
app.use((error, req, res, next) => {
	console.log("Error handler middleware is triggered");
	// Error comes from the next callback fuction
	console.log(error);
	res.send("Error handler middleware is triggered");
});

app.listen(3000, () => console.log("Listening on port 3000"));
