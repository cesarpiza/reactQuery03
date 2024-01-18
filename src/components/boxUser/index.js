import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import IsLoading from '../../components/isLoading';
import IsError from '../../components/isError';

export default function BoxUser(props) {

    const {
        first_name,
        last_name,
        email,
        avatar,
        isLoading,
        isError,
        error
    } = props;

    return (
        <View style={styles.userContainer}>
            {isLoading ?
                <IsLoading />
                :
                (isError ?
                    <IsError error={error} />
                    :
                    <>
                        <Image
                            style={styles.image}
                            source={{ uri: avatar }}
                        />
                        <Text style={styles.text}>
                            nome: {first_name} {last_name}
                        </Text>
                        <Text style={styles.text}>
                            email: {email}
                        </Text>
                    </>
                )
            }
        </View >
    );
}