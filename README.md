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

Add the dependency `react-native-wear-connectivity` to your [renative.json](https://github.com/fabOnReact/react-native-wear-connectivity-renative-example/blob/main/renative.json):

```json
"plugins": {
  "react-native-wear-connectivity": {
    "version": "^0.1.9"
  }
}
```

- Pair the Android emulator with the Wear OS emulator ([instructions][21]).
- Implement the [example](#example-of-implementation) in [src/app/index.tsx](https://github.com/fabOnReact/react-native-wear-connectivity-renative-example/blob/main/src/app/index.tsx).

For more info refer to the github repository
[react-native-wear-connectivity](https://github.com/fabOnReact/react-native-wear-connectivity),
the official renative [documentation](https://next.renative.org) and the
[renative github repository](https://github.com/flexn-io/renative).

[21]: https://developer.android.com/training/wearables/get-started/connect-phone

## Example of implementation

Example implementation of the above counter application for WearOS and Android Mobile.

```js
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { sendMessage, watchEvents } from "react-native-wear-connectivity";

function App() {
  return <CounterScreen />;
}

function CounterScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = watchEvents.on("message", () => {
      setCount((prevCount) => prevCount + 1);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onSuccess = (result) => console.log(result);
  const onError = (error) => console.log(error);

  const sendMessageToWear = () => {
    const json = { text: "hello" };
    sendMessage(json, onSuccess, onError);
  };

  return (
    <View style={styles.container}>
      <Button title="increase counter" onPress={sendMessageToWear} />
      <Text style={styles.count}>The count is {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDFDFD",
  },
  count: {
    borderRadius: 3,
    padding: 5,
    backgroundColor: "#9C9A9D",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default App;
```
