import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";
import Container from "./Container";
import Slider from "react-slick";
import Axios from "axios"


// Axios.get('')



function MusicCardContainer() {
    const HotInWeek = () => {
        
        return (
            <div className="hotin">
                <h3>THIS WEEK</h3>
                <div className="hotin-profile">
                    <div className="music-card-container">
                        {
                            playlists.slice(0, 4).map(item => (
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
    const NewSong = () => {
        
        return (
            <div className="hotin">
                <h3>New Song</h3>
                <div className="hotin-profile">
                    <div className="music-card-container">
                        {
                            playlists.slice(0, 4).map(item => (
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
    const Ranking = () => {
        
        return (
            <div className="hotin">
                <h3>Ranking</h3>
                <div className="hotin-profile">
                    <div className="music-card-container">
                        {
                            playlists.slice(0, 3).map(item => (
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
                        {/* Hot in Week */}
                    </div>
                    <div class="new-song-card">
                    <NewSong/>
                    {/* New Song */}
                    </div>
                </div>
                <div class="rightcolumn">
                <Ranking/> 
                {/* Ranking */}
                </div>
            </div>
        </Container>
    );
}

export default MusicCardContainer;
