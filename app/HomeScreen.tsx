import { HomeHeader } from "@/components/home-header";
import { StoriesContainer } from "@/components/stories-container";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
    <SafeAreaView style={styles.page}>
      <HomeHeader />
      <StoriesContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 12
  },
})