/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "media.licdn.com" },
            { hostname: "cdn.cutshort.io" },
            { hostname: "avatars.githubusercontent.com" },
            { hostname: "wikimedia.org" },
            { hostname: "upload.wikimedia.org" },
            { hostname: "raw.githubusercontent.com" },
            { hostname: "couchdb.apache.org" },
            { hostname: "fly.io" },
            { hostname: "www.zsh.org" },
            { hostname: "uxwing.com" },
        ],
    },
}

module.exports = nextConfig
