import React, { useState } from 'react';
import { useSelector } from 'react-redux'; 

import { getCountryData } from 'selectors';
import history from 'browser-history';
import actions from 'actions';

import * as s from "./Main.styled";

const Main = () => {
    const [country, setCountry] = useState('');
    const countryData = useSelector(getCountryData)

    const handleSubmit = () => {
        actions.getCountry(country);

        if(countryData) {
            history.push(`/country/${country}`)
        }
    };

    return (
        <s.FormBody>
            <s.FormField
                placeholder="Enter country"
                onChange={e => setCountry(e.target.value)}
            />
            <s.FormButton
                disabled={country !== '' ? false : true}
                onClick={handleSubmit}
            >
                Submit
            </s.FormButton>
        </s.FormBody>
    );
};

export default Main;
