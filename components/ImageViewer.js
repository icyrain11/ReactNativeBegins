import { StyleSheet, Image } from "react-native";
export default function ImageViewer({ placehodlerImageSource }) {
  return <Image source={placehodlerImageSource} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
