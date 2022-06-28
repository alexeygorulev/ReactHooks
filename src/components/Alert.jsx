import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext';
import {CSSTransition} from 'react-transition-group'

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition 
    in={alert.visible}
    timeout={750}
    classNames={'alert'}
    mountOnEnter
    unmountOnExit
    
    >
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible note`}>
      <div>
        <strong>Внимание!</strong>
        {alert.text}
      </div>
      <button onClick={hide} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    </CSSTransition>
    )
}

export default Alert
