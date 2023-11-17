import styled from '@emotion/styled';

export const Button = styled.button`
 background: linear-gradient(
    to right, 
     #e9d362 0%,
    #333333 51%, 
    #e9d362 100%);
    
  margin: 10px;
  padding: 5px 0;
  text-align: center;
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   border-radius: 5px;
  display: block;
  width: 150px;

  &:hover {
    background-position: right center;
    text-decoration: none;
  
  }`
export const Label = styled.label`
font-weight: bold;
font-size: 20px;
display:flex;
flex-direction:column;
`
export const Form = styled.form`
max-width:400px;
border: 2px solid black;
margin-left:20px;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
align-items: center;
gap:20px;
`
export const Input = styled.input`
font-size: 10px;
width:250px;
height:20px;
background-color: #d3eaed;
border-radius: 5px;
outline:none;
border: 1px solid #0E197D ;
`