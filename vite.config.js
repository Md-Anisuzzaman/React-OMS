// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api":"http://103.209.40.121:6565"
//     }
//   },
//   plugins: [react()],  
// });







// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({ 
//   server: {
//     proxy: {
//       "/api": "http://103.209.40.121:6565",
//     }  
//   } ,
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {   
  //       // target: "http://103.209.40.121:6565",
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' },
  //     },
  //   },
  // },
  plugins: [react()],
});
