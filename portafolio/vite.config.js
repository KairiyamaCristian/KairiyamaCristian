import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

module.exports = function (api) {
  return {
    plugins: ['macros'],
  }
}

module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  }
}


