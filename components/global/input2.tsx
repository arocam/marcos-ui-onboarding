import styled from 'styled-components'

const InputStyle = styled.div`
    position: relative;
    width: 100%;
    max-width: 664px;
    margin: 30px auto;
    .text-input{
        height: 62px;
        width: 100%;
        background-color: #fff;
        border-radius: 24px;
        padding-left: 21px;
        font-family: "montserrat";
        font-weight: 600;
    }
    .search-button{
        height: 46px;
        width: 150px;
        background-color: #D6F379;
        border-radius: 23px;
        position: absolute;
        top: 8px;
        left: auto;
        right: 8px;
        bottom: 8px;
        font-family: "montserrat";
        font-weight: 600;
    }

`

export const MyInput = () =>{
    return(
        <InputStyle>
            <input type="text" placeholder='Album name...' className='text-input'/>
            <button className='search-button'>
                Search
            </button>
        </InputStyle>
    )
}