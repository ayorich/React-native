import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,  View,Button,FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
  const [courseGoal, setCourseGoal]=useState([]);
const [isAddMode, setIsAddMode]=useState(false)
 

  const addGoalHandler=(goalTitle)=>{
   
    setCourseGoal(currentGoals=>[...currentGoals, {
      id:Math.random().toString(),
      value:  goalTitle}])
      setIsAddMode(false)
  }

  const removeGoalHandler = goalId =>{

    setCourseGoal(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler=()=>{
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button 
      title="Add New Goal"
       onPress={()=>setIsAddMode(true)}
       />
      <GoalInput
      onAddGoal={addGoalHandler}
      visible={isAddMode}
      onCancel={cancelGoalAdditionHandler}
      />
      <FlatList 
      data={courseGoal} 
      keyExtractor={(item,index)=>item.id}
      renderItem={itemData=>(
        <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler}/>
        )
      } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  

})
