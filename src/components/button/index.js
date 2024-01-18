import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';

export default function Button({ currentId, setCurrentId, MAX_REQUEST }) {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                disabled={currentId == 1 ? true : false}
                style={styles.button}
                onPress={() => {
                    setCurrentId(prev => prev - 1)
                }}
            >
                <Text
                    style={styles.text}
                >
                    prev
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={currentId < MAX_REQUEST ? false : true}
                style={styles.button}
                onPress={() => {
                    setCurrentId(prev => prev + 1)
                }}
            >
                <Text
                    style={styles.text}
                >
                    next
                </Text>
            </TouchableOpacity>
        </View>
    );
}