
import React, { useRef, useState } from "react";
import { SwiperStyle } from "./swiper-style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { AlbumCard } from "../global/album-card";
import { Albums } from "../../public/assets/helpers/albums";

export const MySwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    const albumsGroupContainer = [];
    let albumsGroup = [];
    Albums.albumes.forEach((album, index) =>{
        if((index + 1) % 4 == 0){
            albumsGroup.push(album);
            albumsGroupContainer.push(albumsGroup);
            albumsGroup = [];
        } else{
            albumsGroup.push(album);
        }
    })
    return(
        <SwiperStyle>
            <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper swiper-container">
            
            {
                albumsGroupContainer.map(group =>
                    <SwiperSlide>
                        <div className="album-group">
                            {group.map(album=>
                                <AlbumCard album={album}></AlbumCard>    
                                )}
                        </div>
                    </SwiperSlide>)
            }
            </Swiper>
        </SwiperStyle>
    )
}