import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import {TodoModal} from '@/components/modal/TodoModal';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: '1', text: 'Comprar leite', completed: true },
  { id: '2', text: 'Ler um livro', completed: true },
  { id: '3', text: 'Fazer exercício', completed: true },
];

export default function todo() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleTaskCompletion = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  function newTask(text: string){
    const newTask = {
      id: (tasks.length + 1).toString(),
      text,
      completed: false
    }

    setTasks([
      ...tasks, newTask
    ])


  }

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

  const data = new Date();
  return (
    <ThemedView style={styles.container}>
      <ThemedView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <TodoModal callBackNewTask={(e) => newTask(e)}  modalStatus={() => setModalVisible(!modalVisible)}/>
        </Modal>
        <ThemedText type="default" style={styles.title}>
          To-do
        </ThemedText>
        <ThemedText type="default" style={styles.title}>
          {data.toDateString()}
        </ThemedText>
      </ThemedView>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {
        !modalVisible ? (
          <View style={styles.containerBotaoFlutuante}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.botaoFlutuante}>
              <TabBarIcon style={styles.botaoFlutuanteText} name="add" />
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
    paddingTop: 50,
    paddingHorizontal: 16,
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
    marginRight: 12,
  },
  taskTextContainer: {
    flex: 1,
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
    right: 16,
  },
  botaoFlutuante: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
  botaoFlutuanteText: {
    fontSize: 50,
    padding: 10,
    color: 'white',
  },
});
