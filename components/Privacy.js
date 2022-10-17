import React, { useEffect } from "react";
import {
  Text,
  NativeBaseProvider,
  Button,
  Image,
  Pressable,
  HStack,
  HamburgerIcon,
  Link,
  VStack,
  Stack,
  Divider,
  View,
  Spacer,
  Box,
} from "native-base";
import { StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Menu } from "native-base";
import * as Font from "expo-font";
import { Dimensions } from "react-native";
import TopBar from "./Topbar";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const Privacy = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Stack backgroundColor={"white"}>
        <Stack zIndex={999}>
          <TopBar navigation={navigation} />
        </Stack>
        <View
          onLayout={(event) => {
            console.log(event);
          }}
          alignSelf={"center"}
          width="80%"
        >
          <VStack top={vh(20)} space={4}>
            <Text style={Styles.title}>PRIVACY POLICY</Text>
            <Divider
              marginTop={vh(1)}
              width={vw(5)}
              alignSelf={"center"}
              backgroundColor="#e62e00"
            ></Divider>
            <Text style={Styles.body}>
              {`Thank you for choosing to be part of our community at ZeroPoint Platforms Inc, doing business as ShadowProperties(“Shadow.Properties”, “we”,\n “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our \n policy, or our practices with regards to your personal information, please contact us at info@shadow.properties.`}
            </Text>
            <Text style={Styles.body}>
              {`When you visit our website https://shadow.properties, mobile application, and use our services, you trust us with your personal information.\n We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use \n it  and what rights you have in relation to it.We hope you take some time to read through it carefully, as it is important. If there are any terms in this \n privacy policy that you do not agree with, please discontinue use of our Sites or Apps and our services.`}
            </Text>
            <Text style={Styles.body}>
              {`This privacy policy applies to all information collected through our website (such as https://shadow.properties),mobile application, ("Apps"), and/or \n any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "Services").`}
            </Text>
            <Text style={Styles.body}>
              {`Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.`}
            </Text>
            {/* </VStack>
          <VStack> */}
            <Text style={Styles.heading}>
              1.WHAT INFORMATION DO WE COLLECT?
            </Text>
            <Text
              fontWeight={"medium"}
              fontFamily={"HelveticaNeueLTStdBd"}
              textAlign={"center"}
              fontSize={"3vh"}
              color={"#7D2BE9"}
            >
              Personal information you disclose to us
            </Text>
            <Text style={Styles.body}>
              {`In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and\n payment information.\n`}
            </Text>
            <Text style={Styles.body}>
              {`We collect personal information that you voluntarily provide to us when registering at the Services or Apps, expressing an interest in obtaining \ninformation about us or our products and services, when participating in activities on the Services or Apps or otherwise contacting us.`}
            </Text>
            <Text style={Styles.body}>
              {`The personal information that we collect depends on the context of your interactions with us and the Services or Apps, the choices you make and\n the products and features you use. The personal information we collect can include the following:`}
            </Text>
            <Text style={Styles.body}>
              {`Publicly Available Personal Information: We collect first name, maiden name, last name, nickname, current and former address, phone numbers,\n email addresses, business email, business phone number, social media, and other similar data.`}
            </Text>
            <Text style={Styles.body}>
              {`Personal Information Provided by You: We collect app usage, data collected from surveys, and other similar data.`}
            </Text>
            <Text style={Styles.body}>
              {`Credentials: We collect passwords, password hints, and similar security information used for authentication and account access.`}
            </Text>
            <Text style={Styles.body}>
              {`Payment Data: We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy policy link(s) here: https://razorpay.com/privacy.`}
            </Text>
            <Text style={Styles.body}>
              {`All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.`}
            </Text>
            {/* </VStack>
          <VStack space={4}> */}
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`Information automatically collected`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our Services or Apps.`}
            </Text>
            <Text style={Styles.body}>
              {`We automatically collect certain information when you visit, use or navigate the Services or Apps. This information does not reveal your specific \n identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use\n our Services or Apps and other technical information. This information is primarily needed to maintain the security and operation of our Services or Apps, and for our internal analytics and reporting purposes.`}
            </Text>
            <Text style={Styles.body}>
              {`Like many businesses, we also collect information through cookies and similar technologies.`}
            </Text>
            <Text style={Styles.body}>
              {`Online Identifiers: We collect devices, tools and protocols, such as IP (Internet Protocol) addresses, cookie identifiers, or others such as the ones\nused for analytics and marketing, applications, and other similar data.`}
            </Text>
            <Text
              style={Styles.body}
            >{`Information collected through our Apps`}</Text>
            <Text style={Styles.body}>
              {`In Short: We may collect information regarding your mobile device, push notifications, when you use our apps.`}
            </Text>
            <Text style={Styles.body}>
              {`If you use our Apps, we may also collect the following information:`}
            </Text>
            <Text style={Styles.body}>
              {`Mobile Device Data: We may automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.`}
            </Text>
            <Text style={Styles.body}>
              {`Push Notifications: We may request to send you push notifications regarding your account or the mobile application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`2. HOW DO WE USE YOUR INFORMATION?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We process your information for purposes based on legitimate business interests, the fulfilment of our contract with you, compliance with\nour legal obligations, and/or your consent.`}
            </Text>
            <Text style={Styles.body}>
              {`We use personal information collected via our Services or Apps for a variety of business purposes described below. We process your personal\ninformation for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your\nconsent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.`}
            </Text>
            <Text style={Styles.body}>
              {`We use the information we collect or receive:`}
            </Text>
            <Text style={Styles.body}>
              {`To facilitate account creation and logon process: If you choose to link your account with us to a third party account (such as your Google\nor Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon\nprocess for the performance of the contract.`}
            </Text>
            <Text style={Styles.body}>
              {`To send you marketing and promotional communications: We and/or our third party marketing partners may use the personal\ninformation you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our\nmarketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).`}
            </Text>
            <Text style={Styles.body}>
              {`To send administrative information to you: We may use your personal information to send you product, service and new feature\ninformation and/or information about changes to our terms, conditions, and policies.`}
            </Text>
            <Text style={Styles.body}>
              {`Fulfill and manage your orders: We may use your information to fulfill and manage your orders, payments, returns, and exchanges made\nthrough the Services or Apps.`}
            </Text>
            <Text style={Styles.body}>
              {`To post testimonials: We post testimonials on our Services or Apps that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and testimonial.\nIf you wish to update, or delete your testimonial, please contact us at\ninfo@shadow.properties and be sure to include your name, testimonial location, and contact information.`}
            </Text>
            <Text style={Styles.body}>
              {`Deliver targeted advertising to you: We may use your information to develop and display content and advertising (and work with third\nparties who do so) tailored to your interests and/or location and to measure its effectiveness.`}
            </Text>
            <Text style={Styles.body}>
              {`Request Feedback: We may use your information to request feedback and to contact you about your use of our Services or Apps`}
            </Text>
            <Text style={Styles.body}>
              {`To protect our Services: We may use your information as part of our efforts to keep our Services or Apps safe and secure (for example, for\nfraud monitoring and prevention).`}
            </Text>
            <Text style={Styles.body}>
              {`To enforce our terms, conditions and policies for Business Purposes, Legal Reasons and Contractual.`}
            </Text>
            <Text style={Styles.body}>
              {`To respond to legal requests and prevent harm: If we receive a subpoena or other legal request, we may need to inspect the data we hold\nto determine how to respond.`}
            </Text>
            <Text style={Styles.body}>
              {`To manage user accounts: We may use your information for the purposes of managing our account and keeping it in working order.`}
            </Text>
            <Text style={Styles.body}>
              {`To deliver services to the user: We may use your information to provide you with the requested service.`}
            </Text>
            <Text style={Styles.body}>
              {`To respond to user inquiries/offer support to users: We may use your information to respond to your inquiries and solve any potential\nissues you might have with the use of our Services.`}
            </Text>
            <Text style={Styles.body}>
              {`For other Business Purposes: We may use your information for other Business Purposes, such as data analysis, identifying usage trends,\ndetermining the effectiveness of our promotional campaigns and to evaluate and improve our Services or Apps, products, marketing and your\nexperience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users\nand does not include personal information. We will not use identifiable personal information without your consent.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business\nobligations.`}
            </Text>
            <Text style={Styles.body}>
              {`We may process or share data based on the following legal basis:`}
            </Text>
            <Text style={Styles.body}>
              {`Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.`}
            </Text>
            <Text style={Styles.body}>
              {`Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.`}
            </Text>
            <Text style={Styles.body}>
              {`Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms\nof our contract.`}
            </Text>
            <Text style={Styles.body}>
              {`Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law,\ngovernmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in\nresponse to public authorities to meet national security or law enforcement requirements).`}
            </Text>
            <Text style={Styles.body}>
              {`Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential\nviolations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence\nin litigation in which we are involved.`}
            </Text>
            <Text style={Styles.body}>
              {`More specifically, we may need to process your data or share your personal information in the following situations:`}
            </Text>
            <Text style={Styles.body}>
              {`Vendors, Consultants and Other Third-Party Service Providers: We may share your data with third party vendors, service providers,\ncontractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include:\npayment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third\nparties to use tracking technology on the Services or Apps, which will enable them to collect data about how you interact with the Services or\nApps over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and\nbetter understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties\nfor their promotional purposes. We have contracts in place with our data processors. This means that they cannot do anything with your\npersonal information unless we have instructed them to do it. They will not share your personal information with any organisation apart from\nus. They will hold it securely and retain it for the period we instruct.`}
            </Text>
            <Text style={Styles.body}>
              {`Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company\nassets, financing, or acquisition of all or a portion of our business to another company.`}
            </Text>
            <Text style={Styles.body}>
              {`Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy.\nAffiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under\ncommon control with us.`}
            </Text>
            <Text style={Styles.body}>
              {`Business Partners: We may share your information with our business partners to offer you certain products, services or promotions.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`4. WHO WILL YOUR INFORMATION BE SHARED WITH?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We only share information with the following third parties. We only share and disclose your information with the following third parties.\nWe have categorized each party so that you may be easily understand the purpose of our data collection and processing practices. If we have\nprocessed your data based on your consent and you wish to revoke your consent, please contact us.`}
            </Text>
            <Text style={Styles.body}>
              {`Advertising, Direct Marketing, and Lead Generation:\nGoogle AdSense, Bing Ads, and Facebook Audience Network`}
            </Text>
            <Text style={Styles.body}>
              {`Communicate and Chat with Users:\nFacebook Customer Chat.`}
            </Text>
            <Text style={Styles.body}>
              {`Functionality and Infrastructure Optimization:\nAmazon Web Services, DigitalOcean, and Microsoft Azure`}
            </Text>
            <Text style={Styles.body}>{`Invoice and Billing:\nStripe`}</Text>
            <Text style={Styles.body}>{`Retargeting Platforms:`}</Text>
            <Text style={Styles.body}>
              {`Facebook Custom Audience, Google Ads Remarketing, Google Analytics Remarketing, Facebook Remarketing, LinkedIn Website Retargeting,\nTwitter Remarketing, and Twitter Tailored Audiences`}
            </Text>
            <Text style={Styles.body}>{`Web and Mobile Analytics:`}</Text>
            <Text style={Styles.body}>
              {`Facebook Ads conversion tracking, Facebook Analytics, Google Ads, Google Analytics, and Google Tag Manager`}
            </Text>
            <Text style={Styles.body}>{`Website Testing:`}</Text>
            <Text style={Styles.body}>{`Google Website Optimizer`}</Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We may use cookies and other tracking technologies to collect and store your information.`}
            </Text>
            <Text style={Styles.body}>
              {`We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information, usage of our services entitles you\nto agree with our cookie usage.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We may transfer, store, and process your information in countries other than your own.`}
            </Text>
            <Text style={Styles.body}>
              {`Our servers are located in United States. If you are accessing our Services or Apps from outside United States, please be aware that your\ninformation may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal\ninformation (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in United States.`}
            </Text>
            <Text style={Styles.body}>
              {`If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in\nyour country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and\napplicable law.`}
            </Text>
            <Text
              style={Styles.body}
            >{`EU-U.S. Privacy Shield Framework:`}</Text>
            <Text style={Styles.body}>
              {`In particular Company complies with the EU-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the\ncollection, use, and retention of personal information transferred from the European Union to the United States and has certified its compliance\nwith it. As such, Company is committed to subjecting all personal information received from European Union (EU) member countries, in reliance on\nthe Privacy Shield Framework, to the Framework’s applicable Principles. To learn more about the Privacy Shield Framework, visit the U.S.\nDepartment of Commerce’s Privacy Shield List.`}
            </Text>
            <Text style={Styles.body}>
              {`Company is responsible for the processing of personal information it receives, under the Privacy Shield Framework, and subsequently transfers to a\nthird party acting as an agent on its behalf.`}
            </Text>
            <Text style={Styles.body}>
              {`With respect to personal information received or transferred pursuant to the Privacy Shield Framework, Company is subject to the regulatory\nenforcement powers of the U.S. FTC. In certain situations, we may be required to disclose personal information in response to lawful requests by\npublic authorities, including to meet national security or law enforcement requirements.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`7. HOW LONG DO WE KEEP YOUR INFORMATION?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.`}
            </Text>
            <Text style={Styles.body}>
              {`We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention\nperiod is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your\npersonal information for longer than 2 years past the termination of the user's account.`}
            </Text>
            <Text style={Styles.body}>
              {`When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is\nnotpossible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information\nand isolate it from any further processing until deletion is possible.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`8. HOW DO WE KEEP YOUR INFORMATION SAFE?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: We aim to protect your personal information through a system of organizational and technical security measures.`}
            </Text>
            <Text style={Styles.body}>
              {`We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we\nprocess. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect\nyour personal information, transmission of personal information to and from our Services or Apps is at your own risk. You should only access the\nservices within a secure environment.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`9. WHAT ARE YOUR PRIVACY RIGHTS?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal\ninformation. You may review, change, or terminate your account at any time.`}
            </Text>
            <Text style={Styles.body}>
              {`In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to\nrequest access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal\ninformation; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your\npersonal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in\naccordance with applicable data protection laws.`}
            </Text>
            <Text style={Styles.body}>
              {`If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note\nhowever that this will not affect the lawfulness of the processing before its withdrawal.`}
            </Text>
            <Text style={Styles.body}>
              {`If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right\nto complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-\nprotection/bodies/authorities/index_en.htm`}
            </Text>
            <Text style={Styles.body}>{`Account Information`}</Text>
            <Text style={Styles.body}>
              {`If you would at any time like to review or change the information in your account or terminate your account, you can:`}
            </Text>
            <Text style={Styles.body}>
              {`Log into your account settings and update your user account.`}
            </Text>
            <Text style={Styles.body}>
              {`Contact us using the contact information provided.`}
            </Text>
            <Text style={Styles.body}>
              {`Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some\ninformation may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or\ncomply with legal requirements.`}
            </Text>
            <Text style={Styles.body}>
              {`Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser\nto remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our\nServices or Apps. To opt-out of interest-based advertising by advertisers on our Services or Apps, visit: http://www.aboutads.info/choices/`}
            </Text>
            <Text style={Styles.body}>
              {`Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that\nwe send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need\nto send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:`}
            </Text>
            <Text style={Styles.body}>
              {`Note your preferences when you register an account with the site.`}
            </Text>
            <Text style={Styles.body}>
              {`Access your account settings and update preferences..`}
            </Text>
            <Text style={Styles.body}>
              {`Contact us using the contact information provided.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`10. DATA BREACH`}
            </Text>
            <Text style={Styles.body}>
              {`A privacy breach occurs when there is unauthorized access to or collection, use, disclosure or disposal of personal information. You will be notified\nabout data breaches when ZeroPoint Platforms Inc believes you are likely to be at risk of serious harm. For example, a data breach may be likely to\nresult in serious financial harm or harm to your mental or physical well-being. In the event that ZeroPoint Platforms Inc becomes aware of a security\nbreach which has resulted or may result in unauthorized access, use or disclosure of personal information ZeroPoint Platforms Inc will promptly\ninvestigate the matter and notify the applicable Supervisory Authority not later than 72 hours after having become aware of it, unless the personal\ndata breach is unlikely to result in a risk to the rights and freedoms of natural persons.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`11. CONTROLS FOR DO-NOT-TRACK FEATURES`}
            </Text>
            <Text style={Styles.body}>
              {`Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can\nactivate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology\nstandard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any\nother mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must\nfollow in the future, we will inform you about that practice in a revised version of this privacy policy.`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`12. DO WE MAKE UPDATES TO THIS POLICY?`}
            </Text>
            <Text style={Styles.body}>
              {`In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.`}
            </Text>
            <Text style={Styles.body}>
              {`We may update this privacy policy from time to time. The updated version\nwill be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a\nnotice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how\nwe are protecting your information..`}
            </Text>
            <Text
              fontSize={"3vh"}
              fontFamily={"HelveticaNeueLTStdMd"}
              textAlign={"center"}
              color={"#7D2BE9"}
            >
              {`13. HOW CAN YOU CONTACT US ABOUT THIS POLICY?`}
            </Text>
            <Text style={Styles.body}>
              {`If you have questions or comments about this policy, you may email us at info@shadow.properties or by post to:`}
            </Text>
            <Text style={Styles.body}>
              {`Shadow.Properties\n16192 Coastal Highway, Lewes\nDelaware 19958`}
            </Text>
          </VStack>
        </View>
      </Stack>
    </NativeBaseProvider>
  );
};
export default Privacy;
const Styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "normal",
    padding: 8,
    color: "#7D2BE9",
    textAlign: "center",
  },
  heading: {
    fontSize: 28,
    padding: 10,
    color: "#9A55DD",
    textAlign: "center",
  },
  body: {
    fontSize: 15,
    padding: 5,
    lineHeight: 30,
    textAlign: "center",
  },
});
