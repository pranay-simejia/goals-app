import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [currentGoals, setCurrentGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const buttonPressedHandler = enteredGoal => {
    setCurrentGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
    setModalVisible(false);
  };
  const goalDeleteHandler = goalId => {
    setCurrentGoals(currentGoals => {
      return currentGoals.filter(goals => goals.id != goalId);
    });
  };
  const addGoalHandler = () =>{
    setModalVisible(true)
  }
  const cancelGoalHandler = () =>{
    setModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={addGoalHandler}/>
      <GoalInput visible={modalVisible} cancel={cancelGoalHandler} addGoal={buttonPressedHandler} />
      <FlatList
        data={currentGoals}
        renderItem={itemData => (
          <GoalItem onDelete={goalDeleteHandler} item={itemData} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 50,
  },
});
export default App;
