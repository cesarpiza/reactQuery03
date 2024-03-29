import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function IsLoading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});