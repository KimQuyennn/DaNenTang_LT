import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ThemGhiChu() {
    const { id, ten } = useLocalSearchParams();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>📝 Thêm Ghi Chú</Text>
            <Text>ID: {id}</Text>
            <Text>Tên: {ten}</Text>
        </View>
    );
}
