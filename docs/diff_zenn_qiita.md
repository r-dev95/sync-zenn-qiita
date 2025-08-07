# `Zenn`と`Qiita`の記法の違い

`Zenn`と`Qiita`のマークダウン記法の違いを下表に示します。

ここで`Zenn -> Qiita`と`Qiita -> Zenn`は、本アクションおいて、変換処理を実装済みかどうかを表します。

変換処理の内容については[こちら](../README.md)。

| 分類                  | 項目                                            | Zenn                   | Qiita                                         | Zenn -> Qiita | Qiita -> Zenn |
| ---                   | ---                                             | ---                    | ---                                           | :---:         | :---:         |
| 見出し/目次           | 見出し (`#`)                                    | 〇                     | 〇                                            | -             | -             |
|                       | 目次 (自動生成)                                 | 〇                     | 〇                                            | -             | -             |
| リスト表現            | 記号 (`*`, `-`, `+`)                            | 〇                     | 〇                                            | -             | -             |
|                       | 番号付き (`1.`, `2.`,...)                       | 〇                     | 〇                                            | -             | -             |
| テキスト表現          | 太字/斜体/打ち消し線                            | 〇                     | 〇                                            | -             | -             |
|                       | 引用 (`>`)                                      | 〇                     | 〇                                            | -             | -             |
|                       | チェックリスト (`- [ ]`)                        | 〇                     | 〇                                            | -             | -             |
|                       | テーブル                                        | 〇                     | 〇                                            | -             | -             |
| 絵文字                | 絵文字 (`:emoji:`)                              | 〇                     | 〇                                            | -             | -             |
| 脚注                  | 脚注 (`[^1]`)                                   | 〇                     | 〇                                            | -             | -             |
| 数式                  | LaTeX (`$`, `$$`)                               | 〇 (KaTeX)             | 〇 (MathJax)                                  | 未            | 未            |
|                       | LaTeX (` ```math `)                             | ×                     | 〇                                            | -             | 未            |
| コード                | インラインコード (`` `code` ``)                 | 〇                     | 〇                                            | -             | -             |
|                       | コードブロック (` ``` `)                        | 〇                     | 〇                                            | -             | -             |
|                       | シンタックスハイライト (` ```js `)              | 〇                     | 〇                                            | -             | -             |
|                       | ファイル名表示 (` ```js:main.js `)              | 〇                     | 〇                                            | -             | -             |
|                       | 差分 + シンタックスハイライト                   | ` ```diff js `         | ` ```diff_js `                                | 済            | 済            |
|                       | 差分 + ファイル名表示                           | ` ```diff js:main.js ` | ` ```diff_js:main.js `                        | 済            | 済            |
| [画像](#画像)         | 画像挿入 (`![alt](url)`)                        | 〇                     | 〇                                            | -             | -             |
|                       | 画像キャプション (`![alt](url)`<br>`*caption*`) | 〇                     | ×                                            | 済            | -             |
|                       | 画像サイズ指定 (`![alt](url =300x)`)            | 〇                     | ×                                            | 済            | -             |
|                       | 画像サイズ指定 (`<img>`タグ)                    | ×                     | 〇                                            | -             | 済            |
| リンク                | テキストリンク (`[text](url)`)                  | 〇                     | 〇                                            | -             | -             |
| [埋め込み](#埋め込み) | ダイアグラム (` ```mermaid`)                    | 〇                     | 〇                                            | -             | -             |
|                       | ダイアグラム (` ``` plantuml`)                  | ×                     | 〇                                            | -             | 未            |
|                       | カードリンク (URL 単独)                         | 〇                     | 〇                                            | -             | -             |
|                       | カードリンク (`@[card](url)`)                   | 〇                     | ×                                            | 済            | -             |
|                       | 様々なサービス                                  | `@[xxx](url)`          | URL単独                                       | 済            | 未            |
| カスタムブロック      | 注意書きなど                                    | `:::message`           | `:::note info`                                | 済            | 済            |
|                       |                                                 | ×                     | `:::note warn`                                | 済            | 済            |
|                       |                                                 | `:::message alert`     | `:::note alert`                               | 済            | 済            |
| 折りたたみ            | アコーディオン                                  | `:::details title`     | `<details><summary>title</summary></details>` | 済            | 済            |
| HTML                  | HTML タグの使用                                 | 一部のタグのみ         | 比較的多くのタグを許容                        | -             | -             |

参考:

- [Zennのマークダウン記法](https://zenn.dev/zenn/articles/markdown-guide)
- [Qiitaのマークダウン記法](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)

## 画像

`Zenn`と`Qiita`の記事に使用可能な画像URLの違いを示します。

まず`Zenn`と`Qiita`ともに、画像をアップロード、URLを取得可能です。

参考:

- [Zennの画像アップロード](https://zenn.dev/dashboard/uploader)
- [Qiitaの画像アップロード](https://qiita.com/settings/uploading_images)

`Zenn`と`Qiita`に限らず、その他サービスの画像URLも使用可能ですが、画像をアップロードする手間があります。

そのため、記事を管理するリポジトリ内で完結するとうれしいです。

`Zenn`では、リポジトリ直下の`images`ディレクトリに画像を置くことで、アップロード可能です。
リポジトリはプライベートでも共有でも、`Zenn`と連携していればアップロード可能です。

しかし、`Qiita`では、リポジトリから自動で画像をアップロードする機能はありません。

> 一応、画像アップロードの手間を省く手段を検討するつもりではあるみたいです。
>
> https://github.com/increments/qiita-discussions/discussions/513

以上を踏まえ、画像URLの運用は下記のとおりになると考えます。

ここで記事を管理するリポジトリは、`Zenn`と`Qiita`どちらもプライベートとするか、どちらも共有とするかのみ記載します。

**どちらもプライベートリポジトリの場合:**

- `Zenn`または`Qiita`、その他サービスに手動アップロードした画像URLを使用。

**どちらも共有リポジトリの場合:**

- `Zenn`または`Qiita`、その他サービスに手動アップロードした画像URLを使用。
- リポジトリにアップロードした画像URLを使用。

リポジトリにアップロードした画像URLを使用する場合、それぞれ下記URLが使用可能です。

`Zenn`:

- `https://github.com/<user-name>/<repo-name>/blob/<branch-name>/<image-file-path>?raw=true` (共有リポジトリであること)
- `/images/<image-file-path>`

`Qiita`:

- `https://github.com/<user-name>/<repo-name>/blob/<branch-name>/<image-file-path>?raw=true` (共有リポジトリであること)

また`Zenn` -> `Qiita`で`Zenn`の画像URLに`/images/<image-file-path>`を指定する場合、[こちら](../README.md#dstimagebaseurl)に示すように`dstimagebaseurl`を設定をすることで`Qiita`でも画像が表示できるようになります。

## 埋め込み

`Zenn`と`Qiita`の埋め込みの違いについて、より詳細を示します。

ここで`Zenn -> Qiita`と`Qiita -> Zenn`は、本アクションおいて、変換処理を実装済みかどうかを表します。

| サービス      | Zenn                           | Qiita           | Zenn -> Qiita | Qiita -> Zenn |
| ---           | ---                            | ---             | :---:         | :---:         |
| リンクカード  | URL単独または`@[card](url)`    | URL単独         | 済            | -             |
| Twitter       | URL単独                        | URL単独         | -             | -             |
| GitHub        | URL単独                        | URL単独         | -             | -             |
| YouTube       | URL単独                        | `iframe`タグ    | 未            | 未            |
| Gist          | `@[gist](url)`                 | URL単独         | 済            | 未            |
| CodePen       | `@[codepen](url)`              | `script`タグ    | 未            | 未            |
| SlideShare    | `@[slideshare](スライドのkey)` | `iframe`タグ    | 未            | 未            |
| Speaker Deck  | `@[speakerdeck](スライドのID)` | `script`タグ    | 未            | 未            |
| Docswell      | `@[docswell](url)`             | `script`タグ    | 未            | 未            |
| CodeSandbox   | `@[codesandbox](url)`          | URL単独         | 済            | 未            |
| StackBlitz    | `@[stackblitz](url)`           | `iframe`タグ    | 未            | 未            |
| Figma         | `@[figma](url)`                | `iframe`タグ    | 未            | 未            |
| JSFiddle      | `@[jsfiddle](url)`             | ×              | -             | 未            |
| blueprintUE   | `@[blueprintue](url)`          | `iframe`タグ    | 未            | 未            |
| Mermaid.js    | ` ```mermaid `                 | ` ```mermaid `  | -             | -             |
| PlantUML      | ×                             | ` ```plantuml ` | -             | 未            |
| Google Slides | ×                             | `iframe`タグ    | 未            | -             |
| Google Drive  | ×                             | `iframe`タグ    | 未            | -             |
| Asciinema     | ×                             | `script`タグ    | 未            | -             |

参考:

- [Zennの埋め込み一覧](https://zenn.dev/zenn/articles/markdown-guide#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF)
- [Qiitaの埋め込み一覧](https://qiita.com/Qiita/items/612e2e149b9f9451c144)
