import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapperStyle}>
        <ImageBackground
          source={require("../assets/food.jpg")}
          style={styles.imageContainerStyle}
          imageStyle={styles.imageInternalStyle}
        >
          <View style={styles.imageContentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.subtitleTextStyle}>Welcome to</Text>
              <Text style={styles.titleTextStyle}>Little Italy</Text>
              <View style={styles.divider} />
              <Text style={styles.placeTextStyle}>Sadashiv Nagar</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/share.png")}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          />
        </ImageBackground>
        <View style={styles.bottomViewContainer}>
          <TouchableOpacity style={styles.exploreButtonContainer}>
            <ImageBackground
              source={require("../assets/food.jpg")}
              style={{
                width: 200,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
              }}
              imageStyle={{ borderRadius: 30 }}
              blurRadius={40}
            >
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Explore Now
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.15 }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            flexDirection: "row",
            flex: 1,
            marginVertical: 25,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 0.2,
            }}
          >
            <Ionicons name="md-receipt-outline" color="purple" size={30} />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "center",
              flex: 0.6,
            }}
          >
            <Text style={{ fontSize: 16, color: "purple" }}>
              Pay dining bills
            </Text>
            <Text style={{ fontSize: 14, color: "purple" }}>
              Pay your dining bill digitally
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 0.2,
              backgroundColor: "#fcf0c6",
            }}
            onPress={() => navigation.navigate("Payment")}
          >
            <Ionicons name="chevron-forward" color="#000" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  imageWrapperStyle: {
    width: "100%",
    height: "90%",
    flex: 0.85,
    alignItems: "center",
  },
  imageContainerStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  imageInternalStyle: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textStyle: {
    color: "#fff",
  },
  imageContentContainer: {
    flex: 0.3,
    flexDirection: "row",
    paddingTop: 80,
    paddingHorizontal: 20,
    zIndex: 3,
  },
  titleContainer: {
    flex: 0.9,
  },
  subtitleTextStyle: {
    color: "#fff",
    fontSize: 16,
  },
  titleTextStyle: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    paddingTop: 10,
  },
  divider: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    width: 100,
    paddingTop: 10,
  },
  iconContainer: {
    flex: 0.1,
    paddingTop: 5,
  },
  placeTextStyle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "100",
    paddingTop: 10,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  bottomViewContainer: {
    flex: 0.2,
    position: "absolute",
    bottom: 50,
  },
  exploreButtonContainer: {
    width: 200,
    height: 45,
  },
});

export default HomeScreen;
