/** @type {import('next').NextConfig} */
const nextConfig = {};

const Pwa = require("@ducanh2912/next-pwa").default({
    dest: "public"
});


module.exports = Pwa({
    nextConfig
})
