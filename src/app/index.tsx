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

export default App;
