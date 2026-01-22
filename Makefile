USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

export USER_ID
export GROUP_ID

DOCKER_COMPOSE = USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) docker compose

.PHONY: build up down logs shell init install

build:
	$(DOCKER_COMPOSE) build

up:
	$(DOCKER_COMPOSE) up -d

down:
	$(DOCKER_COMPOSE) down

logs:
	$(DOCKER_COMPOSE) logs -f

shell:
	$(DOCKER_COMPOSE) exec node bash

init:
	$(DOCKER_COMPOSE) run --rm node pnpm create next-app . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm --no-git --no-install

install:
	$(DOCKER_COMPOSE) run --rm node pnpm install

deploy:
	gcloud run deploy roberto-website \
		--source . \
		--dockerfile Dockerfile \
		--region us-central1 \
		--allow-unauthenticated \
		--port 8080
