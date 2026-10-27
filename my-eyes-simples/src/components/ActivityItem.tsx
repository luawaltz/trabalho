import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { Activity } from '../types/Activity';

type Props = { activity: Activity; onToggle: (id: string) => void; onDelete: (id: string) => void };

export default function ActivityItem({ activity, onToggle, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={[styles.title, activity.completed && styles.done]}>{activity.title}</Text>
        <Text style={styles.priority}>{activity.priority}</Text>
      </View>
      <Text style={styles.description}>{activity.description}</Text>
      <Text style={styles.status}>{activity.completed ? 'Concluída' : 'Pendente'}</Text>
      <View style={styles.actions}>
        <Pressable style={styles.completeButton} onPress={() => onToggle(activity.id)}><Text style={styles.actionText}>{activity.completed ? 'Marcar pendente' : 'Concluir'}</Text></Pressable>
        <Pressable style={styles.deleteButton} onPress={() => onDelete(activity.id)}><Text style={styles.actionText}>Excluir</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ card: { backgroundColor: '#FFFFFF', padding: 15, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7F2' }, row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 }, title: { flex: 1, color: '#28283F', fontSize: 16, fontWeight: '800' }, done: { textDecorationLine: 'line-through', color: '#88889A' }, priority: { backgroundColor: '#EEEEFA', color: '#5B50C8', paddingHorizontal: 9, paddingVertical: 5, borderRadius: 8, fontSize: 12, fontWeight: '700' }, description: { color: '#66667B', marginTop: 8, lineHeight: 20 }, status: { color: '#5B50C8', fontSize: 12, fontWeight: '700', marginTop: 8 }, actions: { flexDirection: 'row', gap: 8, marginTop: 12 }, completeButton: { backgroundColor: '#5B50C8', paddingVertical: 9, paddingHorizontal: 13, borderRadius: 8 }, deleteButton: { backgroundColor: '#FCE9EC', paddingVertical: 9, paddingHorizontal: 13, borderRadius: 8 }, actionText: { color: '#343451', fontWeight: '700', fontSize: 12 } });
