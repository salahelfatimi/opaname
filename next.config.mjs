/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'french-opaname.store',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;
