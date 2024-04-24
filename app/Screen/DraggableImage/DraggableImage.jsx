import { Animated, Button, Image, Modal, PanResponder, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../Constants/colors";
import { useRef, useState } from "react";

const DraggableImage = ({ source, initialPosition, index }) => {
  const [shirtName, setShirtName] = useState('Düzenle');
  const [modalVisible, setModalVisible] = useState(false);
  const pan = useRef(new Animated.ValueXY(initialPosition)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, {
          dx: pan.x,
          dy: pan.y
        }],
        { useNativeDriver: false }
      ),
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleSaveLabel = () => {
    setModalVisible(false);
  };

  return (
    <View key={`draggable-${index}`}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Futbolcu ismi:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setShirtName}
              value={shirtName}
              placeholder="Enter label"
            />
            <Button title="Kaydet" onPress={handleSaveLabel} />
          </View>
        </View>
      </Modal>
    <Animated.View
      style={[{
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }]}
      {...panResponder.panHandlers}
    >
      <Image source={source} style={styles.image} />
      <Text onPress={handleOpenModal} style={styles.editText}>{shirtName}</Text>
    </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.primaryColorMed,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 40,
    width: 200,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  editText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryFontColorDark,
    textAlign: 'center',
    width: 80
  }
});


export default DraggableImage;
