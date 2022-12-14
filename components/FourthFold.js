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
} from "native-base";

import * as Font from "expo-font";
import Carousel from "react-native-x-carousel";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import PinProperties from "../assets/whatweoffer/PinProperties";
import AddProperties from "../assets/whatweoffer/Bulk AddProperties";
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
  <Icon size={8} as={<PinProperties />} />, //index=0
  <Icon size={8} as={<AddProperties />} />, //index=1
  <Icon size={8} as={<ParcelLookup />} />, //index=2
  <Icon size={8} as={<MLSProperties />} />, //index=3
  <Icon size={8} as={<OwnerLookup />} />, //index=4
  <Icon size={8} as={<SmartSearch />} />, //index=5
  <Icon size={8} as={<AutomatedMails />} />, //index=6
  <Icon size={8} as={<LiveDrivingMonitor />} />, //index=7
  <Icon size={8} as={<DrivingRoutes />} />, //index=8
  <Icon size={8} as={<UserRoles />} />, //index=9
  <Icon size={8} as={<Pipelines />} />, //index=10
  <Icon size={8} as={<Analytics />} />, //index=11
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

// this is for carosel to get the exact alignment for both ios and android
let platform = "web";
if (navigator.userAgent.includes("iPhone")) {
  platform = "ios";
} else if (navigator.userAgent.includes("Android")) {
  platform = "android";
}

const FourthMobile1 = () => {
  const renderItem = (data) => (
    <NativeBaseProvider>
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <VStack>
            {/* ROW-1 */}
            <Box alignItems={"center"}>
              {/* BIG-CARD */}
              <Card
                style={{ width: vw(70.8), height: vh(27) }}
                marginTop={vh(9.5)}
                shadow="-1"
                borderRadius={8}
                borderWidth="3"
                borderColor="#FFFFFF"
                bg="#F9F1FD"
              >
                <View style={styles.headingview}>
                  <Heading
                    color="#6D549F"
                    fontSize={vw(4.5)}
                    textAlign="center"
                    fontFamily="HelveticaNeueLTStdBd"
                  >
                    {data.heading1}
                  </Heading>
                  <Text style={styles.text}>{data.text1}</Text>
                </View>
              </Card>

              {/* SMALL-CARD */}
              <Card
                position="absolute"
                alignSelf="center"
                bg={"#8339FF"}
                style={{ width: vw(15), height: vh(8) }}
                marginTop={vh(4)}
                shadow="-2"
                borderRadius={18}
                borderColor="#C099FE"
                borderWidth="3"
              >
                {/* SMALL-CARD-IMAGE */}
                <View style={styles.imageview}>{image[data.svgindex1]}</View>
              </Card>
            </Box>

            {/* ROW-2 */}
            {data.heading2 ? (
              <Box alignItems={"center"}>
                {/* BIG-CARD */}
                <Card
                  style={{ width: vw(70.8), height: vh(27) }}
                  marginTop={vh(9.5)}
                  marginBottom={vh(3)}
                  shadow="-2"
                  borderRadius={8}
                  borderWidth="3"
                  borderColor="#FFFFFF"
                  bg="#F9F1FD"
                >
                  <View style={styles.headingview}>
                    <Heading
                      color="#6D549F"
                      fontSize={vw(4.5)}
                      textAlign="center"
                      fontFamily="HelveticaNeueLTStdBd"
                    >
                      {data.heading2}
                    </Heading>
                    <Text style={styles.text}>{data.text2}</Text>
                  </View>
                </Card>

                {/* SMALL-CARD */}
                <Card
                  position="absolute"
                  alignSelf="center"
                  marginTop={vh(4)}
                  bg={"#8339FF"}
                  style={{ width: vw(15), height: vh(8) }}
                  shadow="-2"
                  borderRadius={18}
                  borderColor="#C099FE"
                  borderWidth="3"
                >
                  {/* SMALL-CARD-IMAGE */}
                  <View style={styles.imageview}>{image[data.svgindex2]}</View>
                </Card>
              </Box>
            ) : (
              <></>
            )}
          </VStack>

          <View
            style={[
              styles.cornerLabel,
              { backgroundColor: data.cornerLabelColor },
            ]}
          >
            <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  console.log(Platform.Version, "hiiiiiiiiii");
  return (
    <NativeBaseProvider>
      <Hidden from="800" to="1024">
        <View
          Flex="1"
          display={["true", "true", "true", "none"]}
          zIndex="1200"
          alignSelf={"center"}
        >
          <Image
            source={{
              uri: "https://cdn.shadow.properties/videos_spweb/what_we_offer_bg.png",
            }}
            style={{ width: vw(100), height: vh(100) }}
            resizeMode="cover"
          />
          <View style={styles.whatweofferview}>
            <Text style={styles.whatweoffertext}>What We Offer</Text>
          </View>

          {/* carosel */}
          <View style={styles.container}>
            <Carousel
              pagination={(p) => {
                console.log(p);
                return (
                  <View>
                    <HStack alignSelf="center">
                      {[...Array(p.total).keys()].map((x) =>
                        p.currentPage === x + 1 ? (
                          <Center style={styles.circleview}>
                            <Text style={styles.pagtext}></Text>
                          </Center>
                        ) : (
                          <Center style={styles.circleview1}>
                            <Text style={styles.pagdottext}> {"\u2022"} </Text>
                          </Center>
                        )
                      )}
                    </HStack>
                  </View>
                );
              }}
              renderItem={renderItem}
              data={DATA}
              loop
              autoplay
              autoplayInterval={2500}
            />
          </View>
        </View>
      </Hidden>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: vw(100),
    marginTop: vh(6.4),
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  cornerLabel: {
    position: "absolute",
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
  imageview: {
    alignSelf: "center",
    marginTop: platform === "android" ? -4 : -8.5,
  },
  buttonHovertext: {
    margin: "auto",
    underline: true,
  },
  text: {
    marginTop: 5,
    color: "#988AB4",
    fontFamily: "HelveticaNeueLTStdMd",
    fontSize: 13,
    width: 195,
    lineHeight: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  whatweoffertext: {
    fontSize: 27,
    fontFamily: "PoppinsSemiBold",
    color: "#7D2BE9",
    alignSelf: "center",
    margin: "auto",
    position: "absolute",
    marginBottom: 25,
  },
  whatweofferview: {
    width: vw(70),
    height: vh(10),
    alignSelf: "center",
    position: "absolute",
    marginTop: vh(2.1),
  },
  headingview: {
    marginTop: vh(3.5),
  },
  circleview: {
    alignItems: "center",
    alignSelf: "center",
    paddingTop: vh(1),
  },
  circleview1: {
    alignItems: "center",
    alignSelf: "center",
  },
  pagtext: {
    borderRadius: 13 / 2,
    borderWidth: 2,
    width: 12,
    height: 12,
    alignSelf: "center",
    alignItems: "center",
    borderColor: "#7D2BE9",
    opacity: "100%",
    marginHorizontal: vw(1),
    marginTop: platform === "android" ? "-10px" : "-1px",
    color: "#7D2BE9",
  },
  pagdottext: {
    fontSize: 46,
    color: "#7D2BE9",
    opacity: "30%",
    borderWidth: "full",
    marginHorizontal: vw(-2),
  },
  head: {
    top: "auto",
    color: "#6D549F",
    fontSize: vw(4.5),
    textAlign: "center",
    fontFamily: "HelveticaNeueLTStdBd",
  },
});

export default FourthMobile1;
