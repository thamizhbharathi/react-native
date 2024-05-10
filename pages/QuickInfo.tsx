import React from "react";
import { View } from "react-native";
import ImageCarousel from "../components/ImageCarousel";

const data = [
  {
    image: require("../assets/quick/1.png"),
    title: "Our DNA",
    description: "is why our clients love engaging with us",
    heading1: "Trust",
    sub1: "Trust – it is in our DNA.. forms the basis of all our interactions with our stakeholders.",
  },
  {
    image: require("../assets/quick/2.png"),
    title: "Our DNA",
    description: "is why our clients love engaging with us",
    heading1: "Win-Win",
    sub1: "WIN-WIN.. a strong desire to ensure results for all our stakeholders without compromise in quality.",
  },
  {
    image: require("../assets/quick/3.png"),
    title: "Our DNA",
    description: "is why our clients love engaging with us",
    heading1: "Lean Principles",
    sub1: "Deliver value from the customer’s perspective, eliminate things that deter value of the services.",
  },
  {
    image: require("../assets/quick/4.png"),
    title: "Our DNA",
    description: "is why our clients love engaging with us",
    heading1: "Continuous Learning",
    sub1: "Continuously Learning.. we never claim the peak as we set high benchmarks for ourselves.",
  },
  {
    image: require("../assets/quick/5.png"),
    title: "Our DNA",
    description: "is why our clients love engaging with us",
    heading1: "Passionate Workforce",
    sub1: "A passionate team within an environment of innovation, dynamism, flexibility and learning.",
  },
];
const QuickInfo = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageCarousel data={data} />
      </View>
    </>
  );
};

export default QuickInfo;
