import { Image, StyleSheet, Platform,View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function tarefa() {
  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.headerContainer}>

        </ThemedView>
        <ThemedText type='default'>
            Tarefas
        </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    padding:20,
    width: '100%',
    backgroundColor: 'red',
  }
});
