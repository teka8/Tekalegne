import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  Animated,
  Linking,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedTyping from "./AnimatedTyping";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import {
  useFonts as useOswald,
  KolkerBrush_400Regular,
} from "@expo-google-fonts/kolker-brush";
import huhrms from "./assets/images/huhrm.jpg";
import placetodine from "./assets/images/PlaceToDine.png";
import husms from "./assets/images/husms.png";
import lole from "./assets/images/lole.jpg";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const Colors = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#a4a4a4",
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-php",
  "language-python",
  "language-java",
  "language-typescript",
  "language-cpp",
  "language-kotlin",
];

const projects = [
  { name: "HUSMS", source: husms },
  { name: "HUHRMS", source: huhrms },
  { name: "Places_To_Dine", source: placetodine },
  { name: "Lole", source: lole },
];

const fonts = {
  body: "Oswald_400Regular",
};

export const HOmeScreen = ({ navigation }) => {
  let [greetingCompleted, setGreetingCompleted] = useState(false);

  const [oswaldLoaded] = useOswald({
    KolkerBrush_400Regular,
  });
  const [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });
  if (!oswaldLoaded || !fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />
      <LinearGradient
        colors={["rgba(7, 27, 82, 1)", "rgba(0, 128, 128, 1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View
          style={{
            paddingBottom: Layout.height * 0.2,
            borderBottomLeftRadius: Layout.width * 0.1,
            borderBottomRightRadius: Layout.width * 0.1,
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              paddingHorizontal: 32,
              marginVertical: 20,
            }}
          >
            <SimpleLineIcons
              name="equalizer"
              size={20}
              style={{ color: Colors.white }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: Layout.width / 12.27,
              marginVertical: 36,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <FadeInView>
              <Image
                source={require("./assets/images/teka.jpg")}
                style={{
                  width: Layout.width / 5.61,
                  height: 100,

                  marginRight: 16,
                }}
              />
            </FadeInView>
            <View>
              <AnimatedTyping
                text={["Tekalegne Defar"]}
                style={{
                  fontFamily: "KolkerBrush_400Regular",
                  fontSize: Layout.width / 5.61,
                }}
                onComplete={() => setGreetingCompleted(true)}
              />
              {greetingCompleted ? (
                <AnimatedTyping
                  text={["Software Developer"]}
                  style={{
                    fontFamily: "Bangers_400Regular",
                    fontSize: 24,
                    justifyContent: "center",
                  }}
                />
              ) : undefined}
            </View>
          </View>
        </View>
      </LinearGradient>

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
          marginTop: -Layout.height * 0.15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Bangers_400Regular",
              color: "#0ccac4",
              fontSize: 18,
            }}
          >
            Bio
          </Text>
          <AntDesign name="user" size={20} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: Colors.greyish }}>
            Hello! My name is Tekalegne Defar and I am a seasoned software
            expert who has developed products for enterprise clients such as See
            Tech, Harambee University, and Hawi Software Solution , as well as
            many venture-backed businesses. I have done work in software
            development, mobile app creation, front-end/back-end web and
            database/server management.
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Bangers_400Regular",
              color: "#0ccac4",
              fontSize: 18,
            }}
          >
            Skills
          </Text>
          <MaterialCommunityIcons name="pen" size={20} />
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {skillIcons.map((skill) => (
            <View
              key={skill}
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                borderWidth: 2,
                borderColor: Colors.theme,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons
                name={skill}
                size={30}
                style={{ color: Colors.theme }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView horizontal>
        {projects.map((project) => (
          <LinearGradient
            key={project.name}
            colors={["rgba(7, 27, 82, 1)", "rgba(0, 128, 128, 1)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={{
              marginHorizontal: 8,
              padding: 20,
              borderRadius: 16,
              marginBottom: 16,
              alignItems: "center",
              width: Layout.width * 0.7,
            }}
          >
            <View>
              <Text style={{ fontSize: 20, color: Colors.white }}>
                {project.name}
              </Text>

              <Image
                source={project.source}
                style={{
                  width: 140,
                  height: 170,
                  marginVertical: 40,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Project", {
                    project: project.name,
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}
                >
                  <Text style={{ color: Colors.theme }}>View Project</Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Bangers_400Regular",
              color: "#0ccac4",
              fontSize: 18,
            }}
          >
            Contact me
          </Text>
        </View>
        <View
          style={{
            marginVertical: 8,
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="github"
            size={60}
            style={{ color: Colors.theme }}
            onPress={() => Linking.openURL("https://github.com/teka8")}
          />

          <MaterialCommunityIcons
            name="email"
            size={60}
            style={{ color: Colors.theme }}
            onPress={() => Linking.openURL("mailto:tekadefra8@gmail.com")}
          />

          <MaterialCommunityIcons
            name="facebook"
            size={60}
            style={{ color: Colors.theme }}
            onPress={() => Linking.openURL("http://google.com")}
          />
        </View>
      </View>
    </ScrollView>
  );
};
