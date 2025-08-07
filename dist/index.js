"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configLoader_1 = require("./lib/configLoader");
const converter_1 = require("./lib/converter");
(async () => {
    const [, , toQiitaFlag, zennDir, qiitaDir, configFilePath] = process.argv;
    if (!toQiitaFlag || !zennDir || !qiitaDir || !configFilePath) {
        console.error("Usage: node index.js <toQiitaFlag> <zennDir> <qiitaDir>");
        console.error("- <toQiitaFlag>: true: Zenn -> Qiita, otherwise: Qiita -> Zenn");
        console.error("- <zennDir>: Zenn directory");
        console.error("- <qiitaDir>: Qiita directory");
        console.error("- <configFilePath>: Config file path");
        process.exit(1);
    }
    const config = (0, configLoader_1.loadAppConfig)(configFilePath);
    config.toQiita = toQiitaFlag === "true";
    config.srcDir = config.toQiita ? zennDir : qiitaDir;
    config.dstDir = config.toQiita ? qiitaDir : zennDir;
    (0, configLoader_1.logAppConfig)(config);
    const converter = new converter_1.Converter(config);
    converter.run();
})();
