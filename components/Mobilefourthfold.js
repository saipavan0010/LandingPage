import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import {
  Card,
  HStack,
  Heading,
  Box,
  VStack,
  Hidden,
  Center,
  NativeBaseProvider,
  Icon,
  useMediaQuery,
  Stack,
} from "native-base";

import Carousel from "react-native-x-carousel";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import PinProperties from "../assets/whatweoffer/PinProperties";
import AddProperties from "../assets/whatweoffer/BulkAddProperties";
import ParcelLookup from "../assets/whatweoffer/ParcelLookup";
import MLSProperties from "../assets/whatweoffer/MLSProperties";
import OwnerLookup from "../assets/whatweoffer/OwnerLookup";
import SmartSearch from "../assets/whatweoffer/SmartSearch";
import AutomatedMails from "../assets/whatweoffer/AutomatedMails";
import LiveDrivingMonitor from "../assets/whatweoffer/LiveDrivingMonitor";
import DrivingRoutes from "../assets/whatweoffer/DrivingRoutes";
import UserRoles from "../assets/whatweoffer/UserRoles";
import Pipelines from "../assets/whatweoffer/Pipelines";
import Analytics from "../assets/whatweoffer/Analytics";

const { width } = Dimensions.get("window");

// here images are declared in an array and called in the DATA using index
const image = [
  <Icon style={{ width: vw(8), height: vh(8) }} as={<PinProperties />} />, //index=0
  <Icon style={{ width: vw(8), height: vh(8) }} as={<AddProperties />} />, //index=1
  <Icon style={{ width: vw(8), height: vh(8) }} as={<ParcelLookup />} />, //index=2
  <Icon style={{ width: vw(8), height: vh(8) }} as={<MLSProperties />} />, //index=3
  <Icon style={{ width: vw(7), height: vh(7) }} as={<OwnerLookup />} />, //index=4
  <Icon style={{ width: vw(8), height: vh(8) }} as={<SmartSearch />} />, //index=5
  <Icon style={{ width: vw(8), height: vh(8) }} as={<AutomatedMails />} />, //index=6
  <Icon style={{ width: vw(8), height: vh(8) }} as={<LiveDrivingMonitor />} />, //index=7
  <Icon style={{ width: vw(8), height: vh(8) }} as={<DrivingRoutes />} />, //index=8
  <Icon style={{ width: vw(8), height: vh(8) }} as={<UserRoles />} />, //index=9
  <Icon style={{ width: vw(8), height: vh(8) }} as={<Pipelines />} />, //index=10
  <Icon style={{ width: vw(8), height: vh(8) }} as={<Analytics />} />, //index=11
];

// data inside the card is declared and called in the cards
const DATA = [
  {
    // CARD-1
    heading1: " Pin Properties",
    text1:
      " Search for a property address or drop a pin on the map to add a property to your property list and interact further",
    svgindex1: 0,
    // CARD-8
    heading2: "Automated Mails",
    text2:
      "Set up campaigns to automatically send postcards to property owners and configure periodic follow-ups to ensure a response.",
    svgindex2: 6,
  },
  {
    // CARD-2
    heading1: "Bulk Add Properties",
    text1:
      "Draw a selection line around the properties on the map to add multiple properties at once to your property list.",
    svgindex1: 1,

    // CARD-9
    heading2: "Automated E-Mails",
    text2:
      " Set up campaigns to automatically send e-mails to property owners and configure periodic follow-ups to ensure a response.",
    svgindex2: 6,
  },
  {
    // CARD-3
    heading1: " Parcel Lookup",
    text1:
      "Get parcel details of any property from the county, including structure, deeds, taxes, assessments, and valuations.",
    svgindex1: 2,

    // CARD-10
    heading2: "Live Driving Monitor",
    text2:
      "Monitor your team members driving and distance in real-time as they drive around and find properties for you.",
    svgindex2: 7,
  },
  {
    // CARD-4
    heading1: "MLS Properties",
    text1:
      "Nationwide on market properties to choose using custom filters, to add on market properties to your list.",
    svgindex1: 3,

    // CARD-11
    heading2: " Driving Routes",
    text2:
      " All the driving routes are saved for keeping track of driving route, distance and the properties added during a drive.",
    svgindex2: 8,
  },
  {
    // CARD-5
    heading1: " Owner Lookup",
    text1:
      "Get a property's owner's name and postal address for sending postcards and interacting with a deal.",
    svgindex1: 4,

    // CARD-12
    heading2: "User Roles",
    text2:
      "  Owner, Admin and User are the three user roles with different access controls to manage your team according to your business hierarchy.",
    svgindex2: 9,
  },
  {
    // CARD-6
    heading1: " Smart Search",
    text1:
      "Get the phone number and e-mail address of a property's owner for sending an e-mail or making a phone call to interact with a deal.",
    svgindex1: 5,

    // CARD-13
    heading2: "Pipelines",
    text2:
      "Keep track of your properties based on the negotiation status, add/remove pipelines and move property cards to the suitable pipeline.",
    svgindex2: 10,
  },
  {
    // CARD-13
    heading1: " Analytics",
    text1:
      "Comprehensive analytics to be aware of your business performance, eventually helping make complicated business decisions.",
    svgindex1: 11,
  },
];

const DATA1 = [
  {
    // CARD-1
    heading1: " Pin Properties",
    text1:
      " Search for a property address or drop a pin on the map to add a property to your property list and interact further",
    svgindex1: 0,

    // CARD-2
    heading2: "Automated Mails",
    text2:
      "Set up campaigns to automatically send postcards to property owners and configure periodic follow-ups to ensure a response.",
    svgindex2: 6,

    // CARD-3
    heading3: "Bulk Add Properties",
    text3:
      "Draw a selection line around the properties on the map to add multiple properties at once to your property list.",
    svgindex3: 1,

    // CARD-4
    heading4: "Automated E-Mails",
    text4:
      " Set up campaigns to automatically send e-mails to property owners and configure periodic follow-ups to ensure a response.",
    svgindex4: 6,
  },
  {
    // CARD-5
    heading1: " Parcel Lookup",
    text1:
      "Get parcel details of any property from the county, including structure, deeds, taxes, assessments, and valuations.",
    svgindex1: 2,

    // CARD-6
    heading2: "Live Driving Monitor",
    text2:
      "Monitor your team members driving and distance in real-time as they drive around and find properties for you.",
    svgindex2: 7,

    // CARD-7
    heading3: "MLS Properties",
    text3:
      "Nationwide on market properties to choose using custom filters, to add on market properties to your list.",
    svgindex3: 3,

    // CARD-8
    heading4: " Driving Routes",
    text4:
      " All the driving routes are saved for keeping track of driving route, distance and the properties added during a drive.",
    svgindex4: 8,
  },
  {
    // CARD-9
    heading1: " Owner Lookup",
    text1:
      "Get a property's owner's name and postal address for sending postcards and interacting with a deal.",
    svgindex1: 4,

    // CARD-10
    heading2: "User Roles",
    text2:
      "  Owner, Admin and User are the three user roles with different access controls to manage your team according to your business hierarchy.",
    svgindex2: 9,

    // CARD-11
    heading3: " Smart Search",
    text3:
      "Get the phone number and e-mail address of a property's owner for sending an e-mail or making a phone call to interact with a deal.",
    svgindex3: 5,

    // CARD-12
    heading4: "Pipelines",
    text4:
      "Keep track of your properties based on the negotiation status, add/remove pipelines and move property cards to the suitable pipeline.",
    svgindex4: 10,
  },
  {
    // CARD-13
    heading1: " Analytics",
    text1:
      "Comprehensive analytics to be aware of your business performance, eventually helping make complicated business decisions.",
    svgindex1: 11,
  },
];

