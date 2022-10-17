import React from "react";
import { Text, Stack, Divider, HStack, Box } from "native-base";

const Terms = () => {
  return (
    <>
      <Box>
        <HStack>
          <Text
            color="#988AB4"
            // ml={["", "", "150", "300"]}
            fontWeight={"normal"}
            fontSize={"18"}
          >
            Terms
          </Text>

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

          <Text ml={"2"} color="#988AB4" fontWeight={"normal"} fontSize={"18"}>
            Privacy
          </Text>

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

          <Text ml={"2"} color="#988AB4" fontWeight={"normal"} fontSize={"18"}>
            FAQs
          </Text>
        </HStack>
      </Box>
    </>
  );
};
export default Terms;
