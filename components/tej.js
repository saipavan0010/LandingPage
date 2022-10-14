import React, { useState } from "react";
import {
  NativeBaseProvider,
  Image,
  Box,
  Center,
  Text,
  Divider,
  VStack,
  HStack,
  Icon,
  Link,
  ScrollView,
  Button,
  Pressable,
} from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import GetStarted from "./GetStartesCard";
import Forminput from "./inputForm";
import Copyrights from "./copyrights";
import Mailus from "./mail";
import Feelfree from "./feelfree";
import Terms from "./terms";
import Getintouch from "./getintouch";
const { height, width } = Dimensions.get("window");

const App = ({ navigation }) => {
  const [index, setindex] = useState(1);
  return (
    <>
      <Box top={3920}>
        <Box safeAreaTop />
        <Center>
          <Image
            resizeMethod="scale"
            source={require("../assets/get_started.png")}
            height={height * 1.2}
            width={width}
            position={"absolute"}
          />
          <Box mt={height * 0.1}>
            <GetStarted />
          </Box>
        </Center>
        <Box>
          <Image
            source={require("../assets/getintouch.png")}
            height={height}
            width={width}
          />
          <Box position={"absolute"} width={width}>
            <Box mt={height * 0.2} />
            {width < 800 ? (
              <>
                <Box backgroundColor={"rgba(251,250,251,0.7)"}>
                  <Center>
                    <Getintouch />
                    <Forminput />
                    <Box mt={5}>
                      <Link href="mailto:info@shadow.properties" isExternal>
                        <Mailus />
                      </Link>
                    </Box>
                    <Feelfree />
                    <Divider mt={8} width={width * 0.9} />
                    <Box m={5}>
                      <Terms />
                    </Box>
                    <Box mb={5}>
                      <Copyrights />
                    </Box>
                  </Center>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Box mt={10} />
                  <Center>
                    <HStack>
                      <VStack mr={"auto"} ml={-8}>
                        <Getintouch />
                        <Link href="mailto:info@shadow.properties" isExternal>
                          <Mailus />
                        </Link>
                        <Box ml={12}>
                          <Feelfree />
                        </Box>
                      </VStack>
                      <Box mt={4} ml={"20"} pl={10} mr={-8}>
                        <Forminput />
                      </Box>
                    </HStack>
                  </Center>
                  <Box mt={20} />
                  <Center>
                    <Box width={width * 0.8}>
                      <Center>
                        <Divider
                          h={"2pt"}
                          backgroundColor={"rgb(218,212,229)"}
                          width={width * 0.72}
                          left={5}
                          mb={10}
                        />
                      </Center>
                      <HStack>
                        <Box ml={20}>
                          <Copyrights />
                        </Box>
                        <Box ml={"auto"} mr={10}>
                          <Terms navigation={navigation} />
                        </Box>
                      </HStack>
                    </Box>
                  </Center>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  whiteBg: {
    backgroundColor: "white",
    variant: "unstyled",
    borderRadius: 30,
    padding: 10,
    width: 120,
    height: 50,
  },
  blueBg: {
    backgroundColor: "blue",
    variant: "unstyled",
    borderRadius: 30,
    padding: 10,
    width: 120,
    height: 50,
  },
});
