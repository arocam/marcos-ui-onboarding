import styled from 'styled-components'

const AlbumCardStyle = styled.div`
color: #fff;
    width: 320px;
    height: 469px;
    padding: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    margin: 0 auto 20px;
    .album-image{
        width: 272px;
        height: 241px;
        margin: 0 auto;
        border-radius: 12px;
        background: ${props => `url(/assets/img/albums-search/${props.coverPage}) no-repeat center center`};
    }
    .album-name{
        margin: 24px 0;
    }
    button{
        width: 154px;
        height: 44px;
        border-radius: 24px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        margin-top: 24px;
    }
    .add-album-button{
        background: #D6F379;
    }
    .remove-album-button{
        background: #E3513D;
    }
    @media (min-width: 1200px){
        width: 260px;
        padding: 14px;
        .album-image{
            width: 232px;
            height: 211px;
            
        }
    }
    @media (min-width: 1400px){
            width: 320px;
            height: 469px;
            padding: 24px;
        .album-image{
            width: 272px;
            height: 241px;
        }
    }
`
export const AlbumCard = (props) => {
    const {album} = props;
    const albumImageSrc = album.albumImageSrc;
    const albumName = album.albumName;
    const publishedDate = album.publishedDate;
    const added = album.added;
    return(
        <AlbumCardStyle coverPage={albumImageSrc}>
            <div className='album-image'></div>
            <div>
                <h3 className='album-name'>{albumName}</h3>
            </div>
            <div>
                <p className='album-published-date'>Publicado: {publishedDate}</p>
            </div>
            <div>
                {added ? 
                <button className='remove-album-button'>- Remove album</button> 
                :
                <button className='add-album-button'>+ Add album</button>}
                
            </div>
        </AlbumCardStyle>
    )
}