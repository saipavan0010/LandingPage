import React, { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Divider,
  Stack,
  ScrollView,
  Hidden,
} from "native-base";
import { StyleSheet, Text } from "react-native";

import Faq from "react-faq-component";
import * as Font from "expo-font";
import { vw, vh } from "react-native-expo-viewport-units";

const data = {
  rows: [
    {
      title: `What are SP Credits?`,
      content: `SP Credits are our in-app currency, required to perform SmartSearch and to send Postcards. Check plan details for more information.`,
    },
    {
      title: `What payment methods are accepted?`,
      content: `VISA, Mastercard.`,
    },
    {
      title: `What platform is ShadowProperties available on?`,
      content: `iOS and Android.`,
    },
    {
      title: `What does support include?`,
      content: `Any account related, and software related technical questions will be addressed via live chat or email. We are not responsible for your business or your business-related questions in any way.`,
    },
    {
      title: `Does ShadowProperties integrate with third party systems?`,
      content: `Not right now but we plan on integrating with necessary tools in the future, you can currently export your data through files.`,
    },
    {
      title: `Are there any setup fees?`,
      content: `No, the Subscription and SP Credits are everything that you pay us for.`,
    },
    {
      title: `Can I pay quarterly or yearly`,
      content: `No.`,
    },
    {
      title: `Is my data safe?`,
      content: `We take matters of data security very seriously at ShadowProperties. We are hosted on the highly reliable cloud partners Amazon AWS, DigitalOcean and Microsoft Azure servers, that promise optimal uptime and data security for all our customer data. Our hosting partner's servers are hosted in world class data centers, that are protected by biometric locks and 24-hour surveillance. We ensure that our application is always up to date with the latest security patches. We use SSL encryption to keep your data safe.`,
    },
    {
      title: `Can I cancel my account at any time?`,
      content: `Yes, and it will be cancelled by the end of your current billing cycle, no refunds of any kind.`,
    },
  ],
};

const ResponsiveFaqs = () => {
  const [rows, setRowsOption] = useState(null);
  // const [row, setRow] = useState(0);

  useEffect(() => {
    Font.loadAsync({
      PoppinsMed: require("./assets/Fonts/Poppins-Medium.ttf"),
      PoppinsReg: require("./assets/Fonts/Poppins-Regular.ttf"),
      PoppinsSemiBold: require("./assets/Fonts/Poppins-SemiBold.ttf"),
      HelveticaNeueLTStdRoman: require("./assets/Fonts/HelveticaNeueLTStd-Roman.otf"),
      HelveticaNeueLTStdMd: require("./assets/Fonts/HelveticaNeueLTStd-Md.otf"),
      HelveticaNeueLTStdBd: require("./assets/Fonts/HelveticaNeueLTStd-Bd.otf"),
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Hidden from={"993"} to={"3840"}>
        <Stack bg={"#ffffff"}>
          <Box>
            <Text style={styless.title}>FAQs</Text>
            <Divider style={styless.titleDivider}></Divider>
          </Box>
          <Stack style={styless.faqStyleBody}>
            <Box style={styless.faqStyleWrapper}>
              <Faq
                data={data}
                styles={styles}
                config={config}
                getRowOptions={setRowsOption}
              />
            </Box>
          </Stack>
          <Box padding={vh(10)} />
        </Stack>
      </Hidden>
    </NativeBaseProvider>
  );
};
export default ResponsiveFaqs;

const styless = StyleSheet.create({
  title: {
    fontSize: vw(8),
    marginTop: vh(4),
    color: "#5011a2",
    alignSelf: "center",
    fontFamily: "HelveticaNeueLTStdRoman",
  },
  titleDivider: {
    marginTop: vh(1),
    width: vw(12),
    alignSelf: "center",
    backgroundColor: "#e62e00",
  },
  faqStyleBody: {
    marginTop: vh(6),
    alignItems: "center",
  },
  faqStyleWrapper: {
    width: vw(80),
    fontFamily: "HelveticaNeueLTStdRoman",
  },
});

const styles = {
  rowTitleColor: "#7D2BE9",
  rowContentColor: "#808080",
  arrowColor: "#7D2BE9",
  rowTitleTextSize: "15px",
  rowContentTextSize: "12px",
  rowContentPaddingBottom: "5px",
  rowContentPaddingRight: "16px",
  timingFunc: "ease",
  // transitionDuration: "1s",
};

const config = {
  animate: true,
  tabFocus: true,
  // arrowIcon: "V",
  // openOnload: 0,
  // expandIcon: "+",
  // collapseIcon: "-",
};
