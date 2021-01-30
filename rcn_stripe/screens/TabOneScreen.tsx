import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import axios from "axios";
import PaymentView from "../components/PaymentView";

export default function TabOneScreen() {
  const [response, setResponse] = useState();

  const [makePayment, setMakePayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const cartInfo = {
    id: "5eruyt35eggr76476236523t3",
    description: "T Shirt - With react Native Logo",
    amount: 1,
  };

  return (
    <View style={styles.container}>
      <PaymentView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
