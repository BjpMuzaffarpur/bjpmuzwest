/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  // यह repository नाम निकालेगा (e.g., 'bjpmuzwest')
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
}

const nextConfig = {
  output: 'export',
  // GitHub Pages के Repository path के लिए
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
