import { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Component Did Catch is triggered', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops, we got crashed! </h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
