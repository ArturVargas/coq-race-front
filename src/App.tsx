import { WagmiProvider, useAccount } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/wagmi.config' 
import './App.css'
import { SelectPlayer } from './pages/SelectPlayer'
import { PayFee } from './pages/PayFee'
import RaceCanvas from './pages/RaceCanvas'
import DashboardPage from './pages/Dashboard'
import { WalletOptions } from '@/components/wallet-options' 

const queryClient = new QueryClient()

function ConnectWallet() { 
  const { isConnected, address } = useAccount() 
  if (isConnected) return address
  return <WalletOptions /> 
} 

function App() {

  return (
    <WagmiProvider config={config}> 
      <QueryClientProvider client={queryClient}> 
      <h1 className='text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight m-7'>
        COQ Derby Extravaganza
      </h1>
      <div>
      <ConnectWallet />
      </div>
      <div className='carousel my-2'>
        <h3 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Choose your runner
        </h3>
        <p className="text-sm font-medium text-gray-500">
          First Step
        </p>
        <div className='m-4'>
          <SelectPlayer />
        </div>
      </div>
      <div className='p-7'>
        <h3 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Pay your fee to entry the Race
        </h3>
        <p className="text-sm font-medium text-gray-500">
          Second Step
        </p>
        <div className='m-4'>
          <PayFee />
        </div>
      </div>
      <div className='m-7'>
        <h3 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Start the Race
        </h3>
        <RaceCanvas />
      </div>
      <div>
        <h3 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Statistics
        </h3>
        <DashboardPage />
      </div>
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default App
