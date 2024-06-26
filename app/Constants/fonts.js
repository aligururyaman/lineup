import * as Font from 'expo-font';


const fonts = async () => {
  await Font.loadAsync({
    'Nunito-Regular': require('./Fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./Fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('./Fonts/Nunito-ExtraBold.ttf'),
  });
};

export default fonts;