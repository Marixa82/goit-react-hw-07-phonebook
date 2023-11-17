import styled from '@emotion/styled';

export const Li = styled.li`
max-width:400px;
display:flex;
justify-content: space-between;
margin-bottom: 20px;
align-items: center;
  gap: 10px;`

export const Button = styled.button`
 background: linear-gradient(
    to right, 
     #e9d362 0%,
    #333333 51%, 
    #e9d362 100%);
  margin: 10px;
  padding: 5px 10px;
  text-align: center;
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   border-radius: 5px;
  display: block;

  &:hover {
    background-position: right center;
    text-decoration: none;
  
  }`

export const Span = styled.span`
  font-weight: 400;
  font-size: 15px;
`