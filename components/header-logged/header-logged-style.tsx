import styled from 'styled-components'

export const HeaderStyle = styled.header`
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    .header-nav{
        display: flex;
    }
    .nav-item{
        margin-right: 12px;
    }
    /* .search-link,
    .my-albums-link{
        margin-right: 42px;
    }
    .logout-link{
        margin: 0 42px;
    } */
    .aluxion-logo,
    .logout-text{
        display: none;
    }
    .aluxion-icon,
    .logout-icon{
        display: block;
    }
    .header-nav{
        color: #fff;
        font-family: "helvetica-neue";
        font-weight: 600;
    }
    .current-page{
        color: #D6F379;
    }
    @media (min-width: 768px){
        padding: 0 42px;
        .aluxion-logo,
        .logout-text{
            display: block;
        }
        .aluxion-icon,
        .logout-icon{
            display: none;
        }
        .nav-item{
            margin-right: 32px;
        }
    }
    @media (min-width: 992px){
        padding: 0 80px;
        .nav-item{
            margin-right: 42px;
        }
    }
`