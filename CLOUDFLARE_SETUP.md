# Cloudflare Pages / D1 setup

このリポジトリは、Cloudflare D1 に歌枠データを入れて `data/*.json` を生成すれば公開できます。ライブ情報は使いません。

## 1. Pages

Cloudflare Pages で GitHub リポジトリ `masarun0929-cloud/amyutama` を接続します。

- Production branch: `main`
- Build command: 空欄
- Build output directory: `.`
- Functions directory: `functions`

`wrangler.example.toml` を使う場合は `wrangler.toml` にコピーし、D1 の `database_id` を設定してください。

## 2. D1

D1 データベースを作成し、`d1/schema.sql` を実行します。

Pages の Settings > Functions > D1 database bindings で、作成した D1 を `DB` という binding 名で接続します。

## 3. Environment variables

Pages の環境変数に設定します。

- `ADMIN_TOKEN`: 管理画面を保護する秘密文字列。未設定の場合、管理 API は動きません。
- `ORIGINAL_GENRE_KEYWORDS`: `兎彷魂あみゅ,usatama amyu,あみゅ`
- `GITHUB_ACTIONS_TOKEN`: GitHub Actions を起動できる GitHub token
- `GITHUB_OWNER`: `masarun0929-cloud`
- `GITHUB_REPO`: `amyutama`
- `GITHUB_STATIC_WORKFLOW`: `update-static-data.yml`
- `GITHUB_STATIC_REF`: `main`

GitHub Actions の repository secrets にも設定します。

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_D1_DATABASE_ID`

`CLOUDFLARE_API_TOKEN` は D1 の読み取りができる権限で作成してください。

## 4. Operation

1. `/admin.html` を開き、`ADMIN_TOKEN` を入力する。
2. 歌枠追加で配信日、タイトル、URL、曲リストを入れて D1 に登録する。
3. キー・ジャンルが必要な曲は管理画面で編集する。
4. 静的データ生成を開始し、GitHub Actions で `data/meta.json`、`data/songs.json`、`data/streams.json` を更新する。
5. Pages の再デプロイ後、公開サイトで件数と表示を確認する。

管理画面と管理 API は Cloudflare Pages 上で使う前提です。
