import React from 'react';
import { useSpring, animated } from 'react-spring';

const Component2 = (props) => {
  const divStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 750, duration: 750
  });

  return (
    <animated.div style={divStyle}>
      <div style={c2style}>
        <h1>Component 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <button type="button" onClick={props.toggle}>Toggle Component 3</button>
      </div>
    </animated.div>
  );
}

export default Component2;

const c2style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
};
