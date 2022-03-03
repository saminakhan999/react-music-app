import React from 'react';
import { MusicButton } from '../../components';
import { Switch, Route, useHistory } from 'react-router-dom';
import './index.css';

function Listen () {
  const history = useHistory()
  const loadLyric = id => history.push(`/Listen/${id}`)
    return (
      <>
        <section>
          <Switch>
              <Route exact path={"/listen/:id"}>
                <MusicButton handleButtonSelect={loadLyric}/>
              </Route>
              
              {/* Dynamic route params */}
              {/* <Route path={"/listen/:id"}>
                <Lyrics />
              </Route> */}
          </Switch>
        </section>
      </>
    );
  }
  
  export default Listen;
