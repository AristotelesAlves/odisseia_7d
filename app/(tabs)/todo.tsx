import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { Checkbox } from 'expo-checkbox'; // Importa o CheckBox do expo-checkbox
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

// Definição dos tipos para uma tarefa
interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: '1', text: 'Comprar leite', completed: false },
  { id: '2', text: 'Ler um livro', completed: false },
  { id: '3', text: 'Fazer exercício', completed: false },
];

export default function Tarefa() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [modal, setModal] = useState(false)

  const toggleTaskCompletion = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <Checkbox
        value={item.completed}
        onValueChange={() => toggleTaskCompletion(item.id)}
        style={styles.checkbox}
      />
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={styles.taskTextContainer}>
        <Text style={[styles.taskText, item.completed && styles.taskCompleted]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ThemedView style={styles.container}>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}
        >
          <View style= {styles.containerModal}>
            <Text>
              Modal
            </Text>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Text>
                Fechar Modal
              </Text>
            </TouchableOpacity>
            <TextInput/>
          </View>
          
      </Modal>

      <ThemedText type="default" style={styles.title}>
        To-do
      </ThemedText>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {
        modal == false ? (
          <View style={styles.containerBotaoFlutuante}>
            <TouchableOpacity onPress={() => setModal(true)} style={styles.botaoFlutuante }>
              <TabBarIcon style={styles.botaoFlutuanteText} name="add"/>
            </TouchableOpacity>
          </View>

        ) : null
      }
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    marginRight: 12, // Espaço entre a caixa de seleção e o texto
  },
  taskTextContainer: {
    flex: 1, // Permite que o texto ocupe o espaço restante
  },
  taskText: {
    fontSize: 18,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  containerBotaoFlutuante: {
    position: 'absolute',
    bottom: 80,
    right: 16
  },
  botaoFlutuante: {
    
  },
  botaoFlutuanteText: {
    fontSize:50,
    padding:10,
    backgroundColor:'red',
    borderRadius:100,
    color:'white'
  },
  containerModal:{
    backgroundColor: '#fdf',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 10,
    shadowColor: 'black',
  }
});
