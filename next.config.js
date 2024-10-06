/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                port: '',
                hostname: 'cdn.weatherapi.com',
                pathname: '/**',
            },
        ],
    },
};

// const Pwa = require("@ducanh2912/next-pwa").default({  
//     dest: "public"  
// });  

module.exports = nextConfig;  
