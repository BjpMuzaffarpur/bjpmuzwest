/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // यह आपके प्रोजेक्ट को HTML में बदल देगा
  images: {
    unoptimized: true, // GitHub pages पर इमेजेज के लिए यह जरूरी है
  }
}
module.exports = nextConfig
