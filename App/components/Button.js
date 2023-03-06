import { StyleSheet, View, Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Button({ label, theme }) {
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#000", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#880808" }]}
          onPress={() => alert('You pressed a button.')}
        >
          <MaterialCommunityIcons name="star-shooting-outline" size={24} color="white" />

          <Text style={[styles.buttonLabel, { color: "#FFF" }]}>{label}</Text>
        </Pressable>
    </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
  },
});