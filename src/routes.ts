import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Each page is listed here. Add one with route('about', 'routes/about.tsx')
export default [
  index("routes/home.tsx"),
  route("work/dproz", "routes/dproz.tsx"),
  route("work/shopxray", "routes/shopxray.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
