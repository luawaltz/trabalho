import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import type { Activity } from '../types/Activity';

type Props = { onAdd: (activity: Activity) => void };

export default function ActivityForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Média');

  function saveActivity() {
    if (!title.trim() || !description.trim() || !priority) {
      Alert.alert('Campos obrigatórios', 'Preencha o título, a descrição e a prioridade.');
      return;
    }
    onAdd({ id: Date.now().toString(), title: title.trim(), description: description.trim(), priority, completed: false });
    setTitle('');
    setDescription('');
    setPriority('Média');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Nome da atividade</Text>
      <TextInput style={styles.input} placeholder="Ex.: Passear com o pet" value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Descrição</Text>
      <TextInput style={[styles.input, styles.multiline]} placeholder="Descreva a atividade" value={description} onChangeText={setDescription} multiline />
      <Text style={styles.label}>Prioridade</Text>
      <View style={styles.options}>
        {['Baixa', 'Média', 'Alta'].map(item => (
          <Pressable key={item} onPress={() => setPriority(item)} style={[styles.option, priority === item && styles.selected]}>
            <Text style={[styles.optionText, priority === item && styles.selectedText]}>{item}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.button} onPress={saveActivity}><Text style={styles.buttonText}>Cadastrar atividade</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({ card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, marginBottom: 22, borderWidth: 1, borderColor: '#E5E7F2' }, label: { color: '#343451', fontWeight: '700', marginBottom: 6, marginTop: 8 }, input: { backgroundColor: '#F7F7FC', borderWidth: 1, borderColor: '#E0E1ED', borderRadius: 10, padding: 12, color: '#24243A' }, multiline: { minHeight: 70, textAlignVertical: 'top' }, options: { flexDirection: 'row', gap: 8, marginBottom: 14 }, option: { borderRadius: 9, paddingVertical: 9, paddingHorizontal: 15, backgroundColor: '#EEEEF7' }, selected: { backgroundColor: '#5B50C8' }, optionText: { color: '#55556B', fontWeight: '600' }, selectedText: { color: '#FFFFFF' }, button: { backgroundColor: '#5B50C8', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 5 }, buttonText: { color: '#FFFFFF', fontWeight: '800' } });
