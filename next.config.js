const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const { createContentlayerPlugin } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
}

const withVanillaExtract = createVanillaExtractPlugin({})
const withContentlayer = createContentlayerPlugin({})

module.exports = withContentlayer(withVanillaExtract(nextConfig))
