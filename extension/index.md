# Extension

An Extension should be a dynamic-feature module in Android. It provides the abilities of communication through specified chat protocol, including transport, crypto and others, but the data management should be from app.

The file describle what capabilities this app would provides to extensions. Extension should be hosted in a background running service, through injected repositories and helpers to control data of conversations.

```kotlin
@AndroidEntryPoint
class ExtensionService : Service() {
    @Inject
    lateinit var repo: MessageRepository

    override fun onCreate() {
        super.onCreate();
        repo?.registerNameHandler() { name ->
            return name;
        };
    }
};
```

You should register the service name in app and then we would lanuch it when started.
