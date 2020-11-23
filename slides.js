import React from "react";
import { Slide, Text, Heading, Image } from "spectacle";
import { MDXProvider } from "@mdx-js/tag";
import components from "./components";
import theme from "./theme";

const images = {
  wizardsLogo: require("./assets/logoWT.png"),
  dom: require("./assets/dom.png"),
  vdom: require("./assets/vdom.png"),
  showsDiagram: require("./assets/shows.png"),
  flux: require("./assets/flux.png"),
  store: require("./assets/store.png"),
  lifecycle: require("./assets/lifecycle.png")
};
// DEFAULT LAYOUT
export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest} maxWidth={1500}>
    <MDXProvider components={components}>{children}</MDXProvider>
    <Image src={images.wizardsLogo} height={100} style={{ position: "absolute",
      top: 0,
      left: 0 }}
    />
  </Slide>
);

// DARK LAYOUT
const darkComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  p: ({ children }) => <Text textColor="white">{children}</Text>
};

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);


export class ImageLayout extends React.Component {
  render() {
    const height = this.props.height || 500;
    return (
      <React.Fragment>
        {this.props.title && <Heading size={3}>{ this.props.title }</Heading>}
        {this.props.subtitle && <Heading size={5}>{ this.props.subtitle }</Heading>}
        <Image src={images[this.props.image]} height={height}/>
      </React.Fragment>
    );
  }
}

