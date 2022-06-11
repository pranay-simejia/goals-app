import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const changeTextHandler = textEntered => {
    setEnteredGoal(textEntered);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={changeTextHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                props.cancel(enteredGoal);
                setEnteredGoal('');
              }}
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                props.addGoal(enteredGoal);
                setEnteredGoal('');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    padding: 10,
    margin: 10,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
