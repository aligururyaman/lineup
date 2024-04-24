import { View, Text } from 'react-native'
import React from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function DatePicker() {

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate); // Tarih seçildiğinde state'i güncelle
  };

  const handleConfirm = () => {
    setModalVisible(false); // Tarih seçildikten sonra modal'ı kapat
    // Burada seçilen tarih ile ilgili işlemleri yapabilirsiniz.
    console.log("Seçilen Tarih: ", date);
  };

  
  return (
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
                <DateTimePickerAndroid
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="inline"
                  onChange={onChange}
                />
                <Button title="Seç" onPress={handleConfirm} />
              </View>
            </View>
          </Modal>
  )
}