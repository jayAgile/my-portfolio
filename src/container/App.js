import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Loader from "../components/common/loader";
import { ErrorBoundary } from "../components/Error";

const { PUBLIC_URL } = process.env;

const AppContainer = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loader isSuspense />}>
      <Loader>
        <BrowserRouter basename={PUBLIC_URL}>
          <Routes />
        </BrowserRouter>
      </Loader>
    </Suspense>
  </ErrorBoundary>
);

export default AppContainer;
