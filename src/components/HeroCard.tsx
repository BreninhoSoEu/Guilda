import { StyleSheet, Text, View } from "react-native";

type HeroCardProps = {
  name: string;
  heroClass: string;
};

export default function HeroCard({ name, heroClass }: HeroCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.heroClass}>Classe: {heroClass}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F3F0FA",
    borderWidth: 1,
    borderColor: "#DDD6F0",
  },
  name: {
    color: "#2D1B4E",
    fontSize: 17,
    fontFamily: "Inter_600SemiBold",
  },
  heroClass: {
    marginTop: 6,
    color: "#625779",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
});