import React, { Component } from 'react';
import { default as update } from "react-addons-update";
import { default as canUseDOM } from "can-use-dom";
import {default as _ }  from "lodash";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";
import { connect } from 'react-redux';

class FoodMap extends Component {

  state = {
    markers: []
  }
  componentWillReceiveProps(nextProps) {
    let { markers } = this.state;

    let mapData = nextProps.data;
    for(var i = 0; i < mapData.length; i++) {
       markers = update(markers, {
      $unshift: [
        {
          position: {
            lat: mapData[i].location.coordinate.latitude,
            lng: mapData[i].location.coordinate.longitude
          },
          showInfo: false,
          info: {
            name: mapData[i].name,
            review_img: mapData[i].rating_img_url,
            review_count: mapData[i].review_count,
            img: mapData[i].image_url,
            img_link: mapData[i].yelp_img_url,
            wait: mapData[i].est_wait,
            address: {
              line1: mapData[i].location.display_address[0],
              line2: mapData[i].location.display_address[2]
            }
          },
          defaultAnimation: 2,
          key: mapData[i].id,
        },
      ],
    });
    }
    markers.length = 10;
    this.setState({markers});
  };

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
          showInfo: false,
          info: {
            name: mapData[i].name,
            review_img: mapData[i].rating_img_url,
            review_count: mapData[i].review_count,
            img: mapData[i].image_url,
            img_link: mapData[i].yelp_img_url,
            wait: mapData[i].est_wait,
            address: {
              line1: mapData[i].location.display_address[0],
              line2: mapData[i].location.display_address[2]
            }
          },
          defaultAnimation: 2,
          key: mapData[i].key,
        },
      ],
    });
    }
    this.setState({markers});
  }

  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState({ marker });
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState({ marker });
  }

  renderInfoWindow(marker) {
    return (
      <InfoWindow
      key={marker.key}
      onCloseclick={this.handleMarkerClose.bind(this, marker)} >
      <div>
        <div className="info">
          <h6>{marker.info.name}</h6>
          <img src={marker.info.review_img} align="left" />
          <p>{marker.info.review_count} reviews</p>
          <p className='wait'>Wait is {marker.info.wait}</p>
          <p className='info_p'>{marker.info.address.line1}</p>
          <p>{marker.info.address.line2}</p>
        </div>
        <div className="info_img">
        <img src={marker.info.img} />
        <a href={marker.info.img_link} target="_blank">view more photos</a>
        </div>
      </div>
      </InfoWindow>

    )
  }
  render() {
    const { markers } = this.state;
    let lat = this.state.markers[0].position.lat
    let lng = this.state.markers[0].position.lng
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
            center={{ lat: lat, lng: lng }}
          >
            {markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onClick={this.handleMarkerClick.bind(this, marker)} >
                {marker.showInfo ? this.renderInfoWindow(marker) : null}
                </Marker>
              );
            })}
          </GoogleMap>
        }
      />
    );
  }
}

export default connect(null)(FoodMap);