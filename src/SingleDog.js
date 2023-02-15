import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './SingleDog.css'

const SingleDog = () => {
    const [dog, setDog] = useState([]);
    const { name } = useParams();
    useEffect(() => {
        fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            .then(response => response.json())
            .then(data => {
                setDog(data);
                console.log(data);
            });
    }, [name]);
    return (
        <>
            {/* <h1>I am {name}</h1> */}
            <section className="container">
                {dog.map((item) => (
                    <div key={item.id} className="child0container">
                        <div className="child1container">
                            <img
                                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                                alt={item.name}
                            />
                        </div>
                        <div className="child2container">
                            <h1 className="iamname">
                                {item.name}
                            </h1>
                            {item.description && (
                                <p>
                                    {item.description}
                                </p>
                            )}

                            <ul>
                                <li>
                                    <span className="granchild0">Bred For:</span>{" "}
                                    <span className="granchild00">{item.bred_for}</span>
                                </li>
                                <li>
                                    <span className="granchild1">Height:</span>{" "}
                                    <span className="granchild11">{item.height.metric} cm</span>
                                </li>
                                <li>
                                    <span className="granchild2">Weight:</span>{" "}
                                    <span className="granchild22">{item.weight.metric} kgs</span>
                                </li>
                                <li>
                                    <span className="granchild3">Breed Group:</span>{" "}
                                    <span className="granchild33">{item.breed_group}</span>
                                </li>
                                <li>
                                    <span className="granchild4">Lifespan:</span>{" "}
                                    <span className="granchild44">{item.life_span}</span>
                                </li>
                                <li className="forLink">
                                    <span className="granchild5">Temperament:</span>{" "}
                                    <span className="granchild55">{item.temperament}</span>
                                </li>
                            </ul>

                            <Link to="/" className="itsLink"> &larr; Back</Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SingleDog;