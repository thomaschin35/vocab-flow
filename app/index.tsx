import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import images from "../constants/images";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

export default function Index() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.43, 0.43]}
      colors={[
        Colors.main.topBackground,
        Colors.main.topBackground,
        Colors.main.bottomBackground,
      ]}
    >
      <SafeAreaView className="flex-auto h-full">
        <ScrollView className="flex-1 w-full">
        <View className="flex-1 w-full items-center min-h-[90vh] px-5 space-y-">
          <View className="justify-center mt-7 space-y-5">
            <Text className="text-white font-hheavy text-4xl text-center">
              VocabFlow
            </Text>
            <Image
              source={images.landingImage}
              className="w-max-[300px] h-[270px]"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 space-y-4 items-center justify-center">
            <Text className="text-black font-hmedium text-3xl text-center">
              Expand your Vocabulary using
              <Text className=" text-primary"> AI </Text>
            </Text>
            <Text className="text-black font-hlight text-lg text-center">
              Personalize education with ease through auto-generated flashcards
            </Text>
          </View>
          <View className="items-center justify-center m-7 mt-auto w-full space-y-2">
            <CustomButton title="Get Started" containerStyles="w-full p-2" textStyles="text-xl" />
            <Text className="text-black font-hlight text-base text-center">
              Already have an account? <Link href="/sign-in" className="text-secondary font-hbold"> Sign In</Link>
            </Text>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
