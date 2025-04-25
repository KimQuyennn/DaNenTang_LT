import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const QuenMatkhau = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        if (email) {
            Alert.alert('Thành công', `Hướng dẫn đặt lại mật khẩu đã được gửi đến ${email}.`);
            router.push('/DangNhap');
        } else {
            Alert.alert('Lỗi', 'Vui lòng nhập email của bạn.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đặt lại mật khẩu của bạn</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Đặt lại mật khẩu" onPress={handleResetPassword} />
            <Button
                title="Quay lại đăng nhập"
                onPress={() => router.push('/DangNhap')}
                color="#333333"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
    },
});

export default QuenMatkhau;