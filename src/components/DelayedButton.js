// Code CoordinatesButton Component Here
import React from 'react';

export default DelayedButton extends React.Component{

render(){
  return (
<Button onClick={()=>{
  setTimeout(onDelayedClick,this.props.delay)
}}></Button>

  )
}

}
