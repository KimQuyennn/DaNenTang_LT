import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function DanhSach({ navigation, route }) {
    const [danhSach, setDanhSach] = useState([]);

    useEffect(() => {
        if (route.params?.ghiChuMoi) {
            setDanhSach((prev) => [route.params.ghiChuMoi, ...prev]);
        }
    }, [route.params?.ghiChuMoi]);

    return (
        <View style={styles.container}>
            <Button title="Thêm ghi chú" onPress={() => navigation.navigate('ThemGhiChu')} />
            <FlatList
                data={danhSach}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.ghiChu}>
                        <Text style={styles.tieuDe}>{item.tieuDe}</Text>
                        <Text>{item.noiDung}</Text>
                        <Text style={styles.thoiGian}>{item.thoiGian}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 50 },
    ghiChu: { backgroundColor: '#eee', padding: 10, borderRadius: 8, marginVertical: 5 },
    tieuDe: { fontWeight: 'bold', fontSize: 16 },
    thoiGian: { fontSize: 12, color: 'gray', marginTop: 5 },
});
