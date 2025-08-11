# ZennとQiitaのマークダウン記法 比較

このドキュメントは、ZennとQiitaのマークダウン記法の違いを比較・整理したものです。

## 機能比較表

| 分類 | 項目 | Zenn | Qiita |
| :--- | :--- | :--- | :--- |
| **見出し/目次** | 見出し (`#`) | 〇 | 〇 |
| | 目次 (自動生成) | 〇 | 〇 |
| **リスト表現** | 記号 (`*`, `-`, `+`) | 〇 | 〇 |
| | 番号付き (`1.`, `2.`,...) | 〇 | 〇 |
| **テキスト表現** | 太字/斜体/打ち消し線 | 〇 | 〇 |
| | 引用 (`>`) | 〇 | 〇 |
| | チェックリスト (`- [ ]`) | 〇 | 〇 |
| | テーブル | 〇 | 〇 |
| **絵文字** | 絵文字 (`:emoji:`) | 〇 | 〇 |
| **脚注** | 脚注 (`[^1]`) | 〇 | 〇 |
| **数式** | LaTeX (`$`, `$$`) | 〇 (KaTeX) | 〇 (MathJax) |
| | LaTeX (` ```math `) | × | 〇 |
| **コード** | インラインコード (`` `code` ``) | 〇 | 〇 |
| | コードブロック (` ``` `) | 〇 | 〇 |
| | シンタックスハイライト (` ```js `) | 〇 | 〇 |
| | ファイル名表示 (` ```js:main.js `) | 〇 | 〇 |
| | 差分 + シンタックスハイライト | ` ```diff js ` | ` ```diff_js ` |
| | 差分 + ファイル名表示 | ` ```diff js:main.js ` | ` ```diff_js:main.js ` |
| **画像** | 画像挿入 (`![alt](url)`) | 〇 | 〇 |
| | 画像キャプション (`![alt](url)`<br>`*caption*`) | 〇 | × |
| | 画像サイズ指定 (`![alt](url =300x)`) | 〇 | × |
| | 画像サイズ指定 (`<img>`タグ) | × | 〇 |
| **リンク** | テキストリンク (`[text](url)`) | 〇 | 〇 |
| **埋め込み** | ダイアグラム (` ```mermaid`) | 〇 | 〇 |
| | ダイアグラム (` ``` plantuml`) | × | 〇 |
| | カードリンク (URL 単独) | 〇 | 〇 |
| | カードリンク (`@[card](url)`) | 〇 | × |
| | 様々なサービス | `@[xxx](url)` | URL単独 |
| **カスタムブロック** | 注意書きなど | `:::message` | `:::note info` |
| | | × | `:::note warn` |
| | | `:::message alert` | `:::note alert` |
| **折りたたみ** | アコーディオン | `:::details title` | `<details><summary>title</summary></details>` |
| **HTML** | HTML タグの使用 | 一部のタグのみ | 比較的多くのタグを許容 |

---

## 埋め込みサービス対応比較

| サービス | Zenn | Qiita |
| :--- | :--- | :--- |
| リンクカード | URL単独または`@[card](url)` | URL単独 |
| Twitter | URL単独 | URL単独 |
| GitHub | URL単独 | URL単独 |
| YouTube | URL単独 | `iframe`タグ |
| Gist | `@[gist](url)` | URL単独 |
| CodePen | `@[codepen](url)` | `script`タグ |
| SlideShare | `@[slideshare](スライドのkey)` | `iframe`タグ |
| Speaker Deck | `@[speakerdeck](スライドのID)` | `script`タグ |
| Docswell | `@[docswell](url)` | `script`タグ |
| CodeSandbox | `@[codesandbox](url)` | URL単独 |
| StackBlitz | `@[stackblitz](url)` | `iframe`タグ |
| Figma | `@[figma](url)` | `iframe`タグ |
| JSFiddle | `@[jsfiddle](url)` | × |
| blueprintUE | `@[blueprintue](url)` | `iframe`タグ |
| Mermaid.js | ` ```mermaid ` | ` ```mermaid ` |
| PlantUML | × | ` ```plantuml ` |
| Google Slides | × | `iframe`タグ |
| Google Drive | × | `iframe`タグ |
| Asciinema | × | `script`タグ |

---

**参考リンク**
- [Zennのマークダウン記法](https://zenn.dev/zenn/articles/markdown-guide)
- [Qiitaのマークダウン記法](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
- [Zennの埋め込み一覧](https://zenn.dev/zenn/articles/markdown-guide#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF)
- [Qiitaの埋め込み一覧](https://qiita.com/Qiita/items/612e2e149b9f9451c144)