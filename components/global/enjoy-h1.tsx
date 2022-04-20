import styled from 'styled-components'

const TitleH1Style = styled.div`
    .title-white{
        font-size: 40px;
        color: #fff;
        font-weight: 700;
        line-height: 48px;
    }
    .title-800{
        color: #D6F379;
    }
    @media (min-width: 768px){
      .title-white{
        font-size: 55px;
        line-height: 68px;
      }
    }
    @media (min-width: 1200px){
      .title-white{
        font-size: 64px;
        line-height: 78px;
      }
    }
`


export const TitleH1 = (props) =>{
    const {line1, line2} = props;

    return(
        <TitleH1Style>
            <h1 className='title-white'>
                {line1}<br/>
                <span className='title-800'>
                    {line2}
                </span>
            </h1>
        </TitleH1Style>
    )
}