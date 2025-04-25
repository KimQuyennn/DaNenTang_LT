import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function QuenMatkhau() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleResetPassword = () => {
        console.log('Reset password for:', email);
        //  Add your password reset logic here
        router.push('/Dangnhap'); // Navigate back to login after password reset
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset your password</Text>

            <TextInput
                placeholder="Enter your email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            {email === '' && <Text style={styles.error}>Email is a required field</Text>}

            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Send Reset Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.push('/Dangnhap') }} >
                <Text style={styles.link}>Go back to Login</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#222',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 5,
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
    },
    error: {
        width: '100%',
        color: 'red',
        marginBottom: 10,
        fontSize: 12,
    },
    button: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    link: {
        marginTop: 20,
        color: 'blue',
        fontSize: 14,
    },
    footer: {
        marginTop: 30,
        fontSize: 10,
        color: '#888',
        textAlign: 'center',
    },
});
