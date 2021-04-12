import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Keys } from "./Keys";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const PaymentScreen = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [checked, setChecked] = React.useState("first");
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderKeyInputs = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          height: 95,
          width: 95,
          borderRadius: 15,
          margin: 5,
        }}
        onPress={() => addAmount(item.key)}
      >
        {item.key === "chevron-back" ? (
          <Ionicons name="chevron-back" color="#000" size={35} />
        ) : (
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.key}</Text>
        )}
      </TouchableOpacity>
    );
  };

  const addAmount = (value) => {
    if (value === "chevron-back") {
      setAmount(amount.slice(0, amount.length - 1));
    } else {
      setAmount(amount.concat(value));
    }
  };

  const popup = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          justifyContent: "flex-end",
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <View style={{ flex: 0.7, width: "100%", position: "absolute" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 20 }}
            >
              Log In To Continue
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>+91 - </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#aeaeae" }}
              >
                Enter Mobile Number
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                width: "75%",
                paddingTop: 10,
              }}
            />
            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
                <Text>SMS OTP</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                />
                <Text>WhatsApp</Text>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Select Order Type</Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
                <Text>Dine In</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                />
                <Text>Take Away</Text>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Enter OTP</Text>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <View
                    // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[styles.cellRoot, isFocused && styles.focusCell]}
                  >
                    <Text style={styles.cellText}>{symbol || null}</Text>
                  </View>
                )}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#f8f6f2",
                  width: 350,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={() => {
                  setOpenPopup(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            padding: 20,
            paddingTop: 20,
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.4 }}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="md-receipt-outline" color="purple" size={25} />
                <Text
                  style={{ fontSize: 16, fontWeight: "700", paddingLeft: 15 }}
                >
                  Bill Amount
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>₹</Text>
                {amount ? (
                  <Text
                    style={{
                      fontSize: 35,
                      fontWeight: "bold",
                      paddingLeft: 15,
                      color: "#000",
                    }}
                  >
                    {amount}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#b7b7b7",
                      paddingLeft: 15,
                    }}
                  >
                    Amount
                  </Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>Enter Amount on your bill</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.6 }}>
            <Image
              source={require("../assets/Wavy_Tech-31_Single-03.jpg")}
              style={{ width: 150, height: 120 }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.65,
            backgroundColor: "#fff",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#f5f7fd",
              padding: 15,
              borderRadius: 15,
            }}
          >
            <FlatList
              data={Keys}
              renderItem={renderKeyInputs}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#b7b7b7",
              width: 350,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              setOpenPopup(true);
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Proceed to Pay
            </Text>
          </TouchableOpacity>
        </View>
        {openPopup && popup()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: "center", fontSize: 30 },
  codeFiledRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});

export default PaymentScreen;
