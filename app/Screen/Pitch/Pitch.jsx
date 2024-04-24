import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import mainBg from '../../Images/appImages/mainBg.png';
import bench from '../../Images/appImages/bench.png';
import pitchBg from '../../Images/appImages/ground.png';
import DraggableImage from '../DraggableImage/DraggableImage';
import colors from '../../Constants/colors';

export default function Pitch({ route, navigation }) {
  const { selectedImage } = route.params; 

  const initialPositions = [
    { x: 165, y: 20 },
    { x: 30, y: 100 },
    { x: 320, y: 20 },
    { x: 160, y: 30 },
    { x: 60, y: 90 },
    { x: 280, y: 0 },
    { x: 165, y: -20 },
    { x: 100, y: 21 },
    { x: 20, y: -76 }
  ];

  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={mainBg} style={styles.background}>
      <SafeAreaView style={styles.pitchContainer}>
        <Image source={pitchBg} style={styles.pitchImg} />
        <View style={styles.goBackCon}>
          <View >
            <Image source={bench} style={styles.benchImg} />
          </View>
          <TouchableOpacity onPress={goBack} style={styles.goBackBtn}>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24}}>Anasayfa</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.draggableContainer}>
          {initialPositions.map((pos, index) => (
            <DraggableImage
              key={index}
              source={selectedImage}
              initialPosition={pos}
            />
          ))}
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pitchContainer: {
    flex: 1,
    width: '100%', 
    height: '85%', 
    position: 'relative', 
    top: 40
  },
  pitchImg: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
    position: 'relative', 
  },
  draggableContainer: {
    position: 'absolute',
  },
  goBackCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative', 
    width: '100%',
  },
  goBackBtn: {
    width: 110,
    height: 40,
    backgroundColor: colors.primaryFontColorMed,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
  },
  benchImg: {
    width: 200,
    height: 250,
    resizeMode: 'center',
    position: 'relative', 
    bottom: 50
  }
});
