import React from 'react'

const ButtonSpinner = ({loading, text}) =>{
    return(

        <div className="form-group">
        <button className="btn  btn-block btn-outline-light" disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>{text}</span>
        </button>
      </div>
    )
}

export default ButtonSpinner