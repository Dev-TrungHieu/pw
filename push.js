var push = require("web-push");
const PUBLIC_KEY =
  "BLT_cjs_Oifc5CKDemkNCRcPoVkaa5oClej_oYOrXFDYgocg70T205MnDIkMZhOUBGQ2-RMOFfuGfQ2-GNkNX0c";
const PRIVATE_KEY = "S2kJVVSeIrrxaqu38h7mgLwBjGCxvxrGi-rMqKjuKvs";

push.setVapidDetails(
  "maito: truongtrung.hieu0812@gmail.com",
  PUBLIC_KEY,
  PRIVATE_KEY
);

let sub = {};
push.sendNotification(sub, "text message");
