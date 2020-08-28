self.addEventListener("push", function (e) {
  var options = {
    body: "This notification was generated from a push!",
    icon: "https://img.icons8.com/bubbles/2x/google-logo.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "https://img.icons8.com/bubbles/2x/google-logo.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };
  e.waitUntil(self.registration.showNotification("Hello world!", options));
});
