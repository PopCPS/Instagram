import { StyleSheet, View } from "react-native"
import { SvgXml } from 'react-native-svg';

export const HomeHeader = () => {

  const cameraIcon = require('../assets/images/icons/camera-icon.svg');
  console.log(cameraIcon);
  return (
    <View style={styles.mainContainer}>
      <SvgXml xml={require('../assets/images/icons/camera-icon.svg')} />
      <SvgXml xml={require('../assets/images/icons/instagram-logo.svg')} />
      <SvgXml xml={require('../assets/images/icons/messenger.svg' )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    flex: 1,
  }
})