# Docker Usage Rule

Whenever you need to run Node.js, npm, pnpm, or Next.js commands, you MUST execute them inside the Docker container defined in the project.

- Use `make up` to ensure the container is running.
- Use `docker compose exec node <command>` or `make shell` (if interactive) to run commands.
- For one-off commands during setup, you can use `docker compose run --rm node <command>`.
- This ensures consistency in versions (Node 22, pnpm) across environments.
