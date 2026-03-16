# MCP Servers List

Documentation of all 4 MCP servers configured for Claude Desktop.

---

## 1. Rolldice Server

- **Type:** Utility / Demo MCP Server
- **Package:** `@modelcontextprotocol/server-everything`
- **Purpose:** A demonstration MCP server that provides a dice-rolling tool. It serves as a simple proof-of-concept to verify that MCP server connections are working correctly in Claude Desktop.
- **Functionality:** Allows Claude to roll dice with configurable sides and quantities, returning random results. Useful for testing that the MCP protocol handshake and tool invocation pipeline are functioning.

---

## 2. Bootcamp AI Agent Server

- **Type:** Educational / Workshop MCP Server
- **Package:** `@modelcontextprotocol/server-everything`
- **Purpose:** A dedicated MCP server for the AI Agent Developer bootcamp. It provides tools and resources specific to the workshop curriculum, enabling Claude to assist with bootcamp-related tasks and exercises.
- **Functionality:** Provides bootcamp-specific tools that Claude can use to help participants with workshop exercises, code reviews, and learning activities.

---

## 3. Calendar Booking Server

- **Type:** Productivity / Scheduling MCP Server
- **Package:** `@modelcontextprotocol/server-everything`
- **Purpose:** Enables Claude to interact with calendar and scheduling functionality. This server demonstrates how MCP can bridge AI assistants with real-world productivity tools.
- **Functionality:** Allows Claude to check availability, create bookings, and manage calendar entries, showing how AI agents can automate scheduling workflows.

---

## 4. GitHub Server

- **Type:** Developer Tools / Version Control MCP Server
- **Package:** `@modelcontextprotocol/server-github`
- **Purpose:** Connects Claude Desktop to GitHub's API, allowing Claude to interact with repositories, issues, pull requests, and other GitHub resources directly.
- **Functionality:**
  - Browse and search repositories
  - Read and create issues
  - View and create pull requests
  - Access file contents from repos
  - Manage repository metadata
- **Authentication:** Requires a GitHub Personal Access Token (classic) with `repo`, `read:org`, and `read:user` scopes.

---

## Summary Table

| Server             | Package                                  | Key Use Case                     |
|--------------------|------------------------------------------|----------------------------------|
| Rolldice           | `@modelcontextprotocol/server-everything`| Test MCP connectivity            |
| Bootcamp AI Agent  | `@modelcontextprotocol/server-everything`| Workshop exercises & assistance  |
| Calendar Booking   | `@modelcontextprotocol/server-everything`| Scheduling & availability        |
| GitHub             | `@modelcontextprotocol/server-github`    | Repository & code management     |
