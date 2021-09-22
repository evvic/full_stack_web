import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        colorModeFromRedusStore: state['general']['colorMode']
    }  
};
  
const mapDispatchToProps = dispatch => {
    return {
      handleChangeColorModeEvent: () => dispatch({type: 'CHANGE_COLOR_MODE'})
    };
};

class ButtonComponent extends React.Component {
    
    
    render() {
        console.log("BUTTON COMPONENT")
        return(
            <div>
                <button onClick={this.props.handleChangeColorModeEvent} 
                        className={"colors" + this.props.colorModeFromRedusStore}>
                    Change Color World
                </button>
            </div>
        );
    }
}

const b = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent)

export default b;