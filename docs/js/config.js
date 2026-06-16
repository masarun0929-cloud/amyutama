// Public-facing configuration for the Usatama Amyu fanmade song database.
export const SITE = {
  creatorName: '兎彷魂あみゅ',
  databaseName: '歌唱データベース',
  heroIcon: '🐰',
  tagline: '~ Amyu Song Archive ~',
  editionLabel: 'Local Preview',
  baseUrl: './',
  description: '兎彷魂あみゅさんの歌った曲リスト、ランキング、検索をまとめたファンメイド歌唱データベース。',
  fanLabel: 'あみゅれっ兎',
  contactUrl: 'https://x.com/usatama_amyu',
  storagePrefix: 'usatama-amyu-songlist',
  officialLinks: [
    { label: 'YouTube', url: 'https://www.youtube.com/@UsatamaAmyu', className: 'youtube' },
    { label: 'X', url: 'https://x.com/usatama_amyu', className: 'x-link' },
    { label: 'FANBOX', url: 'https://usatama-amyu.fanbox.cc/', className: 'fanbox-link' },
    { label: 'BOOTH', url: 'https://usatama-amyu.booth.pm/', className: 'booth-link' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@usatamaamyu', className: 'tiktok-link' },
    { label: 'lit.link', url: 'https://lit.link/usatamaamyu', className: 'litlink-link' },
  ],
};

export const SHEET_ID = 'replace_with_google_spreadsheet_id';

export const CHANNELS = {
  new: {
    id: 'new',
    label: '歌った曲リスト',
    listGid: '0',
    setlistGid: 'replace_with_main_setlist_gid',
    handle: '@UsatamaAmyu',
    avatarUrl: 'https://yt3.googleusercontent.com/b0rVCCmVeicf7JzhRDOA0b2caXDPCqnd1bUgckRxionTfW-fJypjSlIg-gxW5znUWXR-gPLSrQ=s900-c-k-c0x00ffffff-no-rj',
    bannerUrl: 'https://yt3.googleusercontent.com/CKzrgOqQkkBg4cSNCZYkcrtyuV_mXNifssFvQeyUMWWDt6fDDNn2Gi0wNb6suQ2AvyjBpCinBQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    intro: "🐰♡┈┈┈┈┈┈┈┈┈┈┈┈♡🐰\n\nアンゴラ兎のさみしがりや、死神アイドルVtuber\n兎彷魂あみゅ(usatama amyu)だぞ〜❣️\n君の魂、永遠にあみゅの物にしてあげる…💕\n\n🐰リンク一覧💗\n\n♡Twitter♡最新情報をお届け♡\nhttps://twitter.com/usatama_amyu\n\n♡FANBOX♡もっとあみゅと依存しあいたい子向け♡\nhttps://usatama-amyu.fanbox.cc/\n\n♡BOOTH♡限定グッズをお届け♡\nhttps://usatama-amyu.booth.pm/\n\n♡TikTok♡\nhttps://www.tiktok.com/@usatamaamyu\n\n♡lit.link♡\nhttps://lit.link/usatamaamyu\n\n🐰タグ一覧💗\n\n♡総合　#兎彷魂あみゅ\n♡配信　#あみゅライブ\n♡FA　#あみゅ～じあむ\n♡FN　あみゅれっ兎\n♡FM　🤍🐰💗\n♡切り抜き　#あみゅミニライブ\n\n2023.06.02 デビュー\n2023.06.10 収益化＆メンバーシップ解禁\n2023.07.01 チャンネル登録1万人達成\n2023.09.26 チャンネル登録2万人達成\n2023.11.28 チャンネル登録3万人達成\n2024.02.13 チャンネル登録4万人達成",
  },
};

export const DEFAULT_CHANNEL = 'new';
export const COMBINED_CHANNEL = {
  id: 'all',
  label: '全期間',
};
export const SHOW_COMBINED_CHANNEL = false;
export const SHOW_AUDIENCE_SWITCH = true;
export const SHOW_SONG_KEYS = false;

export const ORIGINAL_GENRE_KEYWORDS = ['兎彷魂あみゅ', 'usatama amyu', 'あみゅ'];

export const LIST_GID = CHANNELS.new.listGid;
export const SETLIST_GID = CHANNELS.new.setlistGid;

export const TIMELINE_INITIAL = 12;
export const TIMELINE_STEP = 12;
export const RANKING_LIST_LIMIT = 50;
export const TOP_ARTISTS_LIMIT = 20;
export const ACTIVITY_RECENT_LIMIT = 5;

export const DAYS_FRESH = 30;
export const DAYS_STALE = 180;

export const SOURCE_URL = './songlist.csv';

export const gvizUrl = (gid) =>
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${gid}&_t=${Date.now()}`;
