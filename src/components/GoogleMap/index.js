import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapsLoader from 'google-maps'
import { googleMapsKey } from '../../secret-keys'

import './styles.css'

const colorForest = '#58C166'
const colorWoods = '#3A7742'

class GoogleMap extends Component {
  componentDidMount() {
    const { lat, lng, zoom } = this.props

    GoogleMapsLoader.KEY = googleMapsKey()

    GoogleMapsLoader.load(google => {
      this.mapAPI = new google.maps.Map(this.mapNode, {
        center: { lat, lng },
        zoom: zoom,
        styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: colorWoods}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: colorForest}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: colorForest}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: colorWoods}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: colorWoods}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: colorWoods}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: colorForest}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: colorWoods}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#38414e'}]
          }
        ]
      })

      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.mapAPI,
      })
    })
  }

  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div
        className="google-map"
        ref={map => this.mapNode = map}
      />
    )
  }
}

export default GoogleMap
