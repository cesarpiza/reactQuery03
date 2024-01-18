import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        columnGap: 30,
    },
    button: {
        backgroundColor: 'darkorange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        textTransform: 'capitalize',
        fontSize: 16,
    }
});