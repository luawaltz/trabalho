import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActivityForm from '../src/components/ActivityForm';
import ActivityItem from '../src/components/ActivityItem';
import type { Activity } from '../src/types/Activity';

export default function HomeScreen() {
  const [activities, setActivities] = useState<Activity[]>([]);

  function addActivity(activity: Activity) {
    setActivities(current => [activity, ...current]);
  }
  function toggleActivity(id: string) {
    setActivities(current => current.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  }
  function deleteActivity(id: string) {
    Alert.alert('Excluir atividade', 'Deseja excluir esta atividade?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: () => setActivities(current => current.filter(item => item.id !== id)) }
    ]);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <FlatList
        data={activities}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ActivityItem activity={item} onToggle={toggleActivity} onDelete={deleteActivity} />}
        ListHeaderComponent={<View>
          <View style={styles.header}>
            <Text style={styles.logo}>🐾 MY EYES</Text>
            <Text style={styles.heading}>Rotina do Pet</Text>
            <Text style={styles.subtitle}>Cadastre e acompanhe os cuidados do seu pet.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Nova atividade</Text>
            <ActivityForm onAdd={addActivity} />
            <Text style={styles.sectionTitle}>Minhas atividades ({activities.length})</Text>
          </View>
        </View>}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma atividade cadastrada ainda.</Text>}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F5F5FB' }, header: { backgroundColor: '#5B50C8', padding: 24, paddingTop: 30, paddingBottom: 28, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }, logo: { color: '#E4E1FF', fontWeight: '900', letterSpacing: 2 }, heading: { color: '#FFFFFF', fontSize: 28, fontWeight: '900', marginTop: 12 }, subtitle: { color: '#E7E4FF', marginTop: 6, lineHeight: 20 }, content: { paddingHorizontal: 16, paddingTop: 20 }, sectionTitle: { color: '#28283F', fontSize: 19, fontWeight: '900', marginBottom: 12 }, empty: { color: '#77778C', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 24 }, listContent: { paddingBottom: 30 } });
