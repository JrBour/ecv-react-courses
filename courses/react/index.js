import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import {Deck, Image, Slide} from "spectacle";
import components from "../../components";
import slides, { transitions } from "./index.mdx";
import theme from "../../theme";

require("normalize.css");

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};


const render = (newTheme, newSlides) => {
  ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
      <Deck transition={['slide']} transitionDuration={500} theme={newTheme} contentWidth={1400}>
        {newSlides.map((S, i) => {
          const transition = transitions[i] || null;
          return <S transition={transition} key={`slide-${i}`} />;
        })}
      </Deck>
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(theme, slides);

if (module.hot) {
  module.hot.accept(() => {
    render(require("../../theme").default, require("./index.mdx").default);
  });
}
