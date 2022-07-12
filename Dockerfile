FROM node:14 AS nodebuild

# Build the frontend
ARG version=0.0.1
WORKDIR /frontend
COPY . /frontend

RUN npm version --no-git-tag-version ${version} \
  && yarn install \
  && yarn run build

FROM nginx:alpine
# Serve the frontend
EXPOSE 80
COPY --from=nodebuild /frontend/build /serve
COPY --from=nodebuild /frontend/nginx.conf /etc/nginx/nginx.conf
