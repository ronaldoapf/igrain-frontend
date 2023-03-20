import { ToastContainer, toast } from 'react-toastify';

import { AuthProvider } from "@contexts/AuthContext/AuthContext"
import { GlobalStyle } from "./global"
import { AppRoutes } from "./routes"

import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@common/resources/api/auth';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppRoutes />
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
