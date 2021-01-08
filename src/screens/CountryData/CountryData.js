import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import actions from "actions";
import { getCountryData, getWeatherData } from "selectors";

import * as s from "./CountryData.styled";

const WeatherData = ({ data }) => {
    const { temperature, wind_speed, precip, weather_icons } = data.current;

    return (
        <>
            <s.DataField>Temperature: {temperature}</s.DataField>
            <s.DataField>Wind Speed: {wind_speed}</s.DataField>
            <s.DataField>Precip: {precip}</s.DataField>
            <s.Flag>
                <img src={weather_icons[0]} alt="weather-icon" />
            </s.Flag>
        </>
    );
};

const CountryData = () => {
    const [showWeather, setWeatherShown] = useState(false);
    const data = useSelector(getCountryData);
    const weatherData = useSelector(getWeatherData);

    const { capital, population, latlng, flag } = data[0];

    const handleButtonClick = () => {
        actions.getWeather(capital);
    };

    useEffect(() => {
        if(weatherData) {
            setWeatherShown(true);
        };
    }, [weatherData])

    return (
        <>
            <s.DataContainer>
                <s.DataField>Capital: {capital}</s.DataField>
                <s.DataField>Population: {population}</s.DataField>
                <s.DataField>Latitude: {latlng[0]}</s.DataField>
                <s.DataField>Longitude: {latlng[1]}</s.DataField>
                <s.Flag>
                    <img src={flag} alt="country-flag" />
                </s.Flag>
                <s.ShowWeather onClick={handleButtonClick}>
                    Capital Weather
                </s.ShowWeather>
                {showWeather && <WeatherData data={weatherData} />}
            </s.DataContainer>
        </>
    );
};

export default CountryData;