// this is for carosel to get the exact alignment for both ios and android
let platform = "web";
if (navigator.userAgent.includes("iPhone")) {
  platform = "ios";
} else if (navigator.userAgent.includes("Android")) {
  platform = "android";
}

const Mobilefourthfold = () => {
  const [isSmaller] = useMediaQuery({
    maxHeight: 512,
  });

  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: "landscape",
    },
    {
      orientation: "portrait",
    },
  ]);

  const deviceType = () => {
    const agent = navigator.userAgent;
    console.log(agent, "hiiiiiiiiii");

    if (agent.includes("iPad")) {
      return "iPad";
    }
    if (agent.includes("iPhone")) {
      return "iPhone";
    }
    if (agent.includes("Android")) {
      if (vw > 600) {
        return "tab";
      } else {
        return "mobile";
      }
    }
  };

  const renderItem = (data) => (
    <>
      {deviceType() === "iPad" ? (
        <>
          {isPortrait ? (
            <>
              {/* TAB-PORTRAIT (vertical view):- */}
              <Hidden from="999" to="3840">
                <Stack style={styles.cardContainer}>
                  <VStack>
                    {/* ROW-1 */}
                    <Box alignItems={"center"}>
                      {/* BIG-CARD */}
                      <Card
                        style={{
                          width: vw(65),
                          height: vh(27),
                        }}
                        marginTop={vh(6)}
                        shadow="-1"
                        borderRadius={8}
                        borderWidth="3"
                        borderColor="#FFFFFF"
                        bg="#F9F1FD"
                      >
                        <Stack style={styles.headingviewww}>
                          <Heading
                            color="#6D549F"
                            fontSize={vw(4.5)}
                            textAlign="center"
                            fontFamily="HelveticaNeueLTStdBd"
                          >
                            {data.heading1}
                          </Heading>
                          <Text style={styles.texttt}>{data.text1}</Text>
                        </Stack>
                      </Card>

                      {/* SMALL-CARD  */}
                      <Card
                        position="absolute"
                        alignSelf="center"
                        justifyContent="center"
                        bg={"#8339FF"}
                        style={{
                          width: vw(12),
                          height: vw(12),
                        }}
                        shadow="-2"
                        borderRadius={18}
                        borderColor="#C099FE"
                        borderWidth="3"
                      >
                        {/* SMALL-CARD-IMAGE  */}
                        <Stack style={styles.imageview}>
                          {image[data.svgindex1]}
                        </Stack>
                      </Card>
                    </Box>

                    {/* ROW-2  */}
                    {data.heading2 ? (
                      <Box alignItems={"center"}>
                        {/* BIG-CARD  */}
                        <Card
                          style={{
                            width: vw(65),
                            height: vh(27),
                          }}
                          marginTop={vh(9)}
                          marginBottom={vh(3)}
                          shadow="-2"
                          borderRadius={8}
                          borderWidth="3"
                          borderColor="#FFFFFF"
                          bg="#F9F1FD"
                        >
                          <Stack style={styles.headingviewww}>
                            <Heading
                              color="#6D549F"
                              fontSize={vw(4.5)}
                              textAlign="center"
                              fontFamily="HelveticaNeueLTStdBd"
                            >
                              {data.heading2}
                            </Heading>
                            <Text style={styles.texttt}>{data.text2}</Text>
                          </Stack>
                        </Card>

                        {/* SMALL-CARD  */}
                        <Card
                          position="absolute"
                          alignSelf="center"
                          justifyContent={"center"}
                          marginTop={vh(3)}
                          bg={"#8339FF"}
                          style={{
                            width: vw(12),
                            height: vw(12),
                          }}
                          shadow="-2"
                          borderRadius={18}
                          borderColor="#C099FE"
                          borderWidth="3"
                        >
                          {/* SMALL-CARD-IMAGE  */}
                          <Stack style={styles.imageview}>
                            {image[data.svgindex2]}
                          </Stack>
                        </Card>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </VStack>

                  <Stack
                    style={[
                      styles.cornerLabel,
                      { backgroundColor: data.cornerLabelColor },
                    ]}
                  >
                    <Text style={styles.cornerLabelText}>
                      {data.cornerLabelText}
                    </Text>
                  </Stack>
                </Stack>
              </Hidden>
            </>
          ) : (
            <>
              {/* <Hidden from="999" to="3840"> */}
              {/* TAB-LANDSCAPE (horizantal view):- */}
              {/* <Hidden from="2924" to="3840"> */}
              <Hidden from="999" to="3840">
                <Stack style={styles.cardContainer}>
                  <VStack>
                    <HStack alignSelf={"center"} space={vw(2.5)}>
                      {/* ROW-1 */}
                      <Box>
                        {/* BIG-CARD */}
                        <Card
                          style={{
                            width: vw(45),
                            height: vh(55),
                          }}
                          marginTop={vh(8)}
                          shadow="-1"
                          borderRadius={8}
                          borderWidth="3"
                          borderColor="#FFFFFF"
                          bg="#F9F1FD"
                        >
                          <Stack style={styles.headingview}>
                            <Heading
                              color="#6D549F"
                              fontSize={vw(3)}
                              textAlign="center"
                              fontFamily="HelveticaNeueLTStdBd"
                            >
                              {data.heading1}
                            </Heading>
                            <Text style={styles.texttab}>{data.text1}</Text>
                          </Stack>
                        </Card>

                        {/* SMALL-CARD */}
                        <Card
                          alignSelf="center"
                          justifyContent="center"
                          bg={"#8339FF"}
                          style={{
                            width: vw(8),
                            height: vw(8),
                          }}
                          position="absolute"
                          shadow="-2"
                          borderRadius={18}
                          borderColor="#C099FE"
                          borderWidth="3"
                        >
                          {/* SMALL-CARD-IMAGE */}
                          <Stack style={styles.imageview}>
                            {image[data.svgindex1]}
                          </Stack>
                        </Card>
                      </Box>
                      {/* ROW-2 */}
                      {data.heading2 ? (
                        <Box alignItems={"center"}>
                          {/* BIG-CARD */}
                          <Card
                            style={{
                              width: vw(45),
                              height: vh(55),
                            }}
                            marginTop={vh(8)}
                            shadow="-1"
                            borderRadius={8}
                            borderWidth="3"
                            borderColor="#FFFFFF"
                            bg="#F9F1FD"
                          >
                            <Stack style={styles.headingview}>
                              <Heading
                                color="#6D549F"
                                fontSize={vw(3)}
                                textAlign="center"
                                fontFamily="HelveticaNeueLTStdBd"
                              >
                                {data.heading2}
                              </Heading>
                              <Text style={styles.texttab}>{data.text2}</Text>
                            </Stack>
                          </Card>

                          {/* SMALL-CARD */}
                          <Card
                            position="absolute"
                            alignSelf="center"
                            justifyContent="center"
                            bg={"#8339FF"}
                            style={{
                              width: vw(8),
                              height: vw(8),
                            }}
                            shadow="-2"
                            borderRadius={18}
                            borderColor="#C099FE"
                            borderWidth="3"
                          >
                            {/* SMALL-CARD-IMAGE */}
                            <Stack style={styles.imageview}>
                              {image[data.svgindex2]}
                            </Stack>
                          </Card>
                        </Box>
                      ) : (
                        <></>
                      )}
                    </HStack>

                    {data.heading2 ? (
                      <HStack alignSelf={"center"} space={vw(2.5)}>
                        {/* ROW-1 */}
                        <Box>
                          {/* BIG-CARD */}
                          <Card
                            style={{
                              width: vw(45),
                              height: vh(55),
                            }}
                            marginTop={vh(14)}
                            shadow="-1"
                            borderRadius={8}
                            borderWidth="3"
                            borderColor="#FFFFFF"
                            bg="#F9F1FD"
                          >
                            <Stack style={styles.headingview}>
                              <Heading
                                color="#6D549F"
                                fontSize={vw(3)}
                                textAlign="center"
                                fontFamily="HelveticaNeueLTStdBd"
                              >
                                {data.heading3}
                              </Heading>
                              <Text style={styles.texttab}>{data.text3}</Text>
                            </Stack>
                          </Card>

                          {/* SMALL-CARD */}
                          <Card
                            alignSelf="center"
                            justifyContent="center"
                            bg={"#8339FF"}
                            style={{
                              width: vw(8),
                              height: vw(8),
                            }}
                            marginTop={vh(6)}
                            position="absolute"
                            shadow="-2"
                            borderRadius={18}
                            borderColor="#C099FE"
                            borderWidth="3"
                          >
                            {/* SMALL-CARD-IMAGE */}
                            <Stack style={styles.imageview}>
                              {image[data.svgindex3]}
                            </Stack>
                          </Card>
                        </Box>
                        {/* ROW-2 */}
                        {data.heading2 ? (
                          <Box alignItems={"center"}>
                            {/* BIG-CARD */}
                            <Card
                              style={{
                                width: vw(45),
                                height: vh(55),
                              }}
                              marginTop={vh(14)}
                              shadow="-1"
                              borderRadius={8}
                              borderWidth="3"
                              borderColor="#FFFFFF"
                              bg="#F9F1FD"
                            >
                              <Stack style={styles.headingview}>
                                <Heading
                                  color="#6D549F"
                                  fontSize={vw(3)}
                                  textAlign="center"
                                  fontFamily="HelveticaNeueLTStdBd"
                                >
                                  {data.heading4}
                                </Heading>
                                <Text style={styles.texttab}>{data.text4}</Text>
                              </Stack>
                            </Card>

                            {/* SMALL-CARD */}
                            <Card
                              position="absolute"
                              alignSelf="center"
                              justifyContent="center"
                              bg={"#8339FF"}
                              style={{
                                width: vw(8),
                                height: vw(8),
                              }}
                              marginTop={vh(6)}
                              shadow="-2"
                              borderRadius={18}
                              borderColor="#C099FE"
                              borderWidth="3"
                            >
                              {/* SMALL-CARD-IMAGE */}
                              <Stack style={styles.imageview}>
                                {image[data.svgindex4]}
                              </Stack>
                            </Card>
                          </Box>
                        ) : (
                          <></>
                        )}
                      </HStack>
                    ) : (
                      <></>
                    )}
                  </VStack>

                  <Stack
                    style={[
                      styles.cornerLabel,
                      { backgroundColor: data.cornerLabelColor },
                    ]}
                  >
                    <Text style={styles.cornerLabelText}>
                      {data.cornerLabelText}
                    </Text>
                  </Stack>
                </Stack>
              </Hidden>
            </>
          )}
        </>
      ) : (
        <>
          {isPortrait ? (
            <>
              {/* TAB-PORTRAIT (vertical view):- */}
              <Hidden from="999" to="3840">
                <Stack style={styles.cardContainer}>
                  <VStack
                  // marginTop={platform === "android" ? vh(1) : vh(1.3)}
                  >
                    {/* ROW-1 */}
                    <Box alignItems={"center"}>
                      {/* BIG-CARD */}
                      <Card
                        style={{
                          width: vw(70.8),
                          height: vh(27),
                        }}
                        marginTop={vh(4.8)}
                        shadow="-1"
                        borderRadius={8}
                        borderWidth="3"
                        borderColor="#FFFFFF"
                        bg="#F9F1FD"
                      >
                        <Stack style={styles.headingviewww}>
                          <Heading
                            color="#6D549F"
                            fontSize={vw(4.5)}
                            textAlign="center"
                            fontFamily="HelveticaNeueLTStdBd"
                          >
                            {data.heading1}
                          </Heading>
                          <Text style={styles.texttt}>{data.text1}</Text>
                        </Stack>
                      </Card>

                      {/* SMALL-CARD  */}
                      <Card
                        position="absolute"
                        alignSelf="center"
                        justifyContent="center"
                        bg={"#8339FF"}
                        style={{
                          width: vw(15),
                          height: vw(15),
                        }}
                        shadow="-2"
                        borderRadius={18}
                        borderColor="#C099FE"
                        borderWidth="3"
                      >
                        {/* SMALL-CARD-IMAGE  */}
                        <Stack style={styles.imageview}>
                          {image[data.svgindex1]}
                        </Stack>
                      </Card>
                    </Box>

                    {/* ROW-2  */}
                    {data.heading2 ? (
                      <Box alignItems={"center"}>
                        {/* BIG-CARD  */}
                        <Card
                          style={{
                            width: vw(70.8),
                            height: vh(27),
                          }}
                          marginTop={vh(7.7)}
                          marginBottom={vh(3)}
                          shadow="-2"
                          borderRadius={8}
                          borderWidth="3"
                          borderColor="#FFFFFF"
                          bg="#F9F1FD"
                        >
                          <Stack style={styles.headingviewww}>
                            <Heading
                              color="#6D549F"
                              fontSize={vw(4.5)}
                              textAlign="center"
                              fontFamily="HelveticaNeueLTStdBd"
                            >
                              {data.heading2}
                            </Heading>
                            <Text style={styles.texttt}>{data.text2}</Text>
                          </Stack>
                        </Card>

                        {/* SMALL-CARD  */}
                        <Card
                          position="absolute"
                          alignSelf="center"
                          justifyContent={"center"}
                          marginTop={vh(3)}
                          bg={"#8339FF"}
                          style={{
                            width: vw(15),
                            height: vw(15),
                          }}
                          shadow="-2"
                          borderRadius={18}
                          borderColor="#C099FE"
                          borderWidth="3"
                        >
                          {/* SMALL-CARD-IMAGE  */}
                          <Stack style={styles.imageview}>
                            {image[data.svgindex2]}
                          </Stack>
                        </Card>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </VStack>

                  <Stack
                    style={[
                      styles.cornerLabel,
                      { backgroundColor: data.cornerLabelColor },
                    ]}
                  >
                    <Text style={styles.cornerLabelText}>
                      {data.cornerLabelText}
                    </Text>
                  </Stack>
                </Stack>
              </Hidden>
            </>
          ) : (
            <>
              {/* MOBILE-LANDSCAPE (horizontal view):- */}
              <Hidden from="999" to="3840">
                <Stack style={styles.cardContainer}>
                  <HStack
                    // marginTop={platform === "android" ? vh(10) : vh(20)}
                    alignSelf={"center"}
                    space={vw(2.5)}
                  >
                    {/* ROW-1 */}
                    <Box>
                      {/* BIG-CARD */}
                      <Card
                        style={{
                          width: vw(45),
                          height: vh(72),
                        }}
                        marginTop={vh(17)}
                        shadow="-1"
                        borderRadius={8}
                        borderWidth="3"
                        borderColor="#FFFFFF"
                        bg="#F9F1FD"
                      >
                        <Stack style={styles.headingview}>
                          <Heading
                            color="#6D549F"
                            fontSize={vw(3)}
                            textAlign="center"
                            fontFamily="HelveticaNeueLTStdBd"
                          >
                            {data.heading1}
                          </Heading>
                          <Text style={styles.text}>{data.text1}</Text>
                        </Stack>
                      </Card>

                      {/* SMALL-CARD */}
                      <Card
                        alignSelf="center"
                        justifyContent="center"
                        bg={"#8339FF"}
                        style={{
                          width: vw(8),
                          height: vw(8),
                        }}
                        marginTop={vh(6)}
                        position="absolute"
                        shadow="-2"
                        borderRadius={18}
                        borderColor="#C099FE"
                        borderWidth="3"
                      >
                        {/* SMALL-CARD-IMAGE */}
                        <Stack style={styles.imageview}>
                          {image[data.svgindex1]}
                        </Stack>
                      </Card>
                    </Box>
                    {/* ROW-2 */}
                    {data.heading2 ? (
                      <Box alignItems={"center"}>
                        {/* BIG-CARD */}
                        <Card
                          style={{
                            width: vw(45),
                            height: vh(72),
                          }}
                          marginTop={vh(17)}
                          shadow="-1"
                          borderRadius={8}
                          borderWidth="3"
                          borderColor="#FFFFFF"
                          bg="#F9F1FD"
                        >
                          <Stack style={styles.headingview}>
                            <Heading
                              color="#6D549F"
                              fontSize={vw(3)}
                              textAlign="center"
                              fontFamily="HelveticaNeueLTStdBd"
                            >
                              {data.heading2}
                            </Heading>
                            <Text style={styles.text}>{data.text2}</Text>
                          </Stack>
                        </Card>

                        {/* SMALL-CARD */}
                        <Card
                          position="absolute"
                          alignSelf="center"
                          justifyContent="center"
                          bg={"#8339FF"}
                          style={{
                            width: vw(8),
                            height: vw(8),
                          }}
                          marginTop={vh(6)}
                          shadow="-2"
                          borderRadius={18}
                          borderColor="#C099FE"
                          borderWidth="3"
                        >
                          {/* SMALL-CARD-IMAGE */}
                          <Stack style={styles.imageview}>
                            {image[data.svgindex2]}
                          </Stack>
                        </Card>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </HStack>

                  <Stack
                    style={[
                      styles.cornerLabel,
                      { backgroundColor: data.cornerLabelColor },
                    ]}
                  >
                    <Text style={styles.cornerLabelText}>
                      {data.cornerLabelText}
                    </Text>
                  </Stack>
                </Stack>
              </Hidden>
            </>
          )}
        </>
      )}
    </>
  );

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  // console.log(Platform.Version, "hiiiiiiiiii");
  return (
    <NativeBaseProvider>
      {deviceType() === "iPad" ? (
        <>
          {isPortrait ? (
            <>
              <Hidden from="999" to="3840">
                <Box>
                  {/* TAB-PORTRAIT (vertical view):- */}
                  <Box flex={1} alignSelf={"center"}>
                    <Image
                      source={{
                        uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
                      }}
                      style={{
                        width: vw(100),
                      }}
                      resizeMode="cover"
                    />
                    <Stack
                      width={vw(70)}
                      height={vh(10)}
                      alignSelf="center"
                      marginTop={vh(2.1)}
                    >
                      <Text style={styles.whatweoffertext}>What We Offer</Text>
                    </Stack>

                    {/* carosel */}
                    <Stack style={styles.container}>
                      <Carousel
                        pagination={(p) => {
                          console.log(p);
                          return (
                            <Stack>
                              <HStack
                                alignSelf="center"
                                justifyContent="center"
                              >
                                {[...Array(p.total).keys()].map((x) =>
                                  p.currentPage === x + 1 ? (
                                    <Center style={styles.circleview}>
                                      <Text style={styles.pagtext}></Text>
                                    </Center>
                                  ) : (
                                    <Center style={styles.circleview1}>
                                      <Text style={styles.pagdottext}>
                                        {" "}
                                        {"\u2022"}{" "}
                                      </Text>
                                    </Center>
                                  )
                                )}
                              </HStack>
                            </Stack>
                          );
                        }}
                        renderItem={renderItem}
                        data={DATA}
                        loop
                        autoplay
                        autoplayInterval={2500}
                      />
                    </Stack>
                  </Box>
                </Box>
              </Hidden>
            </>
          ) : (
            <>
              <Hidden from="2924" to="3840">
                <Box>
                  {/* TAB-LANDSCAPE (horizantal view):- */}
                  <Stack Flex="1" alignSelf={"center"}>
                    <Image
                      source={{
                        uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
                      }}
                      style={{
                        width: vw(100),
                      }}
                      resizeMode="cover"
                    />
                    <Stack style={styles.whatweofferviewww}>
                      <Text style={styles.whatweoffertexttt}>
                        What We Offer
                      </Text>
                    </Stack>

                    {/* carosel */}
                    <Stack style={styles.container}>
                      <Carousel
                        pagination={(p) => {
                          console.log(p);
                          return (
                            <Stack>
                              <HStack
                                alignSelf="center"
                                justifyContent="center"
                              >
                                {[...Array(p.total).keys()].map((x) =>
                                  p.currentPage === x + 1 ? (
                                    <Center>
                                      <Text style={styles.pagtexttt}></Text>
                                    </Center>
                                  ) : (
                                    <Center>
                                      <Text style={styles.pagdottexttt}>
                                        {" "}
                                        {"\u2022"}{" "}
                                      </Text>
                                    </Center>
                                  )
                                )}
                              </HStack>
                            </Stack>
                          );
                        }}
                        renderItem={renderItem}
                        data={DATA1}
                        loop
                        autoplay
                        autoplayInterval={2500}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Hidden>
            </>
          )}
        </>
      ) : (
        <>
          {isPortrait ? (
            <>
              <Hidden from="999" to="3840">
                <Box>
                  {/* MOBILE--PORTRAIT (vertical view):- */}
                  <Box flex={1} alignSelf={"center"}>
                    <Image
                      source={{
                        uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
                      }}
                      style={{
                        width: vw(100),
                      }}
                      resizeMode="cover"
                    />
                    <Stack style={styles.whatweofferview}>
                      <Text style={styles.whatweoffertext}>What We Offer</Text>
                    </Stack>

                    {/* carosel */}
                    <Stack style={styles.container}>
                      <Carousel
                        pagination={(p) => {
                          console.log(p);
                          return (
                            <Stack>
                              <HStack
                                alignSelf="center"
                                justifyContent="center"
                              >
                                {[...Array(p.total).keys()].map((x) =>
                                  p.currentPage === x + 1 ? (
                                    <Center style={styles.circleview}>
                                      <Text style={styles.pagtext}></Text>
                                    </Center>
                                  ) : (
                                    <Center style={styles.circleview1}>
                                      <Text style={styles.pagdottext}>
                                        {" "}
                                        {"\u2022"}{" "}
                                      </Text>
                                    </Center>
                                  )
                                )}
                              </HStack>
                            </Stack>
                          );
                        }}
                        renderItem={renderItem}
                        data={DATA}
                        loop
                        autoplay
                        autoplayInterval={2500}
                      />
                    </Stack>
                  </Box>
                </Box>
              </Hidden>
            </>
          ) : (
            <>
              <Hidden from="999" to="3840">
                <Box>
                  {/* MOBILE-LANDSCAPE (horizontal view):- */}
                  <Stack Flex="1" alignSelf={"center"}>
                    <Image
                      source={{
                        uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
                      }}
                      style={{
                        width: vw(100),
                      }}
                      resizeMode="cover"
                    />
                    <Stack style={styles.whatweofferviewww}>
                      <Text style={styles.whatweoffertexttt}>
                        What We Offer
                      </Text>
                    </Stack>

                    {/* carosel */}
                    <Stack style={styles.container}>
                      <Carousel
                        pagination={(p) => {
                          console.log(p);
                          return (
                            <Stack>
                              <HStack
                                alignSelf="center"
                                justifyContent="center"
                              >
                                {[...Array(p.total).keys()].map((x) =>
                                  p.currentPage === x + 1 ? (
                                    <Center>
                                      <Text style={styles.pagtexttt}></Text>
                                    </Center>
                                  ) : (
                                    <Center>
                                      <Text style={styles.pagdottexttt}>
                                        {" "}
                                        {"\u2022"}{" "}
                                      </Text>
                                    </Center>
                                  )
                                )}
                              </HStack>
                            </Stack>
                          );
                        }}
                        renderItem={renderItem}
                        data={DATA}
                        loop
                        autoplay
                        autoplayInterval={2500}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Hidden>
            </>
          )}
        </>
      )}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: vw(100),
    borderRadius: 8,
    overflow: "hidden",
  },

  cornerLabel: {
    bottom: 10,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  // this is for image inside the small card
  imageview: {
    alignSelf: "center",
  },
  buttonHovertext: {
    margin: "auto",
    underline: true,
  },
  // this is for the text inside the card
  headingview: {
    // this is for the space between text and heading
    marginTop: vh(10),
  },
  texttab: {
    marginTop: vh(2),
    color: "#988AB4",
    fontFamily: "HelveticaNeueLTStdMd",
    fontSize: vw(2),
    width: vw(31),
    lineHeight: vh(6),
    textAlign: "center",
    alignSelf: "center",
  },
  text: {
    marginTop: vh(2),
    color: "#988AB4",
    fontFamily: "HelveticaNeueLTStdMd",
    fontSize: vw(2),
    width: vw(31),
    lineHeight: vh(8),
    textAlign: "center",
    alignSelf: "center",
  },
  headingviewww: {
    // this is for the heading inside the card
    marginTop: vh(3.5),
  },
  texttt: {
    marginTop: vh(1),
    color: "#988AB4",
    fontFamily: "HelveticaNeueLTStdMd",
    fontSize: vw(3),
    width: vw(50),
    lineHeight: vh(3),
    textAlign: "center",
    alignSelf: "center",
  },
  // heading Portrit
  whatweofferview: {
    width: vw(70),
    height: vh(10),
    alignSelf: "center",
    marginTop: vh(2.1),
  },
  whatweoffertext: {
    fontSize: vw(8),
    fontFamily: "PoppinsSemiBold",
    color: "#7D2BE9",
    alignSelf: "center",
    margin: "auto",
  },

  // heading landscape
  whatweofferviewww: {
    width: vw(40),
    height: vh(20),
    alignSelf: "center",
    marginTop: vh(3),
  },
  whatweoffertexttt: {
    fontSize: vw(5),
    fontFamily: "PoppinsSemiBold",
    color: "#7D2BE9",
    alignSelf: "center",
    margin: "auto",
  },

  // carosel alignment for circle and dots for portrait
  pagtext: {
    borderRadius: vw(2),
    borderWidth: vw(0.6),
    width: vw(3.3),
    height: vw(3.3),
    borderColor: "#7D2BE9",
    opacity: "100%",
    marginHorizontal: vw(2), // this is for the space between circle and dots
    marginTop: platform === "android" ? vh(-0.2) : vh(1.1),
    color: "#7D2BE9",
  },
  pagdottext: {
    fontSize: vw(12),
    color: "#7D2BE9",
    opacity: "30%",
    borderWidth: "full",
    marginHorizontal: vw(-2), // this is for space between dots
  },
  // carosel alignment for circle and dots for landscape
  pagtexttt: {
    borderRadius: vw(2),
    borderWidth: vw(0.4),
    width: vw(2),
    height: vw(2),
    borderColor: "#7D2BE9",
    opacity: "100%",
    marginHorizontal: vw(1.2), // this is for the space between circle and dots
    marginTop: platform === "android" ? vh(-0.4) : vh(3.5),
    color: "#7D2BE9",
  },
  pagdottexttt: {
    fontSize: vw(8),
    color: "#7D2BE9",
    opacity: "30%",
    borderWidth: "full",
    marginHorizontal: vw(-1.5), // this is for space between dots
  },
});

export default Mobilefourthfold;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   StyleSheet,
//   View as Stack,
//   Text,
//   Image,
//   Dimensions,
//   Platform,
// } from "react-native";
// import {
//   Card,
//   HStack,
//   Heading,
//   Box,
//   VStack,
//   Hidden,
//   Center,
//   NativeBaseProvider,
//   Icon,
//   useMediaQuery,
// } from "native-base";

// import Carousel from "react-native-x-carousel";
// import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
// import PinProperties from "../assets/whatweoffer/PinProperties";
// import AddProperties from "../assets/whatweoffer/BulkAddProperties";
// import ParcelLookup from "../assets/whatweoffer/ParcelLookup";
// import MLSProperties from "../assets/whatweoffer/MLSProperties";
// import OwnerLookup from "../assets/whatweoffer/OwnerLookup";
// import SmartSearch from "../assets/whatweoffer/SmartSearch";
// import AutomatedMails from "../assets/whatweoffer/AutomatedMails";
// import LiveDrivingMonitor from "../assets/whatweoffer/LiveDrivingMonitor";
// import DrivingRoutes from "../assets/whatweoffer/DrivingRoutes";
// import UserRoles from "../assets/whatweoffer/UserRoles";
// import Pipelines from "../assets/whatweoffer/Pipelines";
// import Analytics from "../assets/whatweoffer/Analytics";

// const { width } = Dimensions.get("window");

// // here images are declared in an array and called in the DATA using index
// const image = [
//   <Icon size={8} as={<PinProperties />} />, //index=0
//   <Icon size={8} as={<AddProperties />} />, //index=1
//   <Icon size={8} as={<ParcelLookup />} />, //index=2
//   <Icon size={8} as={<MLSProperties />} />, //index=3
//   <Icon size={8} as={<OwnerLookup />} />, //index=4
//   <Icon size={8} as={<SmartSearch />} />, //index=5
//   <Icon size={8} as={<AutomatedMails />} />, //index=6
//   <Icon size={8} as={<LiveDrivingMonitor />} />, //index=7
//   <Icon size={8} as={<DrivingRoutes />} />, //index=8
//   <Icon size={8} as={<UserRoles />} />, //index=9
//   <Icon size={8} as={<Pipelines />} />, //index=10
//   <Icon size={8} as={<Analytics />} />, //index=11
// ];

// // data inside the card is declared and called in the cards
// const DATA = [
//   {
//     // CARD-1
//     heading1: " Pin Properties",
//     text1:
//       " Search for a property address or drop a pin on the map to add a property to your property list and interact further",
//     svgindex1: 0,
//     // CARD-8
//     heading2: "Automated Mails",
//     text2:
//       "Set up campaigns to automatically send postcards to property owners and configure periodic follow-ups to ensure a response.",
//     svgindex2: 6,
//   },
//   {
//     // CARD-2
//     heading1: "Bulk Add Properties",
//     text1:
//       "Draw a selection line around the properties on the map to add multiple properties at once to your property list.",
//     svgindex1: 1,

//     // CARD-9
//     heading2: "Automated E-Mails",
//     text2:
//       " Set up campaigns to automatically send e-mails to property owners and configure periodic follow-ups to ensure a response.",
//     svgindex2: 6,
//   },
//   {
//     // CARD-3
//     heading1: " Parcel Lookup",
//     text1:
//       "Get parcel details of any property from the county, including structure, deeds, taxes, assessments, and valuations.",
//     svgindex1: 2,

//     // CARD-10
//     heading2: "Live Driving Monitor",
//     text2:
//       "Monitor your team members driving and distance in real-time as they drive around and find properties for you.",
//     svgindex2: 7,
//   },
//   {
//     // CARD-4
//     heading1: "MLS Properties",
//     text1:
//       "Nationwide on market properties to choose using custom filters, to add on market properties to your list.",
//     svgindex1: 3,

//     // CARD-11
//     heading2: " Driving Routes",
//     text2:
//       " All the driving routes are saved for keeping track of driving route, distance and the properties added during a drive.",
//     svgindex2: 8,
//   },
//   {
//     // CARD-5
//     heading1: " Owner Lookup",
//     text1:
//       "Get a property's owner's name and postal address for sending postcards and interacting with a deal.",
//     svgindex1: 4,

//     // CARD-12
//     heading2: "User Roles",
//     text2:
//       "  Owner, Admin and User are the three user roles with different access controls to manage your team according to your business hierarchy.",
//     svgindex2: 9,
//   },
//   {
//     // CARD-6
//     heading1: " Smart Search",
//     text1:
//       "Get the phone number and e-mail address of a property's owner for sending an e-mail or making a phone call to interact with a deal.",
//     svgindex1: 5,

//     // CARD-13
//     heading2: "Pipelines",
//     text2:
//       "Keep track of your properties based on the negotiation status, add/remove pipelines and move property cards to the suitable pipeline.",
//     svgindex2: 10,
//   },
//   {
//     // CARD-13
//     heading1: " Analytics",
//     text1:
//       "Comprehensive analytics to be aware of your business performance, eventually helping make complicated business decisions.",
//     svgindex1: 11,
//   },
// ];

// // this is for carosel to get the exact alignment for both ios and android
// let platform = "web";
// if (navigator.userAgent.includes("iPhone")) {
//   platform = "ios";
// } else if (navigator.userAgent.includes("Android")) {
//   platform = "android";
// }

// const Mobilefourthfold = () => {
//   const [isLandScape, isPortrait] = useMediaQuery([
//     {
//       orientation: "landscape",
//     },
//     {
//       orientation: "portrait",
//     },
//   ]);

//   const renderItem = (data) => (
//     <NativeBaseProvider>
//       {isPortrait ? (
//         <Stack style={styles.cardContainer}>
//           <Stack style={styles.cardWrapper}>
//             <VStack marginTop={platform === "android" ? vh(6.6) : vh(7.3)}>
//               {/* ROW-1 */}
//               <Box alignItems={"center"}>
//                 {/* BIG-CARD */}
//                 <Card
//                   style={{
//                     width: vw(70.8),
//                     height: vh(27),
//                   }}
//                   marginTop={vh(9.5)}
//                   shadow="-1"
//                   borderRadius={8}
//                   borderWidth="3"
//                   borderColor="#FFFFFF"
//                   bg="#F9F1FD"
//                 >
//                   <Stack style={styles.headingviewww}>
//                     <Heading
//                       color="#6D549F"
//                       fontSize={vw(4.5)}
//                       textAlign="center"
//                       fontFamily="HelveticaNeueLTStdBd"
//                     >
//                       {data.heading1}
//                     </Heading>
//                     <Text style={styles.texttt}>{data.text1}</Text>
//                   </Stack>
//                 </Card>

//                 {/* SMALL-CARD */}
//                 <Card
//                   position="absolute"
//                   alignSelf="center"
//                   justifyContent="center"
//                   bg={"#8339FF"}
//                   style={{
//                     width: vw(15),
//                     height: vw(15),
//                     // height: vh(8)
//                   }}
//                   marginTop={vh(4)}
//                   shadow="-2"
//                   borderRadius={18}
//                   borderColor="#C099FE"
//                   borderWidth="3"
//                 >
//                   {/* SMALL-CARD-IMAGE */}
//                   <Stack style={styles.imageview}>
//                     {image[data.svgindex1]}
//                   </Stack>
//                 </Card>
//               </Box>

//               {/* ROW-2 */}
//               {data.heading2 ? (
//                 <Box alignItems={"center"}>
//                   {/* BIG-CARD */}
//                   <Card
//                     style={{
//                       width: vw(70.8),
//                       height: vh(27),
//                     }}
//                     marginTop={vh(9.5)}
//                     marginBottom={vh(3)}
//                     shadow="-2"
//                     borderRadius={8}
//                     borderWidth="3"
//                     borderColor="#FFFFFF"
//                     bg="#F9F1FD"
//                   >
//                     <Stack style={styles.headingviewww}>
//                       <Heading
//                         color="#6D549F"
//                         fontSize={vw(4.5)}
//                         textAlign="center"
//                         fontFamily="HelveticaNeueLTStdBd"
//                       >
//                         {data.heading2}
//                       </Heading>
//                       <Text style={styles.texttt}>{data.text2}</Text>
//                     </Stack>
//                   </Card>

//                   {/* SMALL-CARD */}
//                   <Card
//                     position="absolute"
//                     alignSelf="center"
//                     justifyContent={"center"}
//                     marginTop={vh(4)}
//                     bg={"#8339FF"}
//                     style={{
//                       width: vw(15),
//                       height: vw(15),
//                       // height: vh(8)
//                     }}
//                     shadow="-2"
//                     borderRadius={18}
//                     borderColor="#C099FE"
//                     borderWidth="3"
//                   >
//                     {/* SMALL-CARD-IMAGE */}
//                     <Stack style={styles.imageview}>
//                       {image[data.svgindex2]}
//                     </Stack>
//                   </Card>
//                 </Box>
//               ) : (
//                 <></>
//               )}
//             </VStack>

//             <Stack
//               style={[
//                 styles.cornerLabel,
//                 { backgroundColor: data.cornerLabelColor },
//               ]}
//             >
//               <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
//             </Stack>
//           </Stack>
//         </Stack>
//       ) : (
//         // for landscape
//         <Stack style={styles.cardContainer}>
//           <Stack style={styles.cardWrapper}>
//             <HStack
//               marginTop={platform === "android" ? vh(20) : vh(20)}
//               alignSelf={"center"}
//               space={vw(2.5)}
//             >
//               {/* ROW-1 */}
//               <Box alignItems={"center"}>
//                 {/* BIG-CARD */}
//                 <Card
//                   style={{
//                     width: vw(45),
//                     height: vh(72),
//                   }}
//                   marginTop={vh(20)}
//                   shadow="-1"
//                   borderRadius={8}
//                   borderWidth="3"
//                   borderColor="#FFFFFF"
//                   bg="#F9F1FD"
//                 >
//                   <Stack style={styles.headingview}>
//                     <Heading
//                       color="#6D549F"
//                       fontSize={vw(3)}
//                       textAlign="center"
//                       fontFamily="HelveticaNeueLTStdBd"
//                     >
//                       {data.heading1}
//                     </Heading>
//                     <Text style={styles.text}>{data.text1}</Text>
//                   </Stack>
//                 </Card>

//                 {/* SMALL-CARD */}
//                 <Card
//                   position="absolute"
//                   alignSelf="center"
//                   justifyContent="center"
//                   bg={"#8339FF"}
//                   style={{
//                     width: vw(8),
//                     height: vw(8),
//                     // height: vh(8)
//                   }}
//                   marginTop={vh(4)}
//                   shadow="-2"
//                   borderRadius={18}
//                   borderColor="#C099FE"
//                   borderWidth="3"
//                 >
//                   {/* SMALL-CARD-IMAGE */}
//                   <Stack style={styles.imageview}>
//                     {image[data.svgindex1]}
//                   </Stack>
//                 </Card>
//               </Box>
//               {/* ROW-2 */}
//               {data.heading2 ? (
//                 <Box alignItems={"center"}>
//                   {/* BIG-CARD */}
//                   <Card
//                     style={{
//                       width: vw(45),
//                       height: vh(72),
//                     }}
//                     marginTop={vh(20)}
//                     shadow="-1"
//                     borderRadius={8}
//                     borderWidth="3"
//                     borderColor="#FFFFFF"
//                     bg="#F9F1FD"
//                   >
//                     <Stack style={styles.headingview}>
//                       <Heading
//                         color="#6D549F"
//                         fontSize={vw(3)}
//                         textAlign="center"
//                         fontFamily="HelveticaNeueLTStdBd"
//                       >
//                         {data.heading2}
//                       </Heading>
//                       <Text style={styles.text}>{data.text2}</Text>
//                     </Stack>
//                   </Card>

//                   {/* SMALL-CARD */}
//                   <Card
//                     position="absolute"
//                     alignSelf="center"
//                     justifyContent="center"
//                     bg={"#8339FF"}
//                     style={{
//                       width: vw(8),
//                       height: vw(8),
//                       // height: vh(8)
//                     }}
//                     marginTop={vh(4)}
//                     shadow="-2"
//                     borderRadius={18}
//                     borderColor="#C099FE"
//                     borderWidth="3"
//                   >
//                     {/* SMALL-CARD-IMAGE */}
//                     <Stack style={styles.imageview}>
//                       {image[data.svgindex2]}
//                     </Stack>
//                   </Card>
//                 </Box>
//               ) : (
//                 <></>
//               )}
//             </HStack>

//             <Stack
//               style={[
//                 styles.cornerLabel,
//                 { backgroundColor: data.cornerLabelColor },
//               ]}
//             >
//               <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
//             </Stack>
//           </Stack>
//         </Stack>
//       )}
//     </NativeBaseProvider>
//   );

//   const [index, setIndex] = useState(0);
//   const isCarousel = useRef(null);
//   console.log(Platform.Version, "hiiiiiiiiii");
//   return (
//     // for heading
//     <NativeBaseProvider>
//       <Hidden from="999" to="3840">
//         {isPortrait ? (
//           <Stack
//             Flex="1"
//             display={["true", "true", "true", "none"]}
//             zIndex="1200"
//             alignSelf={"center"}
//           >
//             <Image
//               source={{
//                 uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
//               }}
//               style={{
//                 width: vw(100),
//                 // height: vh(100)
//               }}
//               resizeMode="cover"
//             />
//             <Stack style={styles.whatweofferview}>
//               <Text style={styles.whatweoffertext}>What We Offer</Text>
//             </Stack>

//             {/* carosel */}
//             <Stack style={styles.container}>
//               <Carousel
//                 pagination={(p) => {
//                   console.log(p);
//                   return (
//                     <Stack>
//                       <HStack alignSelf="center" justifyContent="center">
//                         {[...Array(p.total).keys()].map((x) =>
//                           p.currentPage === x + 1 ? (
//                             <Center style={styles.circleview}>
//                               <Text style={styles.pagtext}></Text>
//                             </Center>
//                           ) : (
//                             <Center style={styles.circleview1}>
//                               <Text style={styles.pagdottext}>
//                                 {" "}
//                                 {"\u2022"}{" "}
//                               </Text>
//                             </Center>
//                           )
//                         )}
//                       </HStack>
//                     </Stack>
//                   );
//                 }}
//                 renderItem={renderItem}
//                 data={DATA}
//                 loop
//                 // autoplay
//                 autoplayInterval={2500}
//               />
//             </Stack>
//           </Stack>
//         ) : (
//           // islandscape
//           <Stack
//             Flex="1"
//             display={["true", "true", "true", "none"]}
//             zIndex="1200"
//             alignSelf={"center"}
//           >
//             <Image
//               source={{
//                 uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
//               }}
//               style={{
//                 width: vw(100),
//                 // height: vh(100)
//               }}
//               resizeMode="cover"
//             />
//             <Stack style={styles.whatweofferviewww}>
//               <Text style={styles.whatweoffertexttt}>What We Offer</Text>
//             </Stack>

//             {/* carosel */}
//             <Stack style={styles.container}>
//               <Carousel
//                 pagination={(p) => {
//                   console.log(p);
//                   return (
//                     <Stack>
//                       <HStack alignSelf="center" justifyContent="center">
//                         {[...Array(p.total).keys()].map((x) =>
//                           p.currentPage === x + 1 ? (
//                             <Center>
//                               <Text style={styles.pagtexttt}></Text>
//                             </Center>
//                           ) : (
//                             <Center>
//                               <Text style={styles.pagdottexttt}>
//                                 {" "}
//                                 {"\u2022"}{" "}
//                               </Text>
//                             </Center>
//                           )
//                         )}
//                       </HStack>
//                     </Stack>
//                   );
//                 }}
//                 renderItem={renderItem}
//                 data={DATA}
//                 loop
//                 // autoplay
//                 autoplayInterval={2500}
//               />
//             </Stack>
//           </Stack>
//         )}
//       </Hidden>
//     </NativeBaseProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     width: vw(100),

//     justifyContent: "center",
//     // position: "absolute",
//   },

//   cardWrapper: {
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   cornerLabel: {
//     position: "absolute",
//     bottom: 10,
//     right: 0,
//     borderTopLeftRadius: 8,
//   },
//   cornerLabelText: {
//     fontSize: 12,
//     color: "#fff",
//     fontWeight: "600",
//     paddingLeft: 5,
//     paddingRight: 5,
//     paddingTop: 2,
//     paddingBottom: 2,
//   },
//   // this is for image inside the small card
//   imageview: {
//     alignSelf: "center",
//   },
//   buttonHovertext: {
//     margin: "auto",
//     underline: true,
//   },
//   // this is for the text inside the card
//   headingview: {
//     // this is for the space between text and heading
//     marginTop: vh(12),
//   },
//   text: {
//     marginTop: vh(2),
//     color: "#988AB4",
//     fontFamily: "HelveticaNeueLTStdMd",
//     fontSize: vw(2),
//     width: vw(31),
//     lineHeight: vh(8),
//     textAlign: "center",
//     alignSelf: "center",
//   },
//   headingviewww: {
//     // this is for the heading inside the card
//     marginTop: vh(3.5),
//   },
//   texttt: {
//     marginTop: vh(1),
//     color: "#988AB4",
//     fontFamily: "HelveticaNeueLTStdMd",
//     fontSize: vw(3),
//     width: vw(50),
//     lineHeight: vh(3),
//     textAlign: "center",
//     alignSelf: "center",
//   },
//   // heading Portrit
//   whatweoffertext: {
//     fontSize: vw(8),
//     fontFamily: "PoppinsSemiBold",
//     color: "#7D2BE9",
//     alignSelf: "center",
//     margin: "auto",
//     marginBottom: vh(5),
//   },
//   whatweofferview: {
//     width: vw(70),
//     height: vh(10),
//     alignSelf: "center",
//     marginTop: vh(2.1),
//   },
//   // heading landscape
//   whatweoffertexttt: {
//     fontSize: vw(5),
//     fontFamily: "PoppinsSemiBold",
//     color: "#7D2BE9",
//     alignSelf: "center",
//     margin: "auto",
//     marginBottom: vh(25),
//   },
//   whatweofferviewww: {
//     width: vw(70),
//     height: vh(10),
//     alignSelf: "center",
//     marginTop: vh(2.1),
//   },
//   // carosel alignment for circle and dots for portrait
//   pagtext: {
//     borderRadius: vw(2),
//     borderWidth: vw(0.6),
//     // width: 12,
//     // height: 12,
//     width: vw(3.3),
//     height: vw(3.3),
//     borderColor: "#7D2BE9",
//     opacity: "100%",
//     marginHorizontal: vw(2), // this is for the space between circle and dots
//     marginTop: platform === "android" ? vh(-0.2) : vh(1.1),
//     color: "#7D2BE9",
//   },
//   pagdottext: {
//     fontSize: vw(12),
//     color: "#7D2BE9",
//     opacity: "30%",
//     borderWidth: "full",
//     marginHorizontal: vw(-2), // this is for space between dots
//   },
//   // carosel alignment for circle and dots for landscape
//   pagtexttt: {
//     borderRadius: vw(2),
//     borderWidth: vw(0.4),
//     // width: 12,
//     // height: 12,
//     width: vw(2),
//     height: vw(2),
//     borderColor: "#7D2BE9",
//     opacity: "100%",
//     marginHorizontal: vw(1.2), // this is for the space between circle and dots
//     marginTop: platform === "android" ? vh(-0.4) : vh(1.1),
//     color: "#7D2BE9",
//   },
//   pagdottexttt: {
//     fontSize: vw(8),
//     color: "#7D2BE9",
//     opacity: "30%",
//     borderWidth: "full",
//     marginHorizontal: vw(-1.5), // this is for space between dots
//   },
// });

// export default Mobilefourthfold;
