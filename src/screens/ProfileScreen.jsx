import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable' // 🪄 Ajout de Animatable

const ProfileScreen = () => {
  const [makes, setMakes] = useState([])
  const [models, setModels] = useState([])
  const [searchMake, setSearchMake] = useState('')
  const [searchModel, setSearchModel] = useState('')
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [showDropdown, setShowDropdown] = useState({ make: false, model: false })

  useEffect(() => {
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
      .then(res => res.json())
      .then(data => setMakes(data.Results))
      .catch(err => {
        console.error('Erreur marques :', err)
        Alert.alert('Erreur', 'Impossible de récupérer les marques.')
      })
  }, [])

  const filterList = (list, keyword, key) =>
    list.filter(item => item[key].toLowerCase().includes(keyword.toLowerCase()))

  const selectMake = (makeName) => {
    setSelectedMake(makeName)
    setSearchMake(makeName)
    setSelectedModel('')
    setSearchModel('')
    setShowDropdown({ make: false, model: false })

    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${makeName}?format=json`)
      .then(res => res.json())
      .then(data => setModels(data.Results))
      .catch(err => {
        console.error('Erreur modèles :', err)
        Alert.alert('Erreur', 'Impossible de récupérer les modèles.')
      })
  }

  const selectModel = (modelName) => {
    setSelectedModel(modelName)
    setSearchModel(modelName)
    setShowDropdown(prev => ({ ...prev, model: false }))
  }

  const renderDropdown = (data, onSelect, key) => (
    <View style={styles.dropdown}>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dropdownItem} onPress={() => onSelect(item[key])}>
            <Text style={styles.itemText}>{item[key]}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une voiture</Text>

      {}
      <TextInput
        style={styles.input}
        placeholder='Entrez une marque...'
        value={searchMake}
        onChangeText={(text) => {
          setSearchMake(text)
          setShowDropdown({ make: text.length > 0, model: false })
        }}
        onFocus={() => setShowDropdown(prev => ({ ...prev, make: true }))}
      />

      {}
      {showDropdown.make && renderDropdown(filterList(makes, searchMake, 'Make_Name'), selectMake, 'Make_Name')}

      {}
      {selectedMake && (
        <>
          <TextInput
            style={styles.input}
            placeholder='Entrez un modèle...'
            value={searchModel}
            onChangeText={(text) => {
              setSearchModel(text)
              setShowDropdown({ make: false, model: text.length > 0 })
            }}
            onFocus={() => setShowDropdown(prev => ({ ...prev, model: true }))}
          />

          {}
          {showDropdown.model && renderDropdown(filterList(models, searchModel, 'Model_Name'), selectModel, 'Model_Name')}
        </>
      )}

      {}
      {selectedMake && selectedModel && (
        <Animatable.View
          style={styles.finalSelection}
          animation='fadeInUp'
          duration={800}
          delay={200}
        >
          <Text style={styles.finalText}>Votre voiture est :</Text>
          <Text style={styles.finalTextHighlight}>{selectedMake} {selectedModel}</Text>
        </Animatable.View>
      )}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#1d1d1d' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#f0f0f0' },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    color: '#f0f0f0'
  },
  dropdown: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#2a2a2a'
  },
  dropdownItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemText: { fontSize: 18, color: '#f0f0f0' },
  finalSelection: { marginTop: 30, alignItems: 'center' },
  finalText: { fontSize: 20, marginBottom: 5, color: '#f0f0f0' },
  finalTextHighlight: { fontSize: 24, fontWeight: 'bold', color: '#e89f30' }
})
