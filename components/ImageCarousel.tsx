import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

interface ImageData {
  image: any;
  title: any ;
  description: any;
  heading1: any;
  sub1: any;
  heading2: any;
  sub2: any;
}

interface ImageCarouselProps {
  data: ImageData[] | any;
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  contentContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#006cb5',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#006cb5',
    textAlign: 'left',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#006cb5',
    marginHorizontal: 5,
  },
  subText: {
    marginBottom: 16,
  },
});

const ImageCarousel: React.FC<ImageCarouselProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        paginationStyle={styles.paginationStyle}>
        {data.map((item: any, index: any) => (
          <View style={styles.slide} key={index}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.contentContainer}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.subText}>{item.description}</Text>
              <Text style={styles.heading}>{item.heading1}</Text>
              <Text style={styles.subText}>{item.sub1}</Text>
              <Text style={styles.heading}>{item.heading2}</Text>
              <Text style={styles.subText}>{item.sub2}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default ImageCarousel;
