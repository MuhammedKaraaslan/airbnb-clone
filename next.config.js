/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  evn:{
    mapbox_key: 'pk.eyJ1IjoibXVoYW1tZWRrYXJhYXNsYW4iLCJhIjoiY2wweXk2M2RuMXlieDNqbjVrM2l6bnkwNCJ9.ZfoR1O2Nm9M423FjSbFlaA'
  }
}

module.exports = nextConfig
