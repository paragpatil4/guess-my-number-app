import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../constants/game/Title";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize= 150;
  }

  if (height < 380) {
    imageSize= 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
  };

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game Over!!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your device needed <Text style={styles.highlight} >{roundsNumber}</Text> rounds to guess the number{" "}
        <Text style={styles.highlight} >{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    // width: deviceWidth < 360 ? 150 : 300,
    // height: deviceWidth < 360 ? 150 : 300,
    // borderRadius: deviceWidth < 360 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24,
  },

  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
  }

});
