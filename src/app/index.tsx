import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CustomModal from "../components/CustomModal";
import HeroCard from "../components/HeroCard";

type Hero = {
  id: string;
  name: string;
  heroClass: string;
};

export default function HomeScreen() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addHero(name: string, heroClass: string) {
    setHeroes((currentHeroes) => [
      ...currentHeroes,
      { id: Date.now().toString(), name, heroClass },
    ]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Guilda de Her\u00F3is"}</Text>
      <Text style={styles.subtitle}>Cadastre os membros da sua guilda.</Text>

      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>{"Cadastrar her\u00F3i"}</Text>
      </Pressable>

      <Text style={styles.listTitle}>{"Her\u00F3is cadastrados"}</Text>

      {heroes.length === 0 ? (
        <Text style={styles.emptyText}>
          {"Nenhum her\u00F3i cadastrado ainda."}
        </Text>
      ) : (
        <FlatList
          data={heroes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HeroCard name={item.name} heroClass={item.heroClass} />
          )}
          contentContainerStyle={styles.list}
        />
      )}

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={addHero}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
  },
  title: {
    color: "#2D1B4E",
    fontSize: 28,
    fontFamily: "Inter_700Bold",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    color: "#666666",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  button: {
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#5B3CC4",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
  listTitle: {
    marginTop: 28,
    marginBottom: 12,
    color: "#2D1B4E",
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },
  emptyText: {
    color: "#777777",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  list: {
    gap: 10,
    paddingBottom: 20,
  },
});