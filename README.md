# To test Alchemy's Account Abstract (AA) kit

## install packages

* use node v18.16.0

```shell
npm i
```

## add your own .envrc

```shell
cp .envrc-example .envrc
vi .envrc
direnv allow
```

## result

* on Polygon Mumbai network

```shell
$ yarn dev
yarn run v1.22.21
$ npx tsx index.ts
Smart Account Address:  0xA061519aF73E1aD3837cd5d5c963D2f8924b9aD0
UserOperation Hash:  0xcfe46726a211ad3238af1ac70185b530688cd390428300ece36f6d054b8f4a53
Transaction Hash:  0x7e497887d30b75499d9506f292e228630292aa47fda3e71e675438fceb344e1a
✨  Done in 31.91s.
```

* on Sepolia testnet

```shell
Smart Account Address:  0xA061519aF73E1aD3837cd5d5c963D2f8924b9aD0
UserOperation Hash:  0x7d4654d95fc596579e7116bb5d7d1ba0b47cdeaa9d01c5bd9ba7dad67bd27cfb
Transaction Hash:  0xf3c719bdde25ebd5fa248c8b673e4c18071dd07ede771fb1d51c1339e1ac11e6
✨  Done in 30.33s.
```
