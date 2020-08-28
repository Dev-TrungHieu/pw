var push = require("web-push");
let keys = push.generateVAPIDKeys();
console.log(keys);
const PUBLIC_KEY =
  "BAG0bBaKTNvRtuCV2f-uV8kWGOd_XsJche-u8Ujd6j78HcREjEJ58Gs_SuQ1uE0FwvdCyHX0nnLv2NkwNnuNCYc";
const PRIVATE_KEY = "7GHyCnw1-HDkOmW41_9sQZ9CN1pNlyuiuuanyQwYEBs";

push.setVapidDetails("mailto: team@teamdibo.tk", PUBLIC_KEY, PRIVATE_KEY);

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
