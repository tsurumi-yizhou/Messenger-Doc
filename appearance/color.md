# Color

## Dynamic Color

Since Android 12, dynamic colors is imported. You can simply use it with:

```kotlin
val colorscheme = dynamicLightColorScheme(context);
```

Or in traditional View systems, use:

```kotlin
DynamicColors.applyToActivitiesIfAvailable(context);
```

Then import colors defined in theme.

Of course, dark mode is also one of dynamic colors. You can even do not adapt the dynamic colors like Huawei, to create a feeling pf business.

On some UI, for sample, OneUI, its system apps would use special colorscheme. The only known case is that [oneui-design](https://github.com/OneUIProject/oneui-design) can fetch it.

## Morandi Colors

Here we have some beautiful colors:
| light | dark | half-transparent |
| :-: | :-: | :-: |
| #BBB2C8 | #392F49 | #BBB2C8 |
| #B6C5D1 | #343E4A | #B6C5D1 |
| #A6C2BE | #354B47 | #A6C2BE |
| #B6C6B3 | #3C4B34 | #B6C6BE |
| #C1C8AC | #444B34 | #C1B1C8 |
| #D1BFC5 | #443038 | #D1BFC5 |
| #CFB4B4 | #462F2F | #CFB4B4 |
| #D4BFB8 | #463630 | #D4BFB8 |
| #D2C3B2 | #4B3F35 | #D2C3B2 |
| #D2CAB3 | #4A4333 | #D2CAB3 |
