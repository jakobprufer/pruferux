
#### Release

To deploy a new release to production, push a new tag to git:
```bash
git status # just to make sure the tree is clean
$ cd /mnt/c/Users/jakob/Desktop/prufer.co
bump2version patch
git push --follow-tags
```

#### Manual release (not recommended)

```bash
docker login
docker build -t prufer .
docker tag prufer:latest romnn/prufer:latest
docker push romnn/prufer:latest
```

```bash
helm upgrade -n pruferco --install --set "global.appVersion=latest" --set "image.pullPolicy=Always" --set "image.repository=romnn/prufer" pruferco deployment/helm/pruferco/
```

"@react-pdf/renderer": "^3.0.2",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^12.1.3",
"@testing-library/user-event": "^13.5.0",
"classnames": "^2.3.2",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-gesture-responder": "^2.1.0",
"react-hover-video-player": "^9.7.1",
"react-icons": "^4.7.1",
"react-image-enlarger": "^1.1.0",
"react-pdf": "^6.2.1",
"react-router-dom": "^6.2.1",
"react-scripts": "5.0.0",
"sass": "^1.55.0",
"scroll-snap": "^4.0.3",
"web-vitals": "^2.1.4"
