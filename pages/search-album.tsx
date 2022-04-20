import { NextPage } from "next"
import { Body } from "../components/album-search-body/body";
import { HeaderLogged } from "../components/header-logged/header-logged";

const searchAlbum: NextPage = () =>{
    return(
        <>
            <HeaderLogged currentPage='searchAlbum'></HeaderLogged>
            <Body></Body>
        </>
    )
}

export default searchAlbum;