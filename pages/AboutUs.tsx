import React from "react";
import { View } from "react-native";
import ImageCarousel from "../components/ImageCarousel";

const data = [
  {
    image: require("../assets/aboutUs/ab1.png"),
    title: "Who we are",
    description:
      "A young and nimble IT Services Company focused on Digital Services",
    heading1: "Founded",
    sub1: "In December 2020 by a team of Industry veterans. Focused to build a company that is based on Trust while delivering outcomes to clients.",
    heading2: "Location",
    sub2: "Based out of Chennai, India. Seek to leverage remote working and be able to cater to needs of a global client base.",
  },
  {
    image: require("../assets/aboutUs/ab2.png"),
    title: "Why Trusty Bytes",
    description: "What makes us stand from the rest",
    heading1: "A trusted Partner committed to your success",
    sub1: "In December 2020 by a team of Industry veterans. Focused to build a company that is based on Trust while delivering outcomes to clients.",
    heading2: "Flexible Engagement Models",
    sub2: "- Build Operate Transfer, Staff Aug, Fixed Price, Outcome driven",
  },
  {
    image: require("../assets/aboutUs/ab3.png"),
    title: "Blueprint of our vision",
    description: "Full-stack, Digital DevOps & Digital Marketing.",
    heading1: "Digital Services",
    sub1: "Digital Tech: Full-stack, Digital DevOps & Digital Marketing.Digital Domain: Industry Domains such as Life Sciences, Retail.",
    heading2: "Highly flexible ramp up/ramp downs",
    sub2: "Full stack DevOps engineers-Improved utilization in your programs",
  },
];

const AboutUs = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageCarousel data={data} />
      </View>
    </>
  );
};

export default AboutUs;
