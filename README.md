
#### Release

To deploy a new release to production, push a new tag to git:
```bash
git status # just to make sure the tree is clean
bump2version patch
git push --follow-tags
```
