import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function DangKy() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignUp = () => {
        console.log('Sign Up with:', email, password);
        router.push('/Dangnhap')
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Create a new account!</Text>

            <TextInput
                placeholder="Enter email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            {email === '' && <Text style={styles.error}>Email is a required field</Text>}

            <TextInput
                placeholder="Enter password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {password === '' && <Text style={styles.error}>Password is a required field</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { router.push('/Dangnhap') }} >
                <Text style={styles.link}>Already have an account?</Text>
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
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 5,
        borderRadius: 8,
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
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        marginTop: 10,
        color: 'blue',
    },
    footer: {
        marginTop: 20,
        fontSize: 10,
        color: '#888',
        textAlign: 'center',
    },
});