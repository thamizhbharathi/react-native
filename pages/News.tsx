import React from 'react'
import { View } from 'react-native';
import ImageCarousel from '../components/ImageCarousel';


const data = [
  {
    image: require("../assets/news/1.png"),
    title: "Digital Marketing",
    description:
      "We help companies effortlessly showcase their products & services to specifically targeted user groups.",
    sub2: "Through our digital marketing services, we will bring together technology and the art of communication to enrich your digital presence.",
  },
  {
    image: require("../assets/news/2.png"),
    title: "Full-Stack Development",
    description:
      "We have an excellent team of full-stack developers who are capable of creating engaging and high-performance websites and applications.",
    sub2: "Combining our developer’s skills & experience with latest technologies we can deliver you robust applications.",
  },
];

const News = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageCarousel data={data} />
      </View>
    </>
  );
}

export default News
