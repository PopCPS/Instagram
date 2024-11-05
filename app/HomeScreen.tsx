import { StoryUserImage } from "@/components/story-user-image";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
    <SafeAreaView style={styles.page}>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
      >
        <View style={styles.storyContainer}>
          <StoryUserImage />
          <StoryUserImage />
          <StoryUserImage />
          <StoryUserImage />
          <StoryUserImage />
          <StoryUserImage />
          <StoryUserImage />
          <StoryUserImage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    paddingVertical: 12
  },
  storyContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    flexGrow: 1,
    paddingHorizontal: 16,
    overflow: "scroll"
  }
})