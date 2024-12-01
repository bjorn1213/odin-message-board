const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", messageController.getMessages);
messageRouter.get("/new", messageController.getNewMessage);
messageRouter.post("/new", messageController.postNewMessage);
messageRouter.get("/:messageId", messageController.getMessage);

module.exports = messageRouter;
