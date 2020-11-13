import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native'

export default GoalItem = props =>{

    return(
        <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>

        <View style={styles.listItem} on>
          <Text >{props.title}</Text>
          </View>
        </TouchableOpacity >
    )
}


const styles=StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginVertical:10
      }
})