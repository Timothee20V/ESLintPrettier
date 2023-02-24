// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hello2 = "hello";
console.log("Hello world");

function greetName(name = "anonymous") {
	if (name) {
		console.log(name);
	}
	console.log("hi, " + name.toUpperCase());
}

export const hello = "world";
console.log("ok");
greetName("ok");
