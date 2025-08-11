# ZennとQiitaの記法と変換仕様

このドキュメントは、ZennとQiitaのマークダウン記法の違いと、このGitHub Actionsが提供する相互変換の仕様をまとめたものです。

## 変換対応サマリー

| 分類 | 項目 | Zenn記法 | Qiita記法 | 変換仕様 |
| :--- | :--- | :--- | :--- | :--- |
| **メタデータ** | フロントマター | [詳細](#メタデータ-front-matter) | [詳細](#メタデータ-front-matter) | **双方向で変換可能** |
| **コード** | 差分ハイライト | ` ```diff js ` | ` ```diff_js ` | **双方向で変換可能**<br>スペースとアンダースコアを相互変換 |
| **画像** | [画像全般](#画像) | `![alt](url)` | `![alt](url)` | **双方向で変換をサポート**<br>詳細は[画像セクション](#画像)を参照 |
| | キャプション | `*caption*` | - | **Zenn -> Qiita:** キャプションを削除 |
| | サイズ指定 | `(url =300x)` | `<img>`タグ | **双方向で変換可能**<br>詳細は[画像セクション](#画像)を参照 |
| **リンク** | [埋め込み全般](#埋め込み) | `@[card](url)` | URL単独 | **Zenn -> Qiita:** カードリンクをURLに変換<br>詳細は[埋め込みセクション](#埋め込み)を参照 |
| **カスタム** | 注意書き | `:::message` | `:::note info` | **双方向で変換可能** |
| | 警告 | `:::message alert` | `:::note alert` | **双方向で変換可能** |
| **折りたたみ** | アコーディオン | `:::details` | `<details>` | **双方向で変換可能** |

## 変換仕様の詳細

### メタデータ (front-matter)

記事のタイトル、タグ、公開状態などを管理するメタデータは、各プラットフォームの仕様に合わせて相互に変換されます。

#### Zenn -> Qiita

```md
# Zenn
---
title: "記事のタイトル"
emoji: "📘"
type: "tech"
published: true
topics: [topic1, topic2]
---

↓

# Qiita
---
title: "📘 記事のタイトル" # emojiが存在する場合、titleの先頭に付与
private: false # publishedの真偽値を反転
tags:
  - topic1
  - topic2
updated_at: ""
id: null # 変換先ファイルが存在する場合はそのIDを引き継ぐ
organization_url_name: null
slide: false
ignorePublish: false
---
```

#### Qiita -> Zenn

```md
# Qiita
---
title: "記事のタイトル"
private: false
tags:
  - tag1
  - tag2
updated_at: ""
id: xxxxx
organization_url_name: null
slide: false
ignorePublish: false
---

↓

# Zenn
---
title: "記事のタイトル"
emoji: "" # emojiは空文字で設定
type: "tech" # tech固定
published: true # privateの真偽値を反転
topics: [tag1, tag2]
---
```

---

### コンテンツの変換

#### コードブロック（差分）

差分（diff）を含むコードブロックの記法を相互に変換します。Zennが用いる `diff` (スペース)と、Qiitaが用いる `diff_` (アンダースコア)を自動で置換します。

````md
# Zenn
```diff python:main.py
- print("old")
+ print("new")
```

⇅

# Qiita
```diff_python:main.py
- print("old")
+ print("new")
```
````

#### 画像

##### 記法とURLの変換

Zennの画像キャプションやサイズ指定は、Qiitaでは`<img>`タグを使用することで表現します。
`imageFormat`設定に応じて、変換方法を選択できます。

```md
# Zenn
![altテキスト](画像URL =200x)
*画像のキャプション*

↓

# Qiita
# config.imageFormat == "normal" の場合 (デフォルト)
![altテキスト](画像URL)

# config.imageFormat == "tag" の場合
<img src="画像URL" alt="altテキスト" width="200">
```

また、Zennリポジトリの`/images/`パスにある画像は、`dstImageBaseUrl`設定に基づいて、Qiitaでも表示可能な絶対パスURLに変換されます。

##### 画像URLの管理方針

ZennとQiitaで記事を同期する際の画像管理は、リポジトリの公開設定によって方針が異なります。

- **プライベートリポジトリの場合:**
  - ZennまたはQiitaのアップローダーに画像をアップロードし、発行されたURLを使用するのが最も簡単です。
- **公開リポジトリの場合:**
  - 上記の方法に加え、Zenn連携リポジトリの`images`ディレクトリに画像を配置し、相対パス (`/images/foo.png`) で参照できます。
  - この場合、`dstImageBaseUrl`を設定することで、Qiitaへの同期時に画像URLが自動的に絶対パスに変換され、画像表示が維持されます。
    - 設定例: `https://github.com/<user>/<repo>/blob/main`

#### 埋め込み

Zenn独自の埋め込み記法 `@[service](url)` は、Qiitaでは多くがURL単独でのカードリンク表示に対応しているため、URLそのものに変換します。

```md
# Zenn
@[card](https://example.com)

↓

# Qiita
https://example.com
```

> [!WARNING]
>
> - `@[gist](url)` のように、QiitaでもURL単独で埋め込み表示が可能なものは変換対応済みです。
> - しかし、YouTubeやSpeaker Deckなど、Qiitaで `<iframe>` や `<script>` タグが必要なサービスの埋め込みは、現在**未対応**です。
> - QiitaからZennへの変換は未実装です。

##### サービスごとの対応状況

| サービス | Zenn | Qiita | Zenn -> Qiita変換 |
| :--- | :--- | :--- | :---: |
| リンクカード | URL単独 or `@[card](url)` | URL単独 | **済** |
| Twitter | URL単独 | URL単独 | - |
| GitHub | URL単独 | URL単独 | - |
| Gist | `@[gist](url)` | URL単独 | **済** |
| CodeSandbox | `@[codesandbox](url)` | URL単独 | **済** |
| YouTube | URL単独 | `<iframe>` | 未 |
| Speaker Deck | `@[speakerdeck](id)` | `<script>` | 未 |
| ...その他 | [Zenn仕様][Zenn仕様]| [Qiita仕様][Qiita仕様]| 未 |

[Zenn仕様]: https://zenn.dev/zenn/articles/markdown-guide#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF

[Qiita仕様]: https://qiita.com/Qiita/items/612e2e149b9f9451c144

#### カスタムブロック

Zennの`message`とQiitaの`note`を相互に変換します。

```md
# Zenn
:::message
通常メッセージ
:::

:::message alert
警告メッセージ
:::

⇅

# Qiita
:::note info
通常メッセージ
:::

:::note alert
警告メッセージ
:::
```

> `:::note warn` (Qiita) は `:::message alert` (Zenn) に変換されます。

#### アコーディオン（折りたたみ）

Zennの`details`とQiitaの`<details>`タグを相互に変換します。

```md
# Zenn
:::details タイトル
ここに内容
:::

⇅

# Qiita
<details><summary>タイトル</summary>
ここに内容
</details>
```

**参考リンク:**

- [Zennのマークダウン記法](https://zenn.dev/zenn/articles/markdown-guide)
- [Qiitaのマークダウン記法](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
