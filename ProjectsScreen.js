import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import huhrms1 from "./assets/images/huhrms/Home.png";
import huhrms2 from "./assets/images/huhrms/acount.png";
import huhrms3 from "./assets/images/huhrms/Meetings.png";
import huhrms4 from "./assets/images/huhrms/People.png";
import huhrms5 from "./assets/images/huhrms/Score.png";

import husms1 from "./assets/images/husms/login.png";
import husms2 from "./assets/images/husms/image.png";
import husms3 from "./assets/images/husms/imagee.png";
import husms4 from "./assets/images/husms/menu1.png";
import husms5 from "./assets/images/husms/menu2.png";
import husms6 from "./assets/images/husms/student.png";
import husms7 from "./assets/images/husms/student2.png";

import placetodine1 from "./assets/images/placestodine/Home1.png";
import placetodine2 from "./assets/images/placestodine/AddFood1.png";
import placetodine3 from "./assets/images/placestodine/AddRestaurant1.png";
import placetodine4 from "./assets/images/placestodine/image1.png";
import placetodine5 from "./assets/images/placestodine/imagee1.png";
import placetodine6 from "./assets/images/placestodine/Restaurant1.png";

import lole1 from "./assets/images/lole/lole.jpg";
import lole2 from "./assets/images/lole/Lock.png";
import lole3 from "./assets/images/lole/Battery.png";

import GridImageView from "react-native-grid-image-viewer";
import { LinearGradient } from "expo-linear-gradient";

const huhrmsUri1 = Image.resolveAssetSource(huhrms1).uri;
const huhrmsUri2 = Image.resolveAssetSource(huhrms2).uri;
const huhrmsUri3 = Image.resolveAssetSource(huhrms3).uri;
const huhrmsUri4 = Image.resolveAssetSource(huhrms4).uri;
const huhrmsUri5 = Image.resolveAssetSource(huhrms5).uri;

const husmsUri1 = Image.resolveAssetSource(husms1).uri;
const husmsUri2 = Image.resolveAssetSource(husms2).uri;
const husmsUri3 = Image.resolveAssetSource(husms3).uri;
const husmsUri4 = Image.resolveAssetSource(husms4).uri;
const husmsUri5 = Image.resolveAssetSource(husms5).uri;
const husmsUri6 = Image.resolveAssetSource(husms6).uri;
const husmsUri7 = Image.resolveAssetSource(husms7).uri;

const placetodineUri1 = Image.resolveAssetSource(placetodine1).uri;
const placetodineUri2 = Image.resolveAssetSource(placetodine2).uri;
const placetodineUri3 = Image.resolveAssetSource(placetodine3).uri;
const placetodineUri4 = Image.resolveAssetSource(placetodine4).uri;
const placetodineUri5 = Image.resolveAssetSource(placetodine5).uri;
const placetodineUri6 = Image.resolveAssetSource(placetodine6).uri;

const loleUri1 = Image.resolveAssetSource(lole1).uri;
const loleUri2 = Image.resolveAssetSource(lole2).uri;
const loleUri3 = Image.resolveAssetSource(lole3).uri;

const workDetails = {
  HUHRMS: {
    projectDesc:
      "human resource management system using laravel for Harambee University. it is software application used to store employee information and support various human resource functions, such as attendance, payroll, recruiting, etc.",
    projectType: "Web APP",
    roles: ["Full Stack Developer"],
    images: [huhrmsUri1, huhrmsUri2, huhrmsUri3, huhrmsUri4, huhrmsUri5],
  },
  Places_To_Dine: {
    projectDesc:
      "React Native app to find open restaurants near you that serve the food you want & fit your price range and remember your fav restaurants.",
    projectType: "React Native APP",
    roles: ["Front-end Developer"],
    images: [
      placetodineUri1,
      placetodineUri2,
      placetodineUri3,
      placetodineUri4,
      placetodineUri5,
      placetodineUri6,
    ],
  },
  HUSMS: {
    projectDesc:
      "Student management system using laravel for Harambee University. Some of the sub systems are: Administration Management, Student/Staff Information Management System, Academic Management, Student/Staff Attendance Management, etc.",
    projectType: "WEB APP",
    roles: ["Full Stack Developer"],
    images: [husmsUri1, husmsUri2, husmsUri3, husmsUri4, husmsUri5, husmsUri6],
  },
  Lole: {
    projectDesc:
      "Amharic voice assistant. Lole provides device controlling functions by using voice commands.  examples of the commands are: • ሙዚቃ ክፈት • ሚሴጅ ላክ • ስልክ ደውል • ቪድዮ ቅረፅ",
    projectType: "Desktop App & Android App",
    roles: ["Python developer"],
    images: [loleUri1, loleUri2, loleUri3],
  },
};

export const ProjectScreen = ({ route }) => {
  const ProjectName = route.params;

  return (
    <>
      <LinearGradient
        colors={["rgba(7, 27, 82, 1)", "rgba(0, 128, 128, 1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{ borderBottomStartRadius: 20 }}
      >
        <View style={{ paddingTop: 20, marginLeft: 20, borderRadius: 20 }}>
          <Text
            style={{
              fontFamily: "Bangers_400Regular",

              fontSize: 22,
            }}
          >
            {ProjectName.project}
          </Text>

          <Text
            style={{
              fontSize: 20,
              paddingTop: 20,
            }}
          >
            {workDetails[`${ProjectName.project}`].roles}
          </Text>

          <Text
            style={{
              fontSize: 18,
              paddingTop: 10,
            }}
          >
            {workDetails[`${ProjectName.project}`].projectDesc}
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.background}>
        {/* Basic Usage */}

        <GridImageView data={workDetails[`${ProjectName.project}`].images} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    elevation: 8,
  },
});
