Native Federation orchestrator examples

This demo application demonstrates how native federation orchestrators can be leveraged to load remotes into any web application. The project showcases four orchestrators:

1. **[Simple](src/simple/orchestrator.ts):** Bare-bones orchestrator that loads remotes from a hardcoded manifest.
2. **[Config](src/config/orchestrator.ts):** Orchestrator that exposes a bootstrapper to mount remotes with environment configuration (cached in `localStorage`).
3. **[Caching](src/caching/orchestrator.ts):** Orchestrator demonstrating profile and cache-override options (`latestSharedExternal`, `overrideCachedRemotes`) with `sessionStorage`.
4. **[Race](src/race/orchestrator.ts):** Orchestrator that registers with `window.__NF_REGISTRY__` and uses the event registry to coordinate remote events, avoiding mount race conditions.

## 🏗️ Architecture Overview

This project uses **Native Federation** to create standalone micro frontends that can be dynamically loaded and integrated into any host application. The architecture follows the micro frontend pattern where each component is:

- **Independently deployable**
- **Technology agnostic** (can be consumed by any framework)
- **Self-contained** with its own dependencies and configuration

> Read more about native federation here: https://github.com/native-federation/orchestrator/blob/main/docs/architecture.md

## 🤝 Contributing

This is a demo project showcasing micro frontend integration patterns. Feel free to extend the examples or adapt them for your specific use case.

## 📄 License

This project is provided as an example/demo. Please check with your organization's licensing requirements before using in production.
