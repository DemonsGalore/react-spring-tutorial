import React, { Fragment, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import './App.css';

const App = () => {
  const [showComponent3, setShowComponent3] = useState(false);
  const transitions = useTransition(showComponent3, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const toggle = () => {
    setShowComponent3(!showComponent3);
  }

  return (
    <Fragment>
      <Component1 />
      <Component2 toggle={toggle} />
      {transitions.map(({ item, key, props }) =>
        item && <animated.div key={key} style={props}><Component3 /></animated.div>
      )}
    </Fragment>
  );
}

export default App;
