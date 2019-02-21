import React from 'react';
import { TextInput, View } from 'react-native';
import styles from 'login/styles'

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {

    return (
        <View>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor='rgba(255, 255, 255, 0.8)'
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default Input;