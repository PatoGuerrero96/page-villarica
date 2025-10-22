/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' https: data:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
              style-src 'self' 'unsafe-inline' https:; 
              img-src 'self' data: https:;
              font-src 'self' https:;
              connect-src 'self' https:;
            `.replace(/\s+/g, ' ')
          },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
