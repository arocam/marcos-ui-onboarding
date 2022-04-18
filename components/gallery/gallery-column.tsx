import styled from 'styled-components'

export const GalleryColumn = styled.div`
        display: flex;
        flex-direction: column;
        margin-right: 13px; 
    @media (min-width: 600px){
        margin-right: 20px; 
    }
    &:nth-child(even){
        margin-bottom: 70px;
    }
`