import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import mainBg from '../../Images/appImages/mainBg.png';
import bench from '../../Images/appImages/bench.png';
import pitchBg from '../../Images/appImages/ground.png';
import DraggableImage from '../DraggableImage/DraggableImage';
import colors from '../../Constants/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Pitch({ route, navigation }) {
  const { selectedImage } = route.params; 

  const initialPositions = [
    { x: wp('43%'), y: hp('2%') },
    { x: wp('13%'), y: hp('7%')  },
    { x: wp('73%'), y: hp('-4%')  },
    { x: wp('43%'), y: hp('-2%')  },
    { x: wp('13%'), y: hp('5%')  },
    { x: wp('73%'), y: hp('-4%') },
    { x: wp('43%'), y: hp('-5%')  },
    { x: wp('7%'), y: hp('2%')  },
    { x: wp('26%'), y: hp('-9%')  }
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
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: hp('3%')}}>Anasayfa</Text>
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
    position: 'relative', 
    top: 40
  },
  pitchImg: {
    width: wp('100%'),
    height: hp('75%'),
    borderRadius: 8,
    position: 'relative',
    objectFit: 'fill' 
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
    width: wp('30%'),
    height: hp('6%'),
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
