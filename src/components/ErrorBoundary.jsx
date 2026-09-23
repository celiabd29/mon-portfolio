import React from "react";

// Empeche qu'une erreur dans un sous-arbre (ex : la 3D / WebGL) fasse un ecran
// blanc sur toute la page. On rend un fallback a la place.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("ErrorBoundary a intercepté une erreur :", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
