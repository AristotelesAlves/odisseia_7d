import { Image, StyleSheet, Platform,View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function tarefa() {
  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText type='title'>
              Tarefas
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.containerTarefa}>
            <ThemedText type='subtitle'>
              Fuma 20 cigarros
            </ThemedText>
            <ThemedView style={styles.containerMetas}>
              <ThemedText style={styles.meta} type='default'>
                SEG
              </ThemedText>
              <ThemedText style={styles.meta} type='default'>
                TER
              </ThemedText>
              <ThemedText style={styles.meta} type='default'>
                QUA
              </ThemedText>
              <ThemedText style={styles.meta} type='default'>
                QUI
              </ThemedText>
              <ThemedText style={styles.meta} type='default'>
                SEX
              </ThemedText>
              <ThemedText style={styles.meta} type='default'>
                SAB
              </ThemedText>
              <ThemedText style={styles.meta} type='default'>
                DOM
              </ThemedText>
            </ThemedView>
        </ThemedView>
        <ThemedView style={styles.containerBotaoFlutuante}>
          <TouchableOpacity style={styles.botaoFlutuante}>
            <TabBarIcon style={styles.botaoFlutuanteText} name="add" />
          </TouchableOpacity>
        </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  containerBotaoFlutuante: {
    position: 'absolute',
    bottom: 80,
    right: 16,
  },
  botaoFlutuanteText: {
    fontSize: 50,
    padding: 10,
    color: 'black',
  },
  botaoFlutuante: {
    borderRadius: 100,
    borderWidth:2
  },
  containerMetas: {
    flexDirection: 'row',
    gap:4,
    marginTop:8
  },
  meta: {
    paddingHorizontal: 8,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4
  },
  containerTarefa: {
    padding:8,
    borderWidth: 2,
    borderRadius: 8
  }
});
