import { Image, StyleSheet, Platform,View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/DarkFantasyArt.jpeg')}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Odisseia 7D</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.containerProgress}>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">DOM</ThemedText>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">SEG</ThemedText>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">TER</ThemedText>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">QUI</ThemedText>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">QUA</ThemedText>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">SEX</ThemedText>
        <ThemedText style={styles.textProgs} type="defaultSemiBold">SAB</ThemedText>
      </View>
      <View style={styles.containerProgress}>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress01}></View>
        <View style={styles.boxProgress01}></View>
        <View style={styles.boxProgress03}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress01}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
        <View style={styles.boxProgress}></View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  containerProgress: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  boxProgress: {
    backgroundColor: '#ccc',
    padding: 21,
    borderRadius: 5,
    margin: 2,
    width: '13%', // Ajuste conforme necessário
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxProgress01: {
    backgroundColor: '#00008B',
    padding: 21,
    borderRadius: 5,
    margin: 2,
    width: '13%', // Ajuste conforme necessário
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxProgress02: {
    backgroundColor: '#0000CD	',
    padding: 21,
    borderRadius: 5,
    margin: 2,
    width: '13%', // Ajuste conforme necessário
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxProgress03: {
    backgroundColor: '#0000FF',
    padding: 21,
    borderRadius: 5,
    margin: 2,
    width: '13%', // Ajuste conforme necessário
    justifyContent: 'center',
    alignItems: 'center',
  },
  textProgs: {
    width: '14%',
    textAlign: 'center'
  }
});
