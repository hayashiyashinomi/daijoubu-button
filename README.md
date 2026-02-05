# daijoubu-button

不安なときに、1クリックで前向きな言葉を受け取れる Web アプリです。

- 公開URL: https://daijoubu-button.onrender.com/
- GitHub: https://github.com/hayashiyashinomi/daijoubu-button

---

## サービス概要

ボタンを押すだけで、各国語の「大丈夫（It’s OK / You’ll be fine）」を表示する Web アプリです。  
不安なとき、自分や周りにポジティブな一言を届ける“即効性”に特化したシンプルなサービスです。

本サービスは UX（ユーザー体験）検証を目的とした MVP として、

- 表示
- 切り替え
- コピー

に機能を絞って公開しています。  
今後は読み上げや SNS 共有の拡張を予定しています。

---

## 開発背景・作りたい理由

卒業制作の期限が迫る中で、

「小さく作って確実にリリースする」

というプロダクト開発の経験を重視しました。

また学習を進める中で不安や焦りを感じる場面が多く、  
押すだけですぐに安心できるツールが自分にも必要だと感じたことが開発のきっかけです。

---

## 想定ユーザー

- 学習や制作で不安を抱えやすい初学者
- 日常生活で気持ちを切り替えたい人
- 多言語コミュニティや海外生活者

**理由:**  
1アクションで完結する設計は、余裕がない状況でも負担なく使えるためです。

---

## 利用イメージ

- Web ページにアクセス
- 画面中央のボタンを押す
- ランダムに表示される「大丈夫」（多言語）を見る
- 必要に応じてコピーして SNS やチャットに共有  

（将来的には読み上げ・カード形式共有機能を追加予定）

---

## 差別化ポイント

- 1アクションで完結する UX
- 多言語対応による安心感と好奇心の両立
- 疲れている時でも使える設計
- MVP 後の高い拡張性（音声・共有・履歴・PWA 等）

---

## 技術構成

### 使用技術

- フレームワーク: Ruby on Rails 8.1.1
- 言語: Ruby 3.3.6
- DB: MVPでは未使用（YAML 管理）／将来的に PostgreSQL
- CSS: Tailwind CSS
- デプロイ: Render
- テスト: RSpec
- その他: i18n / GitHub Actions / dotenv-rails

---

## 機能一覧

### MVP（実装済）

- ボタン押下でメッセージ表示
- 多言語対応（YAML 管理）
- ランダム切り替え
- コピー機能
- ダークモード
- OGP / Twitter Card（静的画像 public/ogp.png）

---

## 品質管理・CI

GitHub Actions による CI を導入しています。

Pull Request 作成時および手動実行時に以下をチェックします。

- Brakeman（Rails セキュリティ解析）
- bundler-audit（Gem 脆弱性検査）
- importmap audit（JavaScript 依存関係チェック）

---

## デプロイ・運用

- Render にデプロイ済み
- 無料プランの仕様により初回アクセスが遅延する場合あり
- 本番トラブル時の確認フローを整備

### 表示不具合時の確認手順

- ブラウザのキャッシュクリア
- DevTools → Network タブ確認
- GitHub Actions の CI 状況確認

---

## OGP / Twitter Card

SNS 共有時にカード表示されるよう、OGP / Twitter Card を設定しています。

- 設定箇所: `app/views/layouts/application.html.erb`
- 画像: `public/ogp.png`
- OGP 画像 URL: https://daijoubu-button.onrender.com/ogp.png

確認コマンド:

```bash
curl -s https://daijoubu-button.onrender.com/ | grep -i -E 'og:(title|description|url|image)'
curl -I https://daijoubu-button.onrender.com/ogp.png
```
---

## 今後の機能

- 音声読み上げ（Web Speech API / TTS）
- お気に入り登録
- 翻訳追加 UI
- PWA 対応
- 履歴保存（DB 導入）

---

## 画面遷移図

Figma  
https://www.figma.com/design/M8rHbwDhZ4WLX1cp5a8F7k/

---

## ER 図（MVP後想定）

https://gyazo.com/966b235b5074d3e8bf4ef586f1cabe9d

languages 1 — n messages
