import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
    const centerLatitude = 22.279909;
    const centerLongitude = 114.173729;
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      alititudeAccuracy: 5,
      alititude: 5,
      longitude: centerLongitude + increment * tenMetersWithDegrees,
      latitude: centerLatitude + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);
