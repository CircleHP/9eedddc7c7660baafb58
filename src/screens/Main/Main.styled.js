import styled from 'styled-components';

export const FormBody = styled.div`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid gray;
    margin: auto;
    border-radius: 3px;
`;

export const FormField = styled.input`
    width: 100%;
    border: 1px solid gray;
    border-radius: 3px;
    background: #FFF;
    font-size: 16px;
    padding: 5px;
    outline: none;
`;

export const FormButton = styled.button`
    margin-top: 30px;
    padding: 15px 50px;
    color: #000;
    background: #FFF;
    border: 1px solid #000;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;