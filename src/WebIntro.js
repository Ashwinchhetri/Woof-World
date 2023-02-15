import React, { useEffect, useState } from "react";
import './WebIntro.css'
import { Link } from "react-router-dom";
import './doggii.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import Icon from "./Icon";


const WebIntro = () => {
    const [dogs, setDogs] = useState([])
    const [text, setText] = useState("")
    const [searched, setSearched] = useState(false)

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch("https://api.thedogapi.com/v1/breeds")
                const data = await res.json()
                setDogs(data)
            } catch (error) {
                console.error(error)
            }
        }

        setSearched(false)
        fetchDogData()
    }, [])

    const searchForDog = async () => {
        try {
            const res = await fetch(
                `https://api.thedogapi.com/v1/breeds/search?q=${text}`
            )
            const data = await res.json()
            setDogs(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        searchForDog()
        setSearched(true)
    }


    return (
        <>
            <div className="firstPart">
                <span className="justFirst">Woof, Welcome to our club</span>
                <span className="justSecond">WOOF WORLD!</span>
            </div>
            <div className='iamintro'>
                Hey, you probably like dogs...
                Why not gather information for some..
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto"
                    autoComplete="off"
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for a dog / breed"
                        value={text}
                        className="iaminput"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Icon />
                </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
                {searched ? (
                    <>
                        <div className="SearchResults">
                            {dogs.map(dog => (
                                <Link to={`/${dog.name}`}>
                                    <div className='grid-item'>
                                        <img
                                            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                                            alt={dog.name}
                                            className="rounded md:h-72 w-full object-cover"
                                        />
                                        <div className='inner-item'>
                                            <h3 className="text-white text-lg font-bold mt-4">
                                                {dog.name}
                                            </h3>
                                            <p className="text-slate-400">
                                                Bred For: {dog.bred_for}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className='grid-container'>
                            {dogs.map(dog => (
                                <Link to={`/${dog.name}`}>
                                    <div className='grid-item'>
                                        <img
                                            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                                            alt={dog.name}
                                            className="rounded md:h-72 w-full object-cover"
                                        />
                                        <div className='inner-item'>
                                            <h3 className="text-white text-lg font-bold mt-4">
                                                {dog.name}
                                            </h3>
                                            <p className="text-slate-400">
                                                Bred For: {dog.bred_for}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <div className='map' id="map"><iframe src="https://www.google.com/maps/d/embed?mid=1P2sn6yfqGd5UGC29khq0sZbmqWfjp2k&ehbc=2E312F" width="1200" height="480"></iframe></div>
                        </div></>)}
            </div>

        </>
    )
}

export default WebIntro;