import { Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { useEffect, useState } from "react";

interface IProps {
    modalStatus: () => void;
    callBackNewTask: (task: string) => void;
}


export function TodoModal(props: IProps){

  const [newTask, setNewTask] = useState('')

  function handleInput(event: string){
    setNewTask(event)
  }

  function handleButtonNewTask(){
    props.callBackNewTask(newTask)
    props.modalStatus()
  } 

    return (
      <ThemedView style= {styles.containerModal}>
        <ThemedView style={styles.headerModal}>
          <ThemedText type='subtitle'>
            Adicionar tarefa
          </ThemedText>
          <TouchableOpacity>
            <TabBarIcon onPress={props.modalStatus} name='close'/>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.headerModal}>
          <TextInput value={newTask} onChangeText={handleInput} style={styles.headerModalInput}/>
          <TouchableOpacity onPress={handleButtonNewTask} style={styles.buttonInput}>
            <TabBarIcon name='add'/>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    )
}


const styles = StyleSheet.create({
    containerModal:{
      // backgroundColor: '#03ff9c',
      backgroundColor: '#0ecb80',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      padding: 10,
      shadowColor: 'black',
      gap:10
    },
  
    headerModal:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: 'transparent',
      gap:4
    },
    headerModalInput:{
      backgroundColor:'white',
      padding:10,
      borderRadius:4,
      width:'90%',
    },
    buttonInput:{
      width:'10%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      borderRadius:4,
      shadowColor: 'black',
      shadowRadius:10
    },
  }
);
  