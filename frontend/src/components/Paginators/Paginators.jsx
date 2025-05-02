import React from "react";

import './Paginators.css'

const Paginators = ()=>{
    return(
        <div className="paginators">
            <div className="paginators-div">
                <button><i className="fas fa-chevron-left"></i></button>
                <button className="activepage">1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>8</button>
                <button><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    );
}

export default Paginators;