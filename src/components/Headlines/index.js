import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaveButton } from '..';

const Headlines = ({ handleSelect }) => {
    const [ stories, setStories ] = useState([])
    const [ error, setError ] = useState()

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                let { data } = await axios.get('https://futureproof-news.herokuapp.com/articles');
                setStories(data)
            } catch(err) {
                setError(err.message)
            }
        }
        fetchHeadlines()
    }, [])

    return (
        <>
        <ul>
            {
                stories.map(st =>  (
                    <li key={st.id} onClick={() => handleSelect(st.id)}>
                        <FaveButton /> <strong role="heading" aria-label="headline">{st.headline}</strong> {st.snippet}
                    </li>
                ))
            }
        </ul>
        { error && <div id="error" role="alert">{error}</div> }
        </>
    )
}



export default Headlines;