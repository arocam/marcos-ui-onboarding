import styled from 'styled-components'

export const SwiperStyle = styled.div`
    width: 100%;
    min-height: 300px;
    .swiper-container{
        width: 100%;
        min-height: 300px;
    }
   .swiper-card{
        width: 100%;
        min-height: 300px;
        display: flex;
        justify-content: space-between;
    }
    .album-group{
        display: grid;
        grid-template-columns: 1fr;
    }
    @media (min-width: 800px){
        .album-group{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1200px){
        .album-group{
            grid-template-columns: repeat(4, 1fr);
        }
    }
`