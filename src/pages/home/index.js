import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import BoxUser from '../../components/boxUser';
import Buttons from '../../components/button';
import { useFetchApi } from '../../hooks/useFetchApi';
import { useQuery, useQueryClient } from 'react-query';

// Para entender a key como array pesquise no facebook: sobre query keys, key simples, key como array


export default function Home() {

    const queryClient = useQueryClient();

    const MAX_REQUEST = 10;
    const [currentId, setCurrentId] = useState(1);

    const { data, isLoading, isError, error, isFetching } = useQuery(['users', currentId], () => useFetchApi(currentId), {
        // mais sobre stale e cache time no facebook. pesquise: staleTime e cacheTime
        // staleTime: 30 * 1000,
        // cacheTimeout: 5 * (60 * 1000),
    });

    // isFetching: processo/loading da revalidação que é feita em segundo plano.
    //console.log(isLoading, isFetching);

    // prefetchQuery: é um método assíncrono que pode ser usado para pré-buscar uma consulta antes que ela seja necessária ou renderizada com useQuery

    useEffect(() => {
        if (currentId < MAX_REQUEST) {
            const nextRequest = currentId + 1
            queryClient.prefetchQuery(['users', nextRequest], () => useFetchApi(nextRequest))
        }
    }, [currentId]);

    return (
        <SafeAreaView style={styles.container}>
            <BoxUser isLoading={isLoading} isError={isError} error={error} {...data} />
            <Buttons currentId={currentId} setCurrentId={setCurrentId} MAX_REQUEST={MAX_REQUEST} />
        </SafeAreaView>
    );
}