import React from "react";
import {
  Headlines,
  FeaturedArticle,
} from "../../components";
import { Switch, Route, useHistory } from "react-router-dom";

const Jokes = () => {
  const history = useHistory();

  const loadFeaturedStory = (id) => history.push(`/jokes/${id}`);

  return (
    <div className="news-reader">
      <h1>A Real State of Events</h1>


      <section>
        <Switch>
          <Route exact path={"/jokes"}>
            <Headlines handleSelect={loadFeaturedStory} />
          </Route>

          {/* Dynamic route params */}
          <Route path={"/jokes/:id"}>
            <FeaturedArticle />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Jokes;
