# Pushers

This document defined methods to upload push tokens to your server. Then your server should push notification to our push server, and we will push them into your phone.

We will provide Pusher data, which contains provider like Firebase, AppGallery, Unified, and you should fetch it as your extension service started and upload it to your servers.

```kotlin
val pushers = PusherCapability.getPusherList();
for (pusher in pushers) {
    // custom in your way
}
```
