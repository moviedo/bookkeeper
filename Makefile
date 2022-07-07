##
##  DEPENDENCIES
## ================
## * UNIX operating system
## * GNU Make >= 4.3
## * GNU Bash >= 3.2.57

## setup initial development environment
setup:
	@npm i && \
	cat apps/bookkeeper-api/.env.example > "apps/bookkeeper-api/.env" && \
	echo "NODE_ENV=test\nPG_PORT=5433" > "apps/bookkeeper-api/.env.test" && \
	make start 

## start development environment with docker-compose
start: 
	@docker-compose up -d

## stop development environment with docker-compose
stop: 
	@docker-compose down

# Credit: https://gist.github.com/prwhite/8168133#gistcomment-2749866
help:
	@printf "Usage\n";

	@awk '{ \
			if ($$0 ~ /^.PHONY: [a-zA-Z\-\_0-9]+$$/) { \
				helpCommand = substr($$0, index($$0, ":") + 2); \
				if (helpMessage) { \
					printf "\033[36m%-20s\033[0m %s\n", \
						helpCommand, helpMessage; \
					helpMessage = ""; \
				} \
			} else if ($$0 ~ /^[a-zA-Z\-\_0-9.]+:/) { \
				helpCommand = substr($$0, 0, index($$0, ":")); \
				if (helpMessage) { \
					printf "\033[36m%-20s\033[0m %s\n", \
						helpCommand, helpMessage; \
					helpMessage = ""; \
				} \
			} else if ($$0 ~ /^##/) { \
				if (helpMessage) { \
					helpMessage = helpMessage"\n                     "substr($$0, 3); \
				} else { \
					helpMessage = substr($$0, 3); \
				} \
			} else { \
				if (helpMessage) { \
					print "\n                     "helpMessage"\n" \
				} \
				helpMessage = ""; \
			} \
		}' \
		$(MAKEFILE_LIST)