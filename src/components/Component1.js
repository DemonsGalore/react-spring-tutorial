import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

const Component1 = () => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 }
  });

  return (
    <animated.div style={props}>
      <div style={c1style}>
        <h1>Component 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <Spring
          from={{ number: 0 }}
          to={{ number: 10 }}
          config={{ duration: 10000 }}>
          {props => <div>{props.number.toFixed(1)}</div>}
        </Spring>
      </div>
    </animated.div>
  );
}

export default Component1;

const c1style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
};
