import { Container } from "@mui/system";
import { Component, ErrorInfo, ReactNode } from "react";
import maintenance from "Assets/img/Error/maintenance.jpg";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <img
            src={maintenance}
            alt={maintenance}
            style={{ height: "100%", width: "100%" }}
          />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
