import styled from 'styled-components'

const InputStyle = styled.div`
  .text-input{
      height: 62px;
      width: 100%;
      max-width: 614px;
      
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