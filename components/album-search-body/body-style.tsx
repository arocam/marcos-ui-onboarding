import styled from 'styled-components'

export const BodyStyle = styled.div`
    width: 90%;
    height: 100px;
    margin: 0 auto;
    .body-text-search{
        margin-top: 50px;
        text-align: left;
    }
    @media (min-width: 768px){
        .body-text-search{
            margin-top: 80px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items : center;
        }
    }
    @media (min-width: 992px){
        .body-text-search{
            margin-top: 50px;
        }
    }
    @media (min-width: 1360){
        margin: 85%
    }
`