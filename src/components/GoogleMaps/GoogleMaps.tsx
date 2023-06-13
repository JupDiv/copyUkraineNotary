/* global google */
import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleMapsWrapper } from './GoogleMaps.styles';

type GoogleMapsProps = {
  apiKey: string;
};

const GoogleMaps = ({ apiKey }: GoogleMapsProps) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
    });

    //understand why this is error display
    loader.load().then(async () => {
      let map: google.maps.Map;
      const center: google.maps.LatLngLiteral = {
        lat: 50.492371,
        lng: 30.743069,
      };
      const { Map } = (await google.maps.importLibrary(
        'maps'
      )) as google.maps.MapsLibrary;
      map = new Map(document.getElementById('map') as HTMLElement, {
        center,
        zoom: 16,
      });
      new google.maps.Marker({
        position: center,
        map: map,
        title: 'Нотаріус Іванова О.О',
      });
    });
  }, []);

  return <GoogleMapsWrapper id="map"></GoogleMapsWrapper>;
};

export default GoogleMaps;
