import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 20px;
width: 300px;
border: 1px solid black;
border-radius: 5px;
`
export const Label = styled.label`
margin-bottom: 10px;
width: 300px;
display: flex;
justify-content: space-between;
/* font-size: 18px;
font-weight: 500; */
`
export const Button = styled.button`
margin-top: 10px;
cursor: pointer;
width: 120px;
height: 25px;
font-size: 15px;
border: 2px solid grey;
border-radius: 10px;
background-color: lightgreen;
:hover {
    font-weight: bold; 
    background: lightgreen;   
}
` 