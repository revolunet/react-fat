import React from "react";
import PropTypes from "prop-types";

const Line = ({ width, children }) => {
  const register = node => {
    if (node && node.offsetWidth) {
      const scale = width / node.offsetWidth;
      node.style.zoom = scale * 100 + "%";
    }
  };

  return (
    <div
      ref={register}
      style={{
        display: "inline-block",
        whiteSpace: "nowrap",
        textAlign: "center",
        margin: "0 auto",
        overflow: "hidden",
        boxSizing: "border-box"
      }}
    >
      {children}
    </div>
  );
};

// detect container width and update on window.resize
// split input lines with "\n"
class Fat extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      width: null
    };
  }
  registerContainer = node => {
    this.container = node;
  };

  componentDidMount() {
    this.detectWidth();
    window.addEventListener("resize", this.detectWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.detectWidth);
  }
  detectWidth = () => {
    this.setState({
      width: this.container.offsetWidth
    });
  };
  render() {
    console.log("width", this.state.width);
    const lines = this.props.children
      .trim()
      .split("\n")
      .filter(Boolean)
      .map(s => s.trim());
    return (
      <div
        style={this.props.style}
        className={this.props.className}
        ref={this.registerContainer}
      >
        {lines.map((line, i) =>
          <Line key={line} width={this.state.width}>
            {line}
          </Line>
        )}
      </div>
    );
  }
}

Fat.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};
Fat.defaultProps = {};

export default Fat
