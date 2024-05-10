import React from 'react'
import { View } from 'react-native';
import ImageCarousel from '../components/ImageCarousel';

const data = [
  {
    image: require("../assets/announce/1.png"),
    title: "Full Stack Development",
    description:
      "Full stack development engineers across various technologies like MERN, MEAN, Java & DotNet",
    heading1: "Full-Stack Digital DevOps",
    sub1: "Development and Operations,Front End, Back End,CI/CD,Automation and Testing,Environments,Adjacent Skills,Latest trends",
  },
];

const Announcements = () => {
  return (
    <>
      <>
        <View style={{ flex: 1 }}>
          <ImageCarousel data={data} />
        </View>
      </>
    </>
  );
}

export default Announcements
