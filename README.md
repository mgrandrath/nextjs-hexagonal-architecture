# Hexagonal Architecture with Next.js

This is a demo application that applies the concepts of Hexagonal Architecture
(also known as "Ports and Adapters") to a Next.js app.

The app implements two pages (list page and detail page) of an online e-commerce
shop that sells spaceships.

## Features

- **Server-side rendering:** The pages are rendered on the server and can be
  cached in a CDN for best performance.
- **Dynamically load data:** Data that should not be cached (like the stock
  availability) is loaded dynamically in the browser and integrated seamlessly
  in the server-rendered HTML.
- **Separation of concerns:** All responsibilities (rendering, state management,
  side effects, API integration) are cleanly separated and loosely coupled. This
  reduces the overall complexity and makes it easier to add additional features
  to the codebase.
- **Central page store:** The entire page state and all user interactions are
  managed in a central store per page. This makes it possible to test the entire
  functionality of the app without rendering a single component.

## Hexagonal Architecture

The [Hexagonal Architecture pattern](https://alistair.cockburn.us/hexagonal-architecture)
consists of the following parts:

- **Application:** This is the core of the application which defines its
  behavior. Sometimes it is called "domain code" or "business rules".
- **Ports:** The Application defines interfaces that it needs in order to
  exchange data with the outside world. These interfaces are called "Ports".
  - _Inbound Ports_ receive external events (like incoming HTTP requests) and
    in turn call the Application.
  - _Outbound Ports_ are called by the Application.
- **Adapters:** Adapters implement the Ports and connect the Application to the
  outside world. Adapters talk to external systems and convert data from
  external formats and protocols to the shape defined by the Application.

Additionally, Hexagonal Architecture restricts the direction of dependencies
between these parts. The core Application is only allowed to interact with
external data through the use of Ports. It is never allowed to reference an
Adapter directly. This means that all dependencies point _inwards_, toward the
Application. Likewise, all Adapters are independent of each other.

## Adopting Hexagonal Architecture for a Next.js frontend application

### Challenges

While the classical Hexagonal Architecture approach aligns well with HTTP
services, CLI, and standalone GUI applications, it is not obvious how this
pattern matches a fullstack frontend application that spans server and browser.

- **No single entry point:** Unlike classical applications Next.js apps don't
  have a single entry point like a `main()` function or method. Instead, special
  files (`page.tsx`, `layout.tsx`, `error.tsx`, …) define multiple entry points
  into the application that are executed in parallel.
- **Side effects in components:** React encourages coupling side effects to
  components. For example, it is very common to load data within a `useEffect`
  hook. This practice directly opposes the Hexagonal Architecture philosophy
  because it tightly couples the UI and data loading concerns.
- **Opinionated directory structure:** Next.js uses the filesystem directory
  structure for defining the application's URL routes. This has to be taken into
  account when separating Application and Adapters.

### Approach

- **Core:** The "Application" from Hexagonal Architecture has been renamed to
  "Core" in order to prevent confusion with Next.js `app/` directory, which
  cannot be renamed. The core implements the so-called Business Logic and
  defines the inbound and outbound Ports.
- **Ports:** As described by the Hexagonal Architecture pattern, the Ports are
  interfaces defined by the Core in order to exchange data with the outside
  world.
  - **Port Collections:** Because each page in a web app usually has to interact
    with multiple external services, it makes sense to bundle the relevant Ports
    into a single type for convenience. A Port Collection is defined as part of
    a page and is therefore part of the UI Adapter.
- **Adapters:**
  - **UI Adapter:** The Next.js application as a whole constitutes the UI
    Adapter. It acts as the Inbound Adapter and is responsible for rendering the
    UI and process the incoming user events.
  - **Outbound Adapters:** The concept of Outbound Adapters is unchanged from
    the Hexagonal Architecture Pattern. The Core defines the Outbound Ports that
    it needs in order to fullfill its tasks and the Outbound Adapters implement
    them.
- **Store:** The Store is the central hub _per page_ that coordinates UI events
  and state. It is explicitly part of the UI Adapter. This allows it to be
  custom tailored to the needs of the UI.
- **Wiring:** Wiring is the process of connecting (abstract) Ports to (concrete)
  Adapters at runtime. In classic Hexagonal Architecture apps this is usually
  done centrally at startup time within the application's entry point (like
  `main()`). A fullstack application needs two Wirings, because it runs in two
  different runtime environments: the server and the browser. In each
  environment the app needs access to different services and APIs. For example,
  the same app may use a database Adapter on the server and later a geolocation
  Adapter in the browser. The Wiring is also customized per page, because not
  every page needs access to every Port.
