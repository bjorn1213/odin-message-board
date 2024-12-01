const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

function getMessages(req, res) {
	res.render("index", { messages: messages });
}

function getNewMessage(req, res) {
	res.render("./messages/new_message");
}

function postNewMessage(req, res) {
	const { messageText, messageUser } = req.body;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect("/");
}

module.exports = {
	getMessages,
	getNewMessage,
	postNewMessage,
};
