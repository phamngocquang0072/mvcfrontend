import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";
import Container from "./Container";
import Slider from "react-slick";



function MusicCardContainer() {
    const HotInWeek = () => {
        
        return (
            <div className="hotin">
                <h3>THIS WEEK</h3>
                <div className="hotin-profile">
                    <div className="music-card-container">
                        {
                            playlists.map(item => (
                                <div>
                                    <MusicCard key={item.id} music={item}/>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
    const {playlists} = useSelector(state => state.musicReducer);
    return (
        <Container>
            <div class="row">
                <div class="leftcolumn">
                    <div class="week-card">
                        <HotInWeek/>
                    </div>
                    <div class="new-song-card">
                    <HotInWeek/>
                    </div>
                </div>
                <div class="rightcolumn">
                <HotInWeek/>
                </div>
            </div>
        </Container>
    );
}

export default MusicCardContainer;
