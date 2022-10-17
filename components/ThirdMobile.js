import React from "react";
import { Text, View, Image, Card, Hidden, HStack, Link } from "native-base";

import { vw, vh } from "react-native-expo-viewport-units";

import Applestore from "./ApplestoreMobile";
import Googleplay from "./GooglePlayMobile";

const ThirdFoldMBL = () => {
  return (
    <>
      <Hidden from="800" to="1024"> 
        <View safeAreaTop>
          <Image
            source={require("../assets/Realtorbg.png")}
            style={{ height: vh(100), width: vw(100) }}
            alt={"alternate text"}
            resizeMode="cover"
            // overflow={"hidden"}
          />
          <View
            marginTop={"100px"}
            alignSelf="center"
            opacity={1}
            position={"absolute"}
            style={{ width: vw(87.5) }}
          >
            <Card
              bg="#7D2BE9"
              borderRadius="25"
              // position="absolute"
              alignSelf={"center"}
              style={{ width: vw(87.5) }}
            >
              <Text
                marginTop={vh(3.5)}
                fontSize={vw(5.7)}
                textAlign="center"
                alignSelf={"center"}
                letterSpacing={"0px"}
                lineHeight={vh(5)}
                color={"#FFFFFF"}
                opacity={1}
                fontFamily="PoppinsSemiBold"
                style={{ width: vw(80) }}
              >
                {`The only app you would\n need as a relator`}
              </Text>

              <Text
                marginTop={vh(1)}
                fontSize={vw(4)}
                textAlign="center"
                alignSelf={"center"}
                letterSpacing={"0px"}
                lineHeight={vh(3.5)}
                color={"#FFFFFF"}
                opacity={1}
                fontFamily="HelveticaNeueLTStdRoman"
                style={{ width: vw(75) }}
              >
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              </Text>

              <HStack
                marginTop={vh(3.5)}
                marginBottom={vh(3.5)}
                space={vw(4)}
                m="auto"
                alignSelf={"center"}
              >
                {/* SVG-IMAGES- AppStore & PlayStore */}

                <Link
                  href="https://apps.apple.com/us/app/shadowproperties/id1491176685/"
                  isExternal
                >
                  <Applestore
                    resizeMode="cover"
                    overflow={"hidden"}
                    opacity={100}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=and.app.properties.shadow"
                  isExternal
                >
                  <Googleplay
                    resizeMode="cover"
                    overflow={"hidden"}
                    opacity={100}
                  />
                </Link>
              </HStack>
            </Card>
          </View>
        </View>
      </Hidden>
    </>
  );
};

export default ThirdFoldMBL;
