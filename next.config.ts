import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/spaceships/:id",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=600",
          },
        ],
      },
      {
        source: "/spaceships",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=600",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
