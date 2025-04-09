import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { signInWithCredential, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [user, setUser] = useState<User | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "https://auth.expo.io/@phxyzhique/AtvLogin",
    androidClientId: "1072226435417-rse29g2qt99npkel707q9orb9rgdv28a.apps.googleusercontent.com",
    webClientId: "1072226435417-rse29g2qt99npkel707q9orb9rgdv28a.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication!;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).then(userCred => {
        setUser(userCred.user);
      });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bem-vindo,</Text>
          <Text style={styles.nameText}>{user.displayName}</Text>
        </View>
      ) : (
        <Pressable style={styles.googleButton} onPress={() => promptAsync()} disabled={!request}>
          <Image
            source={{ uri: "https://img.icons8.com/color/512/google-logo.png" }}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  welcomeContainer: {
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 18,
    color: "#555",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginTop: 4,
  },
});
