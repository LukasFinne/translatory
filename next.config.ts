import {NextConfig} from "next";

const nextConfig:NextConfig = {
    serverExternalPackages: ['tesseract.js'],
    outputFileTracingIncludes:{
        outputFileTracingIncludes: {
            '/api/**/*': ['./node_modules/**/*.wasm', './node_modules/**/*.proto']
        }
    }
};

export default nextConfig;