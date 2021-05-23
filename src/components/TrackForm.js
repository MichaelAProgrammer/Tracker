import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'
import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack]=useSaveTrack();
  //console.log(locations.length);
  //console.log(recording);
  return (
    <>
        <Input
          placeholder="Enter Name"
          onChangeText={changeName}
          value={name}
        />
      <Spacer>
        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack}/>
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
