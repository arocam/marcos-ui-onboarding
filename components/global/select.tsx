import styled from 'styled-components'
import {SelectStateArrow} from '../../public/assets/icons/select-state-arrow'
import { useRef, useEffect, useState } from 'react'

const Select = styled.div`
@font-face{
        font-family: "helvetica-neue";
        src: url("/assets/fonts/helvetica-neue-light.otf");
        font-weight: 300;
        font-style: normal;
        font-display: fallback;
    }
    font-family: 'helvetica-neue';
    font-weight: 300;
    width: 100%;
    max-width: 492px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 24px;
    margin-bottom:7px;
    color: #fff;
    :focus{
        border-bottom: 1px solid #fff;
    }
    & .selected{
        height: 60px;
        display: flex;
        align-items: center;
    }
    & .green{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1px;
        color: #ffffff60;
    }
    .option-list-container{
        width: 100%;
        /* border: 1px solid red; */
        position: relative;
    }
    .option-list{
        width: 100%;
        border: 1px solid #fff;
        position: absolute;
        background-color: #222222;
        display: none;
    }
    .option-list li{
        height: 60px;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    &:hover,
    .option-list li:hover{
        cursor: pointer;
    }
    .option-list li:hover{
        background-color: #ffffff10;
    }
    .arrow-svg{
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .1s ease;
        transform: rotate(90deg);
    }
`

export const MySelect = (props) =>{
    const {topic, options, selectClicked} = props;
    const [selected, setSelected] = useState(topic);
    let opened = false;
    
    const optionsList = useRef() as any;
    const arrowSvg = useRef() as any;
    const selectedOption = useRef() as any;

    const openOptionsList = () =>{
        if (opened) {
            optionsList.current.style.display='none';
            arrowSvg.current.style.transform= 'rotate(90deg)';
            opened = false;           
        } else{
            optionsList.current.style.display='block';
            arrowSvg.current.style.transform= 'rotate(0deg)';
            opened = true;       

        }
    }
    const newChose = (e) =>{
        setSelected(e);
        selectedOption.current.style.color = '#fff'
        openOptionsList()
        selectClicked(e);
    }


    return(
        <Select>
            <div className='selected' onClick={openOptionsList}>
                <div className='green' ref={selectedOption}>
                    <p>{selected}</p>
                    <div ref={arrowSvg} className='arrow-svg'>
                        <SelectStateArrow ></SelectStateArrow>
                    </div>
                </div>
            </div>
            <div className='option-list-container'>
                <ul ref={optionsList} className='option-list'>
                    {options.map((e, index) =>
                        <li key={index} onClick={()=>{newChose(e)}}>
                            <p>{e}</p>
                        </li>
                    )}
                </ul>
            </div>
        </Select>
    )
}