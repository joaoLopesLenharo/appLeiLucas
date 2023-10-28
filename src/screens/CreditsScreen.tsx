import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function CreditsScreen({ navigation }: CreditsScreenProps) {
  return (
    <View style={styles.container}>    
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professor(a) responsável:</Text>
        <Text style={styles.text}>Prof. Dr. Elvio Gilberto da Silva</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professor(a) colabolador(a):</Text>
        <Text style={styles.text}>Profª. Dra. Marcia Aparecida Nuevo Gatti</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alunos:</Text>
        <Text style={styles.text}>Gabriel de Brito Souza</Text>
        <Text style={styles.text}>Gabriel Massao Kimura da Silva</Text>
        <Text style={styles.text}>João Pedro Lopes Lenharo</Text>
      </View>

      <View style={styles.separator} />

      <View style = {styles.section}>
        <Text style = {styles.text}>Realizado por:</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/Ciencia_da_Computacao.jpg')}
          style={styles.logo}
        />
      </View>

      <View style = {styles.section}>
        <Text style = {styles.text}>Apoio:</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/monolitica-pastoral-nova.png')}
          style={styles.logo}
        />
      </View>      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    padding: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  logo: {
    width: 260,
    height: 80,
    marginHorizontal: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 20,
    width: '100%',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CreditsScreen;
