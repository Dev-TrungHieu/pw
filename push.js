var push = require("web-push");
const PUBLIC_KEY =
  "BLT_cjs_Oifc5CKDemkNCRcPoVkaa5oClej_oYOrXFDYgocg70T205MnDIkMZhOUBGQ2-RMOFfuGfQ2-GNkNX0c";
const PRIVATE_KEY = "S2kJVVSeIrrxaqu38h7mgLwBjGCxvxrGi-rMqKjuKvs";

push.setVapidDetails(
  "mailto: truongtrung.hieu0812@gmail.com",
  PUBLIC_KEY,
  PRIVATE_KEY
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dcBVezZevhk:APA91bGqhcumGMSa5P7O38JdG5pxYvPsvgnKDGfF6ruUJbI32jM2WZqew3UZGv8CNboTUNr3PdYYWUuXBxF2hk7ghox4RqbGO1D5Am0m-WZO7lXKKZtytAC4vsU1TiQyxJ5uF0bhHBgT",
  expirationTime: null,
  keys: {
    p256dh:
      "BJq_hwMLcl3CqvDw6FJc0Pm151wmyL8URuEZOTEekl6NMzPCxpAPO5SOPHsOZH6nIgBWf4bmKW9pQWnI5rgpkls",
    auth: "kSq_D-FUh195jIgUS0iROQ",
  },
};
push.sendNotification(sub, "text message");
