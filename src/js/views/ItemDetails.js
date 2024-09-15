import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

export const ItemDetails = () => {
    const { store, actions } = useContext(Context);
    const { people, planets, vehicles } = store;
    const params = useParams();

    const getItemDetails = (type, uid) => {
        switch (type) {
            case "character":
                return people.find(item => item.uid === uid);
            case "planet":
                return planets.find(item => item.uid === uid);
            case "vehicle":
                return vehicles.find(item => item.uid === uid);
            default:
                return null;
        }
    };

    const item = getItemDetails(params.type, params.uid);

    if (!item) return <div>Item not found</div>;

    const { properties } = item;

    return (

        <>
            <div className="container m-5">
                <div className="card mb-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/${params.type}s/${params.uid}.jpg`}
                                className="img-fluid rounded-start"
                                alt={`${params.type}-img`}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{properties.name}</strong></h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top border-danger text-danger row">
                    <h3 className="col"><strong className="d-block">Name</strong><p className="d-block">{properties.name}</p></h3>
                    {params.type === "character" && (
                        <>
                            <h3 className="col"><strong className="d-block">Birth year</strong><p className="d-block">{properties.birth_year}</p></h3>
                            <h3 className="col"><strong className="d-block">Gender</strong><p className="d-block">{properties.gender}</p></h3>
                            <h3 className="col"><strong className="d-block">Height</strong><p className="d-block">{properties.height}</p></h3>
                            <h3 className="col"><strong className="d-block">Skin color</strong><p className="d-block">{properties.skin_color}</p></h3>
                            <h3 className="col"><strong className="d-block">Eye color</strong><p className="d-block">{properties.eye_color}</p></h3>
                        </>
                    )}
                    {params.type === "planet" && (
                        <>
                            <h3 className="col"><strong className="d-block">Diameter</strong><p className="d-block">{properties.diameter}</p></h3>
                            <h3 className="col"><strong className="d-block">Rotation period</strong><p className="d-block">{properties.rotation_period}</p></h3>
                            <h3 className="col"><strong className="d-block">Population</strong><p className="d-block">{properties.population}</p></h3>
                            <h3 className="col"><strong className="d-block">Terrain</strong><p className="d-block">{properties.terrain}</p></h3>
                            <h3 className="col"><strong className="d-block">Climate</strong><p className="d-block">{properties.climate}</p></h3>
                        </>
                    )}
                    {params.type === "vehicle" && (
                        <>
                            <h3 className="col"><strong className="d-block">Model</strong><p className="d-block">{properties.model}</p></h3>
                            <h3 className="col"><strong className="d-block">Vehicle class</strong><p className="d-block">{properties.vehicle_class}</p></h3>
                            <h3 className="col"><strong className="d-block">Manufacturer</strong><p className="d-block">{properties.manufacturer}</p></h3>
                            <h3 className="col"><strong className="d-block">Cost in credits</strong><p className="d-block">{properties.cost_in_credits}</p></h3>
                            <h3 className="col"><strong className="d-block">Passengers</strong><p className="d-block">{properties.passengers}</p></h3>
                            <h3 className="col"><strong className="d-block">Max atmosphering speed</strong><p className="d-block">{properties.max_atmosphering_speed}</p></h3>
                        </>
                    )}
                </div>
                <Link to={"/"}>
                    <button className="btn btn-warning ms-5">Home</button>
                </Link>
            </div>
        </>

    );
};