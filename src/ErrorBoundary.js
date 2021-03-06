import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error", error, info);
    if (this.state.hasError) {
      setTimeout(
        () =>
          this.setState({
            redirect: true,
          }),
        5000
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      console.log("caught error");
      return (
        <h2>
          This listing has an error.. <Link to="/">Click here</Link> to go back
          to home page or wait five seconds
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
