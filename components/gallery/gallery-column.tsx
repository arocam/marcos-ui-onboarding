import styled from 'styled-components'

export const GalleryColumn = styled.div`
        display: flex;
        flex-direction: column;
        margin-right: 30px;    
    
    &:nth-child(even){
        margin-bottom: 70px;
    }
`