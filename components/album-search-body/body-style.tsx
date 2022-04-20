import styled from 'styled-components'

export const BodyStyle = styled.div`
    width: 84%;
    height: 100px;
    margin: 0 auto;
    .body-text-search{
        margin-top: 50px;
        background-color: red;
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
`