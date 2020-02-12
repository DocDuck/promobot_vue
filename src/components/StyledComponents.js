import styled from 'vue-styled-components'

const backgroundProps = { color: String };

export const StyledImage = styled('div', backgroundProps)`
    display: block;
    width: 100%; 
    height: 60%;
    background: ${props => props.color ?  props.color : 'white'};
`;

export const StyledIcon = styled('div', backgroundProps)`
    display: block;
    width: 24px; 
    height: 24px;
    background: ${props => props.color ?  props.color : 'gray'};
`;

