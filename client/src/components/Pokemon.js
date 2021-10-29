import React from "react";

const Pokemon = ( {name, avatar}) => {
    return (
        <li>
            <figure className="card">
                <img src={avatar} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <div className="card__header-text">
                            <h3 className="card__title">{name}</h3>
                        </div>
                    </div>
                </div>
            </figure>
      </li>
    );
}

export default Pokemon;