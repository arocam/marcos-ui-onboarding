import styled from 'styled-components'

export const MyTextArea = styled.textarea`
    @font-face{
        font-family: "helvetica-neue";
        src: url("/assets/fonts/helvetica-neue-light.otf");
        font-weight: 300;
        font-style: normal;
        font-display: fallback;
    }
    font-family: 'helvetica-neue';
    font-weight: 300;
    width: 100%;
    max-width: 492px;
    resize: none;
    height: 100px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 24px;
    margin-bottom:7px;
    color: #fff;
    :focus{
        border-bottom: 1px solid #fff;
    }
`