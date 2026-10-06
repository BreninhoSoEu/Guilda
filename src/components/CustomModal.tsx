import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (name: string, heroClass: string) => void;
};

export default function CustomModal({
  visible,
  onClose,
  onSave,
}: CustomModalProps) {
  const [name, setName] = useState("");
  const [heroClass, setHeroClass] = useState("");

  function handleSave() {
    if (!name.trim() || !heroClass.trim()) {
      Alert.alert(
        "Campos obrigat\u00F3rios",
        "Preencha o nome e a classe do her\u00F3i.",
      );
      return;
    }

    onSave(name.trim(), heroClass.trim());
    setName("");
    setHeroClass("");
  }

  function handleClose() {
    setName("");
    setHeroClass("");
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>{"Cadastrar her\u00F3i"}</Text>

          <Image
            source={require("../../assets/images/DarkSouls.jpg")}
            style={styles.image}
          />

          <Text style={styles.label}>{"Nome do her\u00F3i"}</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Ex.: Gandalf"
            style={styles.input}
          />

          <Text style={styles.label}>Classe</Text>
          <TextInput
            value={heroClass}
            onChangeText={setHeroClass}
            placeholder="Ex.: Mago"
            style={styles.input}
          />

          <Pressable style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>Salvar</Text>
          </Pressable>

          <Pressable style={styles.cancelButton} onPress={handleClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 16,
    color: "#2D1B4E",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Inter_700Bold",
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 8,
  },
  label: {
    marginBottom: 6,
    color: "#333333",
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    fontFamily: "Inter_400Regular",
  },
  saveButton: {
    alignItems: "center",
    padding: 13,
    borderRadius: 8,
    backgroundColor: "#5B3CC4",
  },
  saveText: {
    color: "#FFFFFF",
    fontFamily: "Inter_600SemiBold",
  },
  cancelButton: {
    alignItems: "center",
    paddingTop: 14,
  },
  cancelText: {
    color: "#666666",
    fontFamily: "Inter_400Regular",
  },
});