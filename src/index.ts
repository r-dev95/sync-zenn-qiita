import { loadAppConfig, logAppConfig } from "./lib/configLoader";
import { Converter } from "./lib/converter";

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

  const config = loadAppConfig(configFilePath);
  config.toQiita = toQiitaFlag === "true";
  config.srcDir = config.toQiita ? zennDir : qiitaDir;
  config.dstDir = config.toQiita ? qiitaDir : zennDir;
  logAppConfig(config);

  const converter = new Converter(config);
  converter.run();
})();
