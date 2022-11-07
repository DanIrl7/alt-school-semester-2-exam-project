import React from 'react';
import monkey from './monkey.jpg'

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: 'Oops, Something went wrong...',
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <img src={monkey} alt='monky' />;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;