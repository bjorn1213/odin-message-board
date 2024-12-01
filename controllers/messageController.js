const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
		id: 0,
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
		id: 1,
	},
];

function getMessages(req, res) {
	res.render("./messages/index", { messages: messages });
}

function getMessage(req, res) {
	const { messageId } = req.params;
	const message = messages[messageId];
	if (message === undefined) {
		res.render("404");
	} else {
		res.render("./messages/message_detail", { message });
	}
}

function getNewMessage(req, res) {
	res.render("./messages/new_message");
}

function postNewMessage(req, res) {
	const { messageText, messageUser } = req.body;
	messages.push({
		text: messageText,
		user: messageUser,
		added: new Date(),
		id: messages.length,
	});
	res.redirect("/");
}

module.exports = {
	getMessage,
	getMessages,
	getNewMessage,
	postNewMessage,
};
