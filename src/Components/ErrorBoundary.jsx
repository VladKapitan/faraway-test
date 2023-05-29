import React from "react";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";


export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: false,
            errorInfo: false,
            user_info: {},
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        this.setState(state => ({...state, error, errorInfo}))
    }

    render() {
        if (this.state.hasError) {
            return <Container>
                <div>
                    <h2>{'Something went wrong: '}</h2>
                </div>
                {this.state.error && <p>{JSON.stringify(this.state.error)}</p>}
                {/*{this.state.errorInfo?.componentStack && <p>{JSON.stringify(this.state.errorInfo.componentStack)}</p>}*/}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => window.location.reload()}
                >
                    Reload page
                </Button>
            </Container>

        }

        return this.props.children;
    }
}
