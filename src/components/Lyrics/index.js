import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../BackButton';

const Lyrics = () => {

    const [ lyric, setLyric ] = useState([
        { id: 1, artistName: "NCT", songName: "boss" },
        { id: 2, artistName: "WAYV", songName: "domino" },
        { id: 3, artistName: "NCT", songName: "cherry-bomb" },
      ]);
      
    const [ statusMessage, setStatusMessage ] = useState('Loading');

    const params = useParams();

    useEffect(() => {
        const fetchLyric = async () => {
            setStatusMessage('Loading')
            try {   
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/${params.artistName}/${params.songName}`);
                console.log(data)
                // setLyric(data);
                // setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`)
            }
        }
        fetchLyric()
    }, [params])

    return ( 
        <article aria-label="featured lyric" id="feature">
            <BackButton />
            <p>
                {!statusMessage && lyric.body }
            </p>
        </article>
    )
}

export default Lyrics;
