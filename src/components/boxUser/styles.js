import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    userContainer: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderRadius: 10,
        rowGap: 10,
        marginBottom: 15,
        width: '80%',
        height: '25%',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
});