import { NextPage } from "next"
import { HeaderLogged } from "../components/header-logged/header-logged";

const searchAlbum: NextPage = () =>{
    return(
        <>
            <HeaderLogged currentPage='searchAlbum'></HeaderLogged>
        </>
    )
}

export default searchAlbum;