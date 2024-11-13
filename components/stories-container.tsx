import { ScrollView, StyleSheet, View } from "react-native"
import { StoryUserImage } from "./story-user-image"

export const StoriesContainer = () => {
  return (
    <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false} 
      style={styles.storyContainer}
    >
      <StoryUserImage />
      <StoryUserImage />
      <StoryUserImage />
      <StoryUserImage />
      <StoryUserImage />
      <StoryUserImage />
      <StoryUserImage />
      <StoryUserImage />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  storyContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    flexGrow: 1,
    paddingHorizontal: 16,
    overflow: "scroll"
  }
})