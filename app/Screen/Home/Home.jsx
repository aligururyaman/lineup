import React, { useState } from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import mainBg from '../../Images/appImages/mainBg.png';
import mainTop from '../../Images/appImages/mainTop.png';
import colors from '../../Constants/colors';
import shirt1 from '../../Images/shirts/1.png';
import shirt2 from '../../Images/shirts/2.png';
import shirt3 from '../../Images/shirts/3.png';
import shirt4 from '../../Images/shirts/4.png';
import shirt5 from '../../Images/shirts/5.png';
import shirt6 from '../../Images/shirts/6.png';
import shirt7 from '../../Images/shirts/7.png';
import shirt8 from '../../Images/shirts/8.png';
import shirt9 from '../../Images/shirts/9.png';
import fonts from '../../Constants/fonts';

export default function Home({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const sahayagit = () => {
    navigation.navigate('Pitch', { selectedImage });
  };

  const images = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9];

  return (
    <ImageBackground source={mainBg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={mainTop} style={styles.topImage} />
        </View>
        <View style={styles.shirtSelect}>
          {images.map((src, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedImage(src)} style={[
              styles.shirtImage,
              { borderColor: selectedImage === src ? 'black' : 'transparent', borderWidth: selectedImage === src ? 2 : 0 }
            ]}>
              <Image source={src} style={{ height: 160, width: 110, resizeMode: 'contain' }}/>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.goCon}>
          <Text onPress={sahayagit} style={styles.goBtn}>Kadro Kur</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: '100%', 
    height: '100%' 
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  topImage: {
    height: 100, 
    width: 300,
  },
  shirtSelect: {
    backgroundColor: colors.primaryColorLight,
    width: '90%',
    height: '60%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shirtImage: {
    margin: 5,
    borderWidth: 2,
    borderColor: colors.primaryColorDark,
    width: 100 + 6,
    height: 140 + 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goCon: {
    marginTop: 30,
    alignSelf: 'center',
    width: 110,
    height: 40,
    backgroundColor: colors.primaryFontColorMed,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goBtn: {
    fontSize: 26,
    color: colors.primaryColorDark,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: 'Nunito-Bold'
  }
});