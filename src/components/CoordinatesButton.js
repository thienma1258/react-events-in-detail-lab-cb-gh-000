// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{
render(){
  return (
<Button onClick={this.props.onReceiveCoordinates}></Button>
    
  )
}
  
}