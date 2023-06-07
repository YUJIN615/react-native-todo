import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enterdGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enterdText) {
    setEnteredGoalText(enterdText);
  };
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enterdGoalText, id: Math.random().toString()}])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.InputContainer}>
        <TextInput style={styles.textInput} placeholder="Your corse goal" onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => item.id} 
        alwaysBounceVertical="false" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  InputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'skyblue',
  },
  goalText: {
    color: '#fff',
  }
});
