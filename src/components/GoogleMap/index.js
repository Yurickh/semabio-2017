import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapsLoader from 'google-maps'

import googleMapsStyle from '../../helpers/googleMapsStyle'

import markerIcon from './markerIcon.svg'

import './styles.css'

class GoogleMap extends Component {
  componentDidMount() {
    const { lat, lng, zoom } = this.props

    GoogleMapsLoader.KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    GoogleMapsLoader.load(google => {
      this.mapAPI = new google.maps.Map(this.mapNode, {
        center: { lat, lng },
        zoom: zoom,
        styles: googleMapsStyle()
      })

      this.marker = new google.maps.Marker({
        position: { lat, lng },
        icon: markerIcon,
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
