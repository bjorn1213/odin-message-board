const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", messageController.getMessages);
messageRouter.get("/new", messageController.getNewMessage);
messageRouter.post("/new", messageController.postNewMessage);

module.exports = messageRouter;
