This is an example on how to install [react-native-wear-connectivity](https://github.com/fabOnReact/react-native-wear-connectivity) with renative.

https://github.com/user-attachments/assets/952c9592-7571-4dce-b5d2-98ef4beea2bb

## Installing react-native-wear-connectivity with renative

Create a new renative app for android and wearos:

```sh
npx rnv new
```

Change folder to the newly created app and run yarn install:

```sh
cd YourFolder
yarn install
```

Run the app on the WearOS Emulator:

```sh
yarn rnv run -p android
```

Run the app on the WearOS Emulator:

```sh
yarn rnv run -p androidwear -d
```

Add the dependency `react-native-wear-connectivity` to your `renative.json`:

```json
"plugins": {
  "react-native-wear-connectivity": {
    "version": "^0.1.9"
  }
}
```

- Pair the Android emulator with the Wear OS emulator ([instructions][21]).
- Implement the [example](#example-of-implementation) in `src/app/index.tsx`.

I published an [example](https://github.com/fabOnReact/react-native-wear-connectivity-renative-example) of an app implemented with renative.
For more info refer to the github repository
[react-native-wear-connectivity](https://github.com/fabOnReact/react-native-wear-connectivity),
the official renative [documentation](https://next.renative.org) and the
[renative github repository](https://github.com/flexn-io/renative).
