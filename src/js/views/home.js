import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { ItemCard } from "../component/ItemCard.js";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);
    const { people, vehicles, planets } = store;

    return (
        <div className="container-fluid d-flex justify-content-center text-center mb-5 gap-5 py-3 mx-5 w-100 d-block">
            <div>
                <div className="text-light h1"><strong>Characters</strong></div>
                <div id="charactersCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {people.map((item, index) => {
                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <ItemCard item={item} type={"character"} />
                                </div>
                            );
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#charactersCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#charactersCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div>
                <div className="text-light h1"><strong>Planets</strong></div>
                <div id="planetsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {planets.map((item, index) => {
                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <ItemCard item={item} type={"planet"} />
                                </div>
                            );
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#planetsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#planetsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div>
                <div className="text-light h1"><strong>Vehicles</strong></div>
                <div id="vehiclesCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {vehicles.map((item, index) => {
                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <ItemCard item={item} type={"vehicle"} />
                                </div>
                            );
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#vehiclesCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#vehiclesCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
