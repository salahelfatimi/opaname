/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'plum-capybara-409476.hostingersite.com',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;
