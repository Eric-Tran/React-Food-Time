import React, { Component } from 'react';
import { default as update } from "react-addons-update";
import { default as canUseDOM } from "can-use-dom";
import {default as _ }  from "lodash";
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";
import { connect } from 'react-redux';

class FoodMap extends Component {

  state = {
    markers: []
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  componentWillMount() {
    let { markers } = this.state;

    let mapData = this.props.data;
    for(var i = 0; i < mapData.length; i++) {
       markers = update(markers, {
      $push: [
        {
          position: {
            lat: mapData[i].location.coordinate.latitude,
            lng: mapData[i].location.coordinate.longitude
          },
          defaultAnimation: 2,
          key: mapData[i].key, // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    }
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {
    console.log('this is the map data', this.props.data);
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: `100%`,
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
            defaultZoom={11}
            defaultCenter={{ lat: this.props.lat, lng: this.props.lon }}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onclick={this.handleMarkerRightclick.bind(this, index)}
                />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }
}

export default connect(null)(FoodMap);