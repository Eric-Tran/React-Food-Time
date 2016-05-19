import React, { Component } from 'react';
import { default as update } from "react-addons-update";
import { default as canUseDOM } from "can-use-dom";
import {default as _ }  from "lodash";
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";
import { connect } from 'react-redux';

class FoodMap extends Component {

  state = {
    markers: [{
      position: {
        lat: 36.1699,
        lng: -115.1398,
      },
      key: `Las Vegas`,
      defaultAnimation: 2,
    }],
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */

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
            defaultZoom={12}
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