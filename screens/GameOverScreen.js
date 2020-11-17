import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Colors from "../constants/colors";
import DefaultStyle from "../constants/default-styles";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyle.titleText}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
          // }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{ ...DefaultStyle.bodyText, ...styles.bodyText }}>
          Your phone needed
          <Text style={styles.highlight}> {props.roundsNumber} </Text>
          rounds to guess the number
          <Text style={styles.highlight}> {props.userNumber} </Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bodyText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
