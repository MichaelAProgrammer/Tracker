import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

export default () => {
    const {
        state: { recording },
        addLocation,
    } = useContext(LocationContext);
    const isFocused = useIsFocused();
    const callback = useCallback(
        (location) => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [text] = useLocation(isFocused || recording, callback);

    return (
        <View style={styles.container}>
            <Map />
            {text ? <Text style={styles.paragraph}>{text}</Text> : <TrackForm />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});
