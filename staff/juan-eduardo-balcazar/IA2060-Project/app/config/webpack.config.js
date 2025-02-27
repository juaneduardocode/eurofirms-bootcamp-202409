
export default function configFactory(env) {
    return {
        mode: env === "production" ? "production" : "development",
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: new URL("./dist", import.meta.url).pathname,
        },
    };
}





import fs from 'fs';
import path from 'path';

const config = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(process.cwd(), "dist"),
    },
};



