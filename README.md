# imagetools-demo

https://github.com/JonasKruckenberg/imagetools/issues/700

How to replicate the issue:

1. Install dependencies

```sh
# Sharp requires --ignore-engines on macOS
yarn install --ignore-engines
```

2. Run `yarn dev`

3. Observe that one of the images is rotated
