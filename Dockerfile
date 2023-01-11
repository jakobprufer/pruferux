FROM node:19 AS nodebuild

# Build the frontend
ARG version=0.0.1
WORKDIR /web
COPY . /web

RUN npm version --no-git-tag-version ${version} \
  && yarn install \
  && yarn run build

FROM nginx:alpine
# Serve the frontend
EXPOSE 80
COPY --from=nodebuild /web/build /serve
COPY --from=nodebuild /web/nginx.conf /etc/nginx/nginx.conf
