import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export const FavoriteDropdown = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    return (
        <div className="btn-group px-3 me-5">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Favorite
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favorites.length}
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                {favorites.length === 0 ? (
                    <p className="text-center">... Empty</p>
                ) : (
                    favorites.map((item, index) => {
                        console.log(item)
                        const { type, uid, properties } = item;
                        console.log(type);
                        return (
                            <li className="d-flex justify-content-center align-items-center px-2" key={index}>
                                <Link to={`learn/${type}/${uid}`} className="dropdown-item">
                                    {properties.name}
                                </Link>
                                <a href="#" onClick={() => { actions.deleteFavorite(item, index) }}>
                                    <i className="fa-solid fa-trash"></i>
                                </a>
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};