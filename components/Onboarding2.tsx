import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { containers } from "../styles/Containers";

export default function Onboarding2() {
  return (
    <View style={containers.centered}>
      <View style={styles.info}>
        <Text>Edit and expand stories created by others as you play them</Text>
      </View>
      <View style={styles.playContainer}>
        <Text style={styles.title}>Mars</Text>
        <Text style={styles.play}>&gt; edit location</Text>
      </View>
      <View style={[styles.editContainer]}>
        <Text style={styles.subtitle}>Edit location</Text>
        <View style={styles.row}>
          <Text>Title</Text>
          <Text style={styles.editableBox}>Asteroid belt</Text>
        </View>
        <View style={styles.row}>
          <Text>Description</Text>
          <Text style={styles.editableBox}>You enter an asteroid belt</Text>
        </View>
        <View style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 18,
  },
  info: {
    marginRight: "45%",
    marginLeft: "5%",
    marginTop: 30,
    marginBottom: -20,
    textAlign: "left",
    width: "50%",
    borderColor: "#dddddd",
    borderWidth: 1,
    padding: 10,
    zIndex: 100,
    backgroundColor: "#ffffff",
  },
  playContainer: {
    marginRight: "5%",
    marginLeft: "45%",
    textAlign: "left",
    width: "50%",
    padding: 10,
    backgroundColor: "#111166",
    minHeight: 200,
  },
  play: {
    color: "#ffffff"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#ffffff"
  },
  editContainer: {
    borderRadius: 10,
    marginRight: "10%",
    marginLeft: "10%",
    textAlign: "left",
    width: "80%",
    borderColor: "#dddddd",
    borderWidth: 1,
    padding: 10,
    zIndex: 100,
    backgroundColor: "#ffffff",
    marginTop: -100
  },
  saveButton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#339933',
    marginTop: 5,
    width: "50%",
    marginLeft: "25%",
    marginRight: "25%",
  },
  saveButtonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  editableBox: {
    padding: 4,
    borderWidth: 1,
    borderColor: "#333333",
    minWidth: 150,
  }
});
