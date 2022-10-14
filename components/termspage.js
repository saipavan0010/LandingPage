import React from "react";

import {
  NativeBaseProvider,
  Center,
  Heading,
  Text,
  Box,
  Link,
  Stack,
} from "native-base";
import { StyleSheet } from "react-native";
import TopBar from "./Topbar";
// import {} from "react native"
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const TnC = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Stack backgroundColor={"white"}>
        <Stack>
          <TopBar navigation={navigation} />
        </Stack>
        <Center top={vh(35)}>
          <Box width={"75%"}>
            <Center>
              <Heading style={Styles.title}>TERMS AND CONDITIONS</Heading>
              <Text style={Styles.heading}>1. Agreement to Terms</Text>
              <Text textAlign={"center"} style={Styles.body}>
                1.1 These Terms and Conditions constitute a legally binding
                agreement made between you, whether personally or on behalf of
                an entity (you), and ZeroPoint Platforms Inc, doing business as
                Shadow.Properties, located at Delaware 19958 (we, us),
                concerning your access to and use of the ShadowProperties
                <Link
                  color={"#9A55DD"}
                  href={"https://shadow.properties"}
                  isExternal
                >
                  (https://shadow.properties)
                </Link>{" "}
                website as well as any related applications (the Site).{"\n"}
                The Site provides the following services: Real-Estate property
                mapping, data lookup and automated outreach management
                (Services). You agree that by accessing the Site and/or
                Services, you have read, understood, and agree to be bound by
                all of these Terms and Conditions.{"\n"}
                If you do not agree with all of these Terms and Conditions, then
                you are prohibited from using the Site and Services and you must
                discontinue use immediately. We recommend that you print a copy
                of these Terms and Conditions for future reference.{"\n"}
                1.2 The supplemental policies set out in Section 1.7 below, as
                well as any supplemental terms and condition or documents that
                may be posted on the Site from time to time, are expressly
                incorporated by reference.{"\n"}
                1.3 We may make changes to these Terms and Conditions at any
                time. The updated version of these Terms and Conditions will be
                indicated by an updated “Revised” date and the updated version
                will be effective as soon as it is accessible. You are
                responsible for reviewing these Terms and Conditions to stay
                informed of updates. Your continued use of the Site represents
                that you have accepted such changes.{"\n"}
                1.4 We may update or change the Site from time to time to
                reflect changes to our products, our users' needs and/or our
                business priorities.{"/n"}
                1.5 Our site is directed to people residing in United States.
                The information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                {"\n"}
                1.6 The Site is intended for users who are at least 18 years
                old. If you are under the age of 18, you are not permitted to
                register for the Site or use the Services without parental
                permission.
                {"\n"}
                1.7 Additional policies which also apply to your use of the Site
                include: Our Privacy Notice https://shadow.properties/privacy,
                which sets out the terms on which we process any personal data
                we collect from you, or that you provide to us. By using the
                Site, you consent to such processing and you warrant that all
                data provided by you is accurate. Certain parts of this Site can
                be used only on payment of a fee.
              </Text>
              <Text style={Styles.heading}>2. Acceptable Use</Text>
              <Text textAlign={"center"} style={Styles.body}>
                2.1 You may not access or use the Site for any purpose other
                than that for which we make the site and our services available.
                The Site may not be used in connection with any commercial
                endeavors except those that are specifically endorsed or
                approved by us.
                {"\n"}
                2.2 As a user of this Site, you agree not to:{"\n"}
                Make any unauthorized use of the Site, including collecting
                usernames and/or email addresses of users to send unsolicited
                email or creating user accounts under false pretences{"\n"}
                Systematically retrieve data or other content from the Site to a
                compile database or directory without written permission from us
                {"\n"}
                Use the Site to advertise or sell goods and services{"\n"}
                Circumvent, disable, or otherwise interfere with
                security-related features of the Site, including features that
                prevent or restrict the use or copying of any content or enforce
                limitations on the use{"\n"}
                Engage in unauthorized framing of or linking to the Site{"\n"}
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords{"\n"}
                Make improper use of our support services, or submit false
                reports of abuse or misconduct{"\n"}
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools{"\n"}
                Interfere with, disrupt, or create an undue burden on the Site
                or the networks and services connected to the Site{"\n"}
                Attempt to impersonate another user or person, or use the
                username of another user{"\n"}
                Sell or otherwise transfer your profile{"\n"}
                Use any information obtained from the Site in order to harass,
                abuse, or harm another person{"\n"}
                Use the Site or our content as part of any effort to compete
                with us or to create a revenue-generating endeavor or commercial
                enterprise{"\n"}
                Decipher, decompile, disassemble, or reverse engineer any of the
                software comprising or in any way making up a part of the Site
                {"\n"}
                Attempt to access any portions of the Site that you are
                restricted from accessing{"\n"}
                Harass, annoy, intimidate, or threaten any of our employees,
                agents, or other users{"\n"}
                Copy or adapt the Site’s software, including but not limited to
                Flash, PHP, HTML, JavaScript, or other code{"\n"}
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material that interferes with
                any party’s uninterrupted use and enjoyment of the Site, or any
                material that acts as a passive or active information collection
                or transmission mechanism{"\n"}
                Use, launch, or engage in any automated use of the system, such
                as using scripts to send comments or messages, robots, scrapers,
                offline readers, or similar data gathering and extraction tools
                {"\n"}
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Site{"\n"}
                Use the Site in a manner inconsistent with any applicable laws
                or regulations{"\n"}
                Advertise products or services not intended by us{"\n"}
                Falsely imply a relationship with us or another company with
                whom you do not have a relationship{"\n"}
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                3. Information you provide to us
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                3.1 You represent and warrant that: (a) all registration
                information you submit will be true, accurate, current, and
                complete and relate to you and not a third party; (b) you will
                maintain the accuracy of such information and promptly update
                such information as necessary; (c) you will keep your password
                confidential and will be responsible for all use of your
                password and account; (d) you have the legal capacity and you
                agree to comply with these Terms and Conditions; and (e) you are
                not a minor in the jurisdiction in which you reside, or if a
                minor, you have received parental permission to use the Site.
                {"\n"}
                If you know or suspect that anyone other than you knows your
                user information (such as an identification code or user name)
                and/or password you must promptly notify us at
                info@shadow.properties.
                {"\n"}
                3.2 If you provide any information that is untrue, inaccurate,
                not current or incomplete, we may suspend or terminate your
                account. We may remove or change a user name you select if we
                determine that such user name is inappropriate.
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                4. Our content
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                4.1 Unless otherwise indicated, the Site and Services including
                source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (Our Content) are owned or licensed to us, and are
                protected by copyright and trade mark laws.{"\n"}
                4.2 Except as expressly provided in these Terms and Conditions,
                no part of the Site, Services or Our Content may be copied,
                reproduced, aggregated, republished, uploaded, posted, publicly
                displayed, encoded, translated, transmitted, distributed, sold,
                licensed, or otherwise exploited for any commercial purpose
                whatsoever, without our express prior written permission.{"\n"}
                4.3 Provided that you are eligible to use the Site, you are
                granted a limited licence to access and use the Site and Our
                Content and to download or print a copy of any portion of the
                Content to which you have properly gained access solely for your
                personal, non-commercial use.{"\n"}
                4.4 You shall not (a) try to gain unauthorised access to the
                Site or any networks, servers or computer systems connected to
                the Site; and/or (b) make for any purpose including error
                correction, any modifications, adaptions, additions or
                enhancements to the Site or Our Content, including the
                modification of the paper or digital copies you may have
                downloaded.{"\n"}
                4.5 We shall (a) prepare the Site and Our Content with
                reasonable skill and care; and (b) use industry standard virus
                detection software to try to block the uploading of content to
                the Site that contains viruses.{"\n"}
                4.6 The content on the Site is provided for general information
                only. It is not intended to amount to advice on which you should
                rely. You must obtain professional or specialist advice before
                taking, or refraining from taking, any action on the basis of
                the content on the Site.{"\n"}
                4.7 Although we make reasonable efforts to update the
                information on our site, we make no representations, warranties
                or guarantees, whether express or implied, that Our Content on
                the Site is accurate, complete or up to date.
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                5. Link to third party content
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                5.1 The Site may contain links to websites or applications
                operated by third parties. We do not have any influence or
                control over any such third party websites or applications or
                the third party operator. We are not responsible for and do not
                endorse any third party websites or applications or their
                availability or content.{"\n"}
                5.2 We accept no responsibility for adverts contained within the
                Site. If you agree to purchase goods and/or services from any
                third party who advertises in the Site, you do so at your own
                risk. The advertiser, and not us, is responsible for such goods
                and/or services and if you have any questions or complaints in
                relation to them, you should contact the advertiser.{"\n"}
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                6. Site Management
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                6.1 We reserve the right at our sole discretion, to (1) monitor
                the Site for breaches of these Terms and Conditions; (2) take
                appropriate legal action against anyone in breach of applicable
                laws or these Terms and Conditions; (3) remove from the Site or
                otherwise disable all files and content that are excessive in
                size or are in any way a burden to our systems; and (4)
                otherwise manage the Site in a manner designed to protect our
                rights and property and to facilitate the proper functioning of
                the Site and Services.
              </Text>
              <Text style={Styles.heading}>
                7. Modifications to and availability of the Site
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                7.1 We reserve the right to change, modify, or remove the
                contents of the Site at any time or for any reason at our sole
                discretion without notice. We also reserve the right to modify
                or discontinue all or part of the Services without notice at any
                time.{"\n"}
                7.2 We cannot guarantee the Site and Services will be available
                at all times. We may experience hardware, software, or other
                problems or need to perform maintenance related to the Site,
                resulting in interruptions, delays, or errors. You agree that we
                have no liability whatsoever for any loss, damage, or
                inconvenience caused by your inability to access or use the Site
                or Services during any downtime or discontinuance of the Site or
                Services.{"\n"}
                7.3 There may be information on the Site that contains
                typographical errors, inaccuracies, or omissions that may relate
                to the Services, including descriptions, pricing, availability,
                and various other information. We reserve the right to correct
                any errors, inaccuracies, or omissions and to change or update
                the information at any time, without prior notice.
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                8. Disclaimer/Limitation of Liability
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                8.1 The Site and Services are provided on an as-is and
                as-available basis. You agree that your use of the Site and/or
                Services will be at your sole risk except as expressly set out
                in these Terms and Conditions. All warranties, terms, conditions
                and undertakings, express or implied (including by statute,
                custom or usage, a course of dealing, or common law) in
                connection with the Site and Services and your use thereof
                including, without limitation, the implied warranties of
                satisfactory quality, fitness for a particular purpose and
                non-infringement are excluded to the fullest extent permitted by
                applicable law.{"\n"}
                We make no warranties or representations about the accuracy or
                completeness of the Site’s content and are not liable for any
                (1) errors or omissions in content: (2) any unauthorized access
                to or use of our servers and/or any and all personal information
                and/or financial information stored on our server; (3) any
                interruption or cessation of transmission to or from the site or
                services; and/or (4) any bugs, viruses, trojan horses, or the
                like which may be transmitted to or through the site by any
                third party. We will not be responsible for any delay or failure
                to comply with our obligations under these Terms and Conditions
                if such delay or failure is caused by an event beyond our
                reasonable control.{"\n"}
                8.2 Our responsibility for loss or damage suffered by you:{"\n"}
                We will not be liable to you for any loss or damage, whether in
                contract, tort (including negligence), breach of statutory duty,
                or otherwise, even if foreseeable, arising under or in
                connection with:{"\n"}
                use of, or inability to use, our Site/Services; or{"\n"}
                use of or reliance on any content displayed on our Site.{"\n"}
                In particular, we will not be liable for:{"\n"}
                loss of profits, sales, business, or revenue;{"\n"}
                business interruption;{"\n"}
                loss of anticipated savings;{"\n"}
                loss of business opportunity, goodwill or reputation; or any
                indirect or consequential loss or damage.
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                9. Term and Termination
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                9.1 These Terms and Conditions shall remain in full force and
                effect while you use the Site or Services or are otherwise a
                user of the Site, as applicable. You may terminate your use or
                participation at any time, for any reason, by following the
                instructions for terminating user accounts in your account
                settings, if available, or by contacting us at
                info@shadow.properties.{"\n"}
                9.2 Without limiting any other provision of these Terms and
                Conditions, we reserve the right to, in our sole discretion and
                without notice or liability, deny access to and use of the Site
                and the Services (including blocking certain IP addresses), to
                any person for any reason including without limitation for
                breach of any representation, warranty or covenant contained in
                these Terms and Conditions or of any applicable law or
                regulation.{"\n"}
                If we determine, in our sole discretion, that your use of the
                Site/Services is in breach of these Terms and Conditions or of
                any applicable law or regulation, we may terminate your use or
                participation in the Site and the Services or delete your
                profile and any content or information that you posted at any
                time, without warning, in our sole discretion.{"\n"}
                9.3 If we terminate or suspend your account for any reason set
                out in this Section 9, you are prohibited from registering and
                creating a new account under your name, a fake or borrowed name,
                or the name of any third party, even if you may be acting on
                behalf of the third party. In addition to terminating or
                suspending your account, we reserve the right to take
                appropriate legal action, including without limitation pursuing
                civil, criminal, and injunctive redress.{"\n"}
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                10. Mobile Application
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                10.1. If you access the Services via a mobile application, then
                we grant you a revocable, non-exclusive, non-transferable,
                limited right to install and use the mobile application on
                wireless electronic devices owned or controlled by you, and to
                access and use the mobile application on such devices strictly
                in accordance with the terms and conditions of this license.
                {"\n"}
                10.2 You will not:{"\n"}
                (a) reverse engineer, decompile or otherwise try to discover the
                source code of the software/application unless you have first
                written to us requesting interoperability information and we
                have failed to provide you with that information or if we have
                failed to offer to provide you with interoperability information
                on reasonable conditions";{"\n"}
                (b) make any modification, adaptation, improvement, enhancement,
                translation or derivative work from the application;{"\n"}
                (c) breach any applicable laws, rules or regulations in
                connection with your access or use of the application;{"\n"}
                (d) remove, alter or obscure any proprietary notice (including
                any notice of copyright or trade mark) posted by us or the
                licensors of the application;{"\n"}
                (e) use the application for any revenue generating endeavor,
                commercial enterprise, or other purpose for which it is not
                designed or intended;{"\n"}
                (f) make the application available over a network or other
                environment permitting access or use by multiple devices or
                users at the same time;{"\n"}
                (g) use the application for creating a product, service or
                software that is, directly or indirectly, competitive with or in
                any way a substitute for the application;{"\n"}
                (h) use the application to send automated queries to any website
                or to send any unsolicited commercial e-mail; or{"\n"}
                (i) use any proprietary information or any of our interfaces or
                our other intellectual property in the design, development,
                manufacture, licensing or distribution of any applications,
                accessories or devices for use with the application.{"\n"}
                10.3 The following terms apply when you use a mobile application
                obtained from either the Apple Store or Google Play (each an App
                Distributor) to access the Services:{"\n"}
                (a) The licence granted to you for our mobile application is
                limited to a non-transferable licence to use the application on
                a device that utilizes the Apple iOS or Android operating
                system, as applicable, and in accordance with the usage rules
                set forth in the applicable App Distributor terms of service;
                {"\n"}
                (b) We are responsible for providing any maintenance and support
                services with respect to the mobile application as specified in
                these Terms and Conditions or as otherwise required under
                applicable law. You acknowledge that each App Distributor has no
                obligation whatsoever to furnish any maintenance and support
                services with respect to the mobile application;{"\n"}
                (c) In the event of any failure of the mobile application to
                conform to any applicable warranty, you may notify an App
                Distributor, and the App Distributor, in accordance with its
                terms and policies, may refund the purchase price, if any, paid
                for the mobile application, and to the maximum extent permitted
                by applicable law, an App Distributor will have no other
                warranty obligation whatsoever with respect to the mobile
                application;
                {"\n"}
                (d) You represent and warrant that (i) you are not located in a
                country that is subject to a U.S. government embargo, or that
                has been designated by the U.S. government as a “terrorist
                supporting” country; and (ii) you are not listed on any U.S.
                government list of prohibited or restricted parties;{"\n"}
                (e) You must comply with applicable third party terms of
                agreement when using the mobile application, e.g., if you have a
                VoIP application, then you must not be in breach of their
                wireless data service agreement when using the mobile
                application; and{"\n"}
                (f) You acknowledge and agree that the App Distributors are
                third party beneficiaries of these Terms and Conditions, and
                that each App Distributor will have the right (and will be
                deemed to have accepted the right) to enforce these Terms and
                Conditions against you as a third party beneficiary thereof.
                {"\n"}
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                11. General
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                11.1 Visiting the Site, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Site,
                satisfy any legal requirement that such communication be in
                writing.{"\n"}
                You hereby agree to the use of electronic signatures, contracts,
                orders and other records and to electronic delivery of notices,
                policies and records of transactions initiated or completed by
                us or via the Site. You hereby waive any rights or requirements
                under any statutes, regulations, rules, ordinances or other laws
                in any jurisdiction which require an original signature or
                delivery or retention of non-electronic records, or to payments
                or the granting of credits by other than electronic means.{"\n"}
                11.2 These Terms and Conditions and any policies or operating
                rules posted by us on the Site or in respect to the Services
                constitute the entire agreement and understanding between you
                and us.{"\n"}
                11.3 Our failure to exercise or enforce any right or provision
                of these Terms and Conditions shall not operate as a waiver of
                such right or provision.{"\n"}
                11.4 We may assign any or all of our rights and obligations to
                others at any time.{"\n"}
                11.5 We shall not be responsible or liable for any loss, damage,
                delay or failure to act caused by any cause beyond our
                reasonable control.{"\n"}
                11.6 If any provision or part of a provision of these Terms and
                Conditions is unlawful, void or unenforceable, that provision or
                part of the provision is deemed severable from these Terms and
                Conditions and does not affect the validity and enforceability
                of any remaining provisions.{"\n"}
                11.7 There is no joint venture, partnership, employment or
                agency relationship created between you and us as a result of
                these Terms and Conditions or use of the Site or Services.{"\n"}
                11.8 These Terms and Conditions, their subject matter and their
                formation (and any non-contractual disputes or claims) are
                governed by Indian Law. We both agree to the exclusive
                jurisdiction of the courts of India.{"\n"}
                11.9 In order to resolve a complaint regarding the Services or
                to receive further information regarding use of the Services,
                please contact us by email at info@shadow.properties or by post
                to:{"\n"}
              </Text>
              <Text fontSize={20} style={Styles.heading}>
                12. Refund and Cancellation Policy
              </Text>
              <Text textAlign={"center"} style={Styles.body}>
                We follow a reliable refund policy to let our customers feel
                privileged about their association with us. Please read the
                guidelines governing the refund policy.{"\n"}
                12.1 If you wish to cancel your account, notify us at least 15
                days before end of your term (via an email to
                support@shadow.properties) . Upon cancellation, your data is
                deleted from our servers. Since deletion of all data is final
                please be sure that you do in fact want to cancel your account
                before doing so.{"\n"}
                12.2 Your subscription gets renewed automatically at the end of
                each month.{"\n"}
                12.3 You can upgrade or downgrade level of our services at any
                time of your usage, however ZeroPoint Platforms Inc does not
                refund any fees in that case.{"\n"}
                12.4 If you stop using our services in between the term, we will
                not refund you the fees paid by you for the remaining term.
                {"\n"}
                12.5 We reserve the right to modify or terminate the ZeroPoint
                Platforms Inc service(s) for any reason, without notice at any
                time.{"\n"}
                12.6 Fraud: Without limiting any other remedies, ZeroPoint
                Platforms Inc may suspend or terminate your account if we
                suspect that you (by conviction, settlement, insurance or
                investigation, or otherwise, forcefully removed our branding)
                have engaged in fraudulent activity in connection with the
                services offered by us.
                {"\n"}
                12.7 Note: No refunds are offered, even if a plan is canceled
                mid-month.{"\n"}
                Shadow.Properties{"\n"}
                16192 Coastal Highway, Lewes{"\n"}
                Delaware 19958{"\n"}
              </Text>
            </Center>
          </Box>
        </Center>
      </Stack>
    </NativeBaseProvider>
  );
};
export default TnC;
const Styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "normal",
    padding: 8,
    color: "#7D2BE9",
  },
  heading: {
    fontSize: 28,
    padding: 10,
    color: "#9A55DD",
    textAlign: "center",
  },
  body: {
    fontSize: 15,
    padding: 10,
    lineHeight: 30,
    textAlign: "center",
  },
});
