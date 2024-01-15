import { http, createConfig } from 'wagmi'
import { avalancheFuji } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [avalancheFuji],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [avalancheFuji.id]: http(),
  },
})