import { BodyStyle } from "./body-style";
import { TitleH1 } from "../global/enjoy-h1";
import { Paragraph } from "../global/paragraph";
import { MyInput } from "../global/input2";


export const Body = () =>{
    return(
        <BodyStyle>
            <div className="body-text-search">
                <TitleH1 line1='Busca tus' line2='álbumes'></TitleH1>
                <Paragraph>Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus álbumes favoritos</Paragraph>
            </div>
            <div>
            <MyInput></MyInput>
            </div>
        </BodyStyle>
    )
}