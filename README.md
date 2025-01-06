## Next.js MUI Boilerplate
This utility helps to quicly set up a new Next.js project with some conveniences

- VSCode workspace settings to launch and debug a Next.js application
- Convenient eslint setup
- Material UI dependencies and setup
  - [Viewport](https://mui.com/material-ui/getting-started/usage/#responsive-meta-tag)
  - [CssBaseline](https://mui.com/material-ui/getting-started/usage/#cssbaseline)
  - [AppRouterCacheProvider and Theme](https://mui.com/material-ui/integrations/nextjs/)
- Prisma ORM setup
  - Configured prisma singleton to work properly with
    [Next.js hot reloading](// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#best-practices-for-using-prisma-client-in-development)
  - VSCode convenience settings to automatically format prisma schema on save
  - Installed tsx to run prisma seed
  - Prisma seed base script

## Create a new project
```
npx create-next-app@14  \
    --typescript        \
    --eslint            \
    --app               \
    --use-npm           \
    --example https://github.com/fabiolnm/nextjs14-mui-prisma-boilerplate
```

## Using prisma
```
# Make changes to schema.prisma then update the database
npx prisma db push

# When the changes are good to go, migrate to the database
# This command will create a SQL migration file in prisma/migrations
npx prisma db migrate dev

# Seed the database with some data
npx prisma db seed
```
