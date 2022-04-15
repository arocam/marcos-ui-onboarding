import styled from 'styled-components'

export const AlbumImage = styled.div`
    background: ${props => `url(/assets/img/albums/${props.coverPage}) no-repeat center center`};
    background-size: cover;
    height: 100%;
    width: 100%;
    min-width: 270px;
    border-radius: 12px;
`