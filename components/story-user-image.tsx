import { LinearGradient } from "expo-linear-gradient"
import { Image, Text, View, StyleSheet } from "react-native"

type StoryUserImageProps = {
  image?: string,
  name?: string
}

export const StoryUserImage = ({
  image,
  name
}: StoryUserImageProps) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.gradientParent}>
        <LinearGradient
          colors={['#A60F93', '#D91A46', '#FBAA47']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        >
          <Image 
            source={{
              uri: image ? image : 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-olly-712513.jpg&fm=jpg'
            }} 
            style={styles.image}
          />
        </LinearGradient>
      </View> 
      <Text style={styles.text}>{name ? name: 'Yasmin'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    width: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  gradientParent: {
    width: 90,
    height: 90,
  },
  gradient: {
    width: '100%', 
    height: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 3, 
    borderRadius: 100
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 48,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 3
  },
  text: {
    color: '#FFF',
    fontSize: 14
  }
})