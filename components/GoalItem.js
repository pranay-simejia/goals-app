import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8}onPress={()=>props.onDelete(props.item.item.id)}>
      <View style={styles.goalContainer}>
        <Text style={{color: 'black'}}>{props.item.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
