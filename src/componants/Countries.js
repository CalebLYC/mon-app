import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setdata] = useState([]);
    const [rangeValue, setrangeValue] = useState(36);
    const radios = ['Africa', 'America', 'Europa', 'Asia', 'Oceania'];
    const [selectedRadio, setselectedRadio] = useState('');


    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setdata(res.data));
    }, [])

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input
                    type="range" min='1'
                    max='250'
                    defaultValue={rangeValue}
                    onChange={(e) => setrangeValue(e.target.value)}
                />
                {radios.map((continent) => (
                    <li key={continent}>
                        <input type="radio"
                            id={continent}
                            name='continentRadio'
                            value={continent}
                            checked={continent == setselectedRadio ? true : false}
                            onChange={(e) => {
                                setselectedRadio(e.target.value);
                            }}
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}

            </ul>
            {selectedRadio && (
                <button onClick={() => { setselectedRadio('') }}>Annuler la recherche</button>
            )}
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue).map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }
            </ul>
        </div>
    );
};

export default Countries;