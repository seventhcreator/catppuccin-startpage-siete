// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Medellin",
    scale: "C",
    // Optional OpenWeatherMap API key, get a free one at https://openweathermap.org/api
    // Leave empty to keep the placeholder and skip the network request
    appId: "9dce73091edad7f33b38674874badf5b",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "SYD",
      timezone: "Australia/Sydney",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "p",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "SVN7I",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "lobby",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.sapphire,
            },
            {
              name: "ambient",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
             {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "google",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "bypass",
              url: "https://archive.ph/",
              icon: "border-radius",
              icon_color: palette.green,
            },
            {
              name: "economist",
              url: "https://www.economist.com/",
              icon: "news",
              icon_color: palette.sky,
            },
            {
              name: "eventos mundiales",
              url: "https://en.wikipedia.org/wiki/Portal:Current_events",
              icon: "brand-wikipedia",
              icon_color: palette.rosewater,
            },
            {
              name: "luna",
              url: "https://mooncalendar.astro-seek.com/",
              icon: "moon",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "pirata",
      background_url: "src/img/banners/banner_11.gif",
      categories: [
        {
          name: "repacks",
          links: [
            {
              name: "fitgirl",
              url: "https://fitgirl-repacks.site/",
              icon: "gender-female",
              icon_color: palette.green,
            },
            {
              name: "dodi",
              url: "https://dodi-repacks.site/",
              icon: "pacman",
              icon_color: palette.lavender,
            },
            {
              name: "nexus",
              url: "https://www.nexusmods.com/",
              icon: "pacman",
              icon_color: palette.lavender,
            }, 
          ],
        },
        {
          name: "recursos",
          links: [
              {
              name: "r/piratedgames",
              url: "https://www.reddit.com/r/PiratedGames/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "cs.rin.ru",
              url: "https://cs.rin.ru/forum/viewforum.php?f=10",
              icon: "ghost-3",
              icon_color: palette.sky,
            },
            {
              name: "unknowncheeks",
              url: "https://www.unknowncheats.me/forum/index.php",
              icon: "ufo",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "tiendas",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com/?l=spanish",
              icon: "brand-steam",
              icon_color: palette.sapphire,
            },
            {
              name: "instant",
              url: "https://www.instant-gaming.com/en/",
              icon: "device-gamepad-2",
              icon_color: palette.peach,
            },
            {
              name: "loaded",
              url: "https://www.loaded.com/",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "allkeyshop",
              url: "https://www.allkeyshop.com/blog/",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "media",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "platforms",
          links: [
            {
              name: "netflix",
              url: "https://www.netflix.com/co-en/",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
            {
              name: "crunchy",
              url: "https://www.crunchyroll.com/discover",
              icon: "meat",
              icon_color: palette.mauve,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
