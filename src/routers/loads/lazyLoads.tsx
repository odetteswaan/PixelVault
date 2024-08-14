import Loader from "src/components/loader/Loader";
import loadable from "@loadable/component";

export const CounterPage = loadable(() => import("src/pages/counter/Counter"), {
  fallback: <Loader />,
});

export const ErrorPage = loadable(
  () => import("src/components/error/ErrorPage"),
  {
    fallback: <Loader />,
  }
);

export const HomePage = loadable(() => import("src/pages/home/Home"), {
  fallback: <Loader />,
});
