import React from "react";
import Title from "./Title";
import {tours} from "../data";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />

            <div className="section-center featured-center">
                {tours.map((tour) => {
                    const {
                        id,
                        date,
                        tourTitle,
                        text,
                        img,
                        icon,
                        country,
                        duration,
                        price,
                    } = tour;
                    return (
                        <article className="tour-card" key={id}>
                            <div className="tour-img-container">
                                <img src={img} className="tour-img" alt="" />
                                <p className="tour-date">{date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{tourTitle}</h4>
                                </div>
                                <p>{text}</p>
                                <div className="tour-footer">
                                    <p>
                                        <span>
                                            <i className={icon}></i>
                                        </span>{" "}
                                        {country}
                                    </p>
                                    <p>{duration}</p>
                                    <p>{price}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;