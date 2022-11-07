import React from 'react';
import monkey from './monkey.jpg'

class MyErrorBoundary extends React.Component {
  state = <img src={monkey} alt='monkey' />;

  static getDerivedStateFromError(error) {
    return <img src={monkey} alt='monkey' />;
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }


  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <img src={monkey} alt='monkey' />;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;