import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../BackButton';

const FeaturedArticle = () => {
    const [ story, setStory ] = useState();
    const [ statusMessage, setStatusMessage ] = useState('Loading');

    const params = useParams();

    useEffect(() => {
        const fetchStory = async () => {
            setStatusMessage('Loading')
            try {   
                let { data } = await axios.get(`https://futureproof-news.herokuapp.com/articles/${params.id}`);
                setStory(data);
                setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`)
            }
        }
        fetchStory()
    }, [params])

    return ( 
        <article aria-label="featured story" id="feature">
            <BackButton />
            <h3>{ statusMessage ? statusMessage : story.headline }</h3>
            <p>
                {!statusMessage && story.body }
            </p>
        </article>
    )
}

export default FeaturedArticle;
