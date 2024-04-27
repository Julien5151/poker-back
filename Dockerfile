FROM node:20-alpine AS base
EXPOSE 8080

FROM node:20-alpine AS build
COPY . .
RUN npm install
RUN npm run build

FROM base AS final
COPY --from=build package.json package.json
COPY --from=build package-lock.json package-lock.json
COPY --from=build /dist ./dist
COPY --from=build /client ./client
RUN npm install --omit=dev
ENTRYPOINT ["node", "./dist/main.js"]
