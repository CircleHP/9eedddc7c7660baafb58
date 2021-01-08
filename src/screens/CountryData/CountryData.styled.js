import styled from 'styled-components';

export const DataContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid gray;
    border-radius: 3px;
    margin: auto;
    padding: 15px;
`;

export const DataField = styled.div`
    width: auto;
    height: 15px;
    font-size: 16px;
    color: #000;

    & + & {
        margin-top: 10px;
    }
`;

export const Flag = styled.div`
    width: 150px;
    height: 150px;
    margin-top: 10px;

    img {
        width: 100%;
    };
`;

export const ShowWeather = styled.button`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px 50px;
    color: #000;
    background: #FFF;
    border: 1px solid #000;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
`;