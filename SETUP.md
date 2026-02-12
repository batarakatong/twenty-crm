# Twenty CRM Setup

This repository is a fork of the Twenty CRM project from https://github.com/twentyhq/twenty.git

## Repository Setup

The repository has been set up with the following git configuration:
- `origin`: https://github.com/batarakatong/twenty-crm.git (this fork)

To add the upstream repository for future updates:
```bash
git remote add upstream https://github.com/twentyhq/twenty.git
git fetch upstream main
```

## Content

This fork contains all the source code and files from the Twenty CRM project, an open-source CRM solution.

The repository includes:
- **twenty-front**: Frontend application built with React
- **twenty-server**: Backend API built with NestJS
- **twenty-docs**: Documentation
- **twenty-ui**: UI components library
- And many more packages (see `packages/` directory)

## Getting Started

For installation and setup instructions, see:
- 🚀 [Self-hosting](https://docs.twenty.com/developers/self-hosting/docker-compose)
- 🖥️ [Local Setup](https://docs.twenty.com/developers/local-setup)
- 📚 [Full Documentation](https://docs.twenty.com)

## Quick Start

```bash
# Install dependencies
yarn install

# Start the development server
yarn start
```

## License

This project is licensed under the GNU Affero General Public License v3 (AGPL-3.0).
See the LICENSE file for details.
