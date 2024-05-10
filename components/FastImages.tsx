import {Image} from 'expo-image';
import React, {useState} from 'react';
import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import ImageViewer from 'react-native-image-zoom-viewer';


const FastImages = () => {
  const imageUris: string[] = [];
  const startingNumber: number = 400;
  const numberOfImages: number = 500;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (uri: string) => {
    setSelectedImage(uri);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const blurhash: string =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  for (let i = 0; i < numberOfImages; i++) {
    const imageUrl: string = `https://picsum.photos/${startingNumber + i}`;
    imageUris.push(imageUrl);
  }

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={{margin: 5}}>
        <TouchableOpacity onPress={() => openImage(item)} style={{margin: 5}}>
          <Image
            style={{width: 80, height: 100}}
            source={{uri: item}}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={imageUris}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
      />
      <Modal visible={selectedImage !== null} onRequestClose={closeModal}>
        <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
          <Image
            style={styles.modalImage}
            source={{uri: selectedImage!}}
            placeholder={blurhash}
            contentFit="cover"
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default FastImages;
