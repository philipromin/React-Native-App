import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from 'login/styles';

const Button = ({ onPress, children }) => {

    return (
        <TouchableOpacity style={styles.btnLogin} onPress={onPress}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;