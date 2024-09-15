import React, { useContext } from 'react';
import { Context } from '../store/appContext.js';
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const ItemCard = ({ item, type }) => {
    const { actions } = useContext(Context);
    const { properties } = item;
    const { uid } = item;

    return (
        <div className="card container-fluid justify-content-center mb-5 gap-3 text-dark" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}s/${uid}.jpg`} className="card-img-top img-fluid" alt={`${type}.img`} />
            <div className="card-body img-fluid">
                <h2 className="card-title"><strong>{properties.name}</strong></h2>
                {type === "character" && (
                    <>
                        <p className="card-text"><strong>Gender: </strong>{properties.gender}</p>
                        <p className="card-text"><strong>Eye color: </strong>{properties.eye_color}</p>
                        <p className="card-text"><strong>Hair color: </strong>{properties.eye_color}</p>
                    </>
                )}
                {type === "planet" && (
                    <>
                        <p className="card-text"><strong>Population: </strong>{properties.population}</p>
                        <p className="card-text"><strong>Terrain: </strong>{properties.terrain}</p>
                    </>
                )}
                {type === "vehicle" && (
                    <>
                        <p className="card-text"><strong>Model: </strong>{properties.model}</p>
                        <p className="card-text"><strong>Manufacturer: </strong>{properties.manufacturer}</p>
                    </>
                )}
            </div>
            
            <div className="card-footer d-flex justify-content-between">
                <Link to={`learn/${type}/${uid}`}>
                    <button className="btn btn-success"> Leer más </button>
                </Link>
                <button className="btn btn-outline-danger" onClick={() => actions.addFavorite({ ...item, type: type })}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    );
}
