// import React from "react";
// import { Text, Stack, Divider, HStack, Box } from "native-base";
// import { Pressable } from "react-native";
// import Privacy from "./Privacy";
// import TopBar from "./Topbar";

// const Terms = ({ navigation }) => {
//   // const Toprivacy = () => {
//   //   navigation.navigate("Privacy");
//   // };
//   return (
//     <>
//       <Box zIndex={999}>
//         <HStack>
//           <Pressable
//             onPress={() => {
//               navigation.navigate("TnC");
//             }}
//           >
//             <Text
//               color="#988AB4"
//               // ml={["", "", "150", "300"]}
//               fontWeight={"normal"}
//               fontSize={"18"}
//             >
//               Terms
//             </Text>
//           </Pressable>

//           <Stack>
//             <Divider
//               orientation="vertical"
//               thickness={1}
//               fontWeight="bold"
//               bg="rgb(152,138,180)"
//               ml={["2"]}
//               height="25"
//             />
//           </Stack>
//           <Pressable
//             onPress={() => {
//               navigation.navigate("Privacy");
//             }}
//           >
//             <Text
//               ml={"2"}
//               color="#988AB4"
//               fontWeight={"normal"}
//               fontSize={"18"}
//             >
//               privacy
//             </Text>
//           </Pressable>

//           <Stack>
//             <Divider
//               orientation="vertical"
//               thickness={1}
//               fontWeight="bold"
//               bg="rgb(152,138,180)"
//               ml={["2"]}
//               height="25"
//             />
//           </Stack>
//           <Pressable
//             onPress={() => {
//               navigation.navigate("Faqs");
//             }}
//           >
//             <Text
//               ml={"2"}
//               color="#988AB4"
//               fontWeight={"normal"}
//               fontSize={"18"}
//             >
//               FAQs
//             </Text>
//           </Pressable>
//         </HStack>
//       </Box>
//     </>
//   );
// };
// export default Terms;

import React from "react";
import { Text, Stack, Divider, HStack, Box } from "native-base";
import { Pressable } from "react-native";

const Terms = ({ navigation }) => {
  return (
    <>
      <Box>
        <HStack>
          <Pressable
            onPress={() => {
              navigation.navigate("TnC");
            }}
          >
            <Text
              color="#988AB4"
              // ml={["", "", "150", "300"]}
              fontWeight={"normal"}
              fontSize={"18"}
            >
              Terms
            </Text>
          </Pressable>

          <Stack>
            <Divider
              orientation="vertical"
              thickness={1}
              fontWeight="bold"
              bg="rgb(152,138,180)"
              ml={["2"]}
              height="25"
            />
          </Stack>
          <Pressable
            onPress={() => {
              navigation.navigate("Privacy");
            }}
          >
            <Text
              ml={"2"}
              color="#988AB4"
              fontWeight={"normal"}
              fontSize={"18"}
            >
              Privacy
            </Text>
          </Pressable>

          <Stack>
            <Divider
              orientation="vertical"
              thickness={1}
              fontWeight="bold"
              bg="rgb(152,138,180)"
              ml={["2"]}
              height="25"
            />
          </Stack>
          <Pressable
            onPress={() => {
              navigation.navigate("Faqs");
            }}
          >
            <Text
              ml={"2"}
              color="#988AB4"
              fontWeight={"normal"}
              fontSize={"18"}
            >
              FAQs
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </>
  );
};
export default Terms;
