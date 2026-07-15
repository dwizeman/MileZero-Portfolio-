import { createBrowserRouter } from "react-router";
import PortfolioGrid from "./components/PortfolioGrid";
import ProjectDetail from "./components/ProjectDetail";
import MicrosoftCollection from "./components/MicrosoftCollection";
import BondsCase from "./components/BondsCase";
import DeepInstinctCase from "./components/DeepInstinctCase";
import OutOfScopeCase from "./components/OutOfScopeCase";
import BluehatCase from "./components/BluehatCase";
import AbraKadablueCase from "./components/AbraKadablueCase";
import PasswordProtection from "./components/PasswordProtection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PasswordProtection,
    children: [
      { index: true, Component: PortfolioGrid },
      { path: "project/:id", Component: ProjectDetail },
      { path: "microsoft-collection", Component: MicrosoftCollection },
      { path: "bonds", Component: BondsCase },
      { path: "deep-instinct", Component: DeepInstinctCase },
      { path: "out-of-scope", Component: OutOfScopeCase },
      { path: "bluehat", Component: BluehatCase },
      { path: "abra-kadablue", Component: AbraKadablueCase },
    ],
  },
]);
