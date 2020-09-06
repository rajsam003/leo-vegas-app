import ApiService from "../apiService";

export default class GamesMockService extends ApiService {
  constructor() {
    super();

    this.games = [
        {
            "language": "ca",
            "gameName": "Baccarat Punto Banco",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/16JBQAPyOXFzCwlforx42J/cc5c8c88149639c253c1f30aa2691d02/baccarat_punto_banco.jpg",
            "slug": "baccarat-punto-banco",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PuntoBanco?playMode=demo&amp;lang=en&amp;siteId=leovegas",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Wild Mantra",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6B84tnL1biHSgoVNg94QWt/1e33f33d0629d54fd016ca06be8bfb93/wild_mantra.jpg",
            "slug": "wild-mantra",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7363&lang=en&currency=EUR&org=leovegas&key=&channel=pc&skin=leovegas",
            "categories": [
                "slots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Pirates Plenty - The Sunken Treasure",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/7dYACT6C2qU6jThmU9zJDO/e11d81496852da0ee3252857e9b5cb48/PiratesPlenty_gameimages_426x324_D12874_KK.jpg",
            "slug": "pirates-plenty",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PiratesPlenty?playMode=demo&lang=en",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PiratesPlenty?playMode=demo&depositUrl=false&lobbyURL=false",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Hot 4 Cash",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/0vBFUaFXCEc3T9zjyGP7n/b7f0d1e9f7bc8ba250b3c6bf67f0370f/image.png",
            "slug": "hot-4-cash",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.nlc.nlc.Hot4Cash&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.nlc.nlc.Hot4Cash&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Mega Fortune Dreams",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6XRTcGH8aw1vL7S2bNbgZ9/c93bf6411cefd795fe5426beb1579c22/image.png",
            "slug": "mega-fortune-dreams",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=megafortunedreams_not_mobile_sw&sessionId=DEMO-074f75a97eec446c9c7e3546bfe0ce0a-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=megafortunedreams_mobile_html&sessionId=DEMO-19679404b86b4cdabfb3d19bf70fe7c4-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Power of Gods: The Pantheon",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1gJusG7U8AIrqyuf9RHBHm/cb2c5b2179db1314410877ad204fb77c/PowerofGods_gameimages_426x324_D27416_EN.jpg",
            "slug": "power-of-gods",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.336&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.336&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "favourites"
            ]
        },
        {
            "language": "ca",
            "gameName": "Relax Roulette",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3rDJkbt9rztYzRzp5bFqIB/84000575d2af341655ae817dee46dbeb/relax_roulette.jpg",
            "slug": "relax-roulette",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=roulettenouveau&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=roulettenouveau&partner=leovegas&partnerid=13&channel=mobile&moneymode=fun&lang=en_US",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Wolf Gold",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3h9ZzlLlC0saNC0wYpzvZ8/8a57651bfee6a58520b3179f442ef256/wolf_gold.png",
            "slug": "wolf-gold",
            "gamePreviewUrl": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs25wolfgold&amp;cur=EUR&amp;lang=en&amp;lobbyUrl=https://www.leovegas.com&amp;stylename=lvg_leovegas",
            "categories": [
                "newest"
            ]
        },
        {
            "language": "ca",
            "gameName": "Hall of Mountain King",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3z1qgh3zJx1Xk4eV5ljV2v/0d4113772dc669f50ccfb9d8305291a7/hall_of_mountain_king.jpg",
            "slug": "hall-of-mountain-king",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=mountainking&partner=leovegas&partnerid=13&moneymode=fun&lang=en_US&channel=web",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=mountainking&partner=leovegas&partnerid=13&moneymode=fun&lang=en_US&channel=mobile&fullscreen=false",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Deco Diamonds Deluxe",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/dVasI6SH4TeFjyDLc0GUZ/df9d22f31e298531d1b987e0a2619341/DecoDiamondsDeluxe_JustForTheWin_gameimages_426x324_D27945_EC.jpg",
            "slug": "deco-diamonds-deluxe",
            "gamePreviewUrl": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=decoDiamondsDeluxeDesktop&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "gamePreviewUrlMobile": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=decoDiamondsDeluxe&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "categories": [
                "jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Mega Fortune",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/kMZu7lqveMZXTdYNqUdoH/063eeb16f44eb5ca3d8b82ac43cbe92c/image.png",
            "slug": "mega-fortune",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=megafortune_not_mobile_sw&sessionId=DEMO-48f4ae3e78004f04ad921fdfcc639246-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=megafortune_mobile_html&sessionId=DEMO-3fc596245d764e5b86c14a901ee244ea-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Let's Get Ready To Rumble",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1uyY7ET06mmklsFkwMoMA4/e4c68da3cfc57c7f7ef9d2f36919a8f4/image.png",
            "slug": "lets-get-ready-to-rumble",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rumble&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rumble&partner=leovegas&partnerid=13&channel=mobile&moneymode=fun&lang=en_US",
            "categories": [
                "slots",
                "instant win"
            ]
        },
        {
            "language": "ca",
            "gameName": "Joker Millions",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/7jAcgVEoJ1FhExkTmvkTlC/769305c5d9d230ba26e10e0367c09515/image.png",
            "slug": "joker-millions",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7312&lang=en&currency=EUR&org=leovegas&key=&channel=pc&skin=leovegas",
            "gamePreviewUrlMobile": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7312&lang=en&currency=EUR&org=leovegas&key=&channel=mobile&skin=leovegas&home=https://www.leovegas.com",
            "categories": [
                "table games",
                "instant win"
            ]
        },
        {
            "language": "ca",
            "gameName": "Major Millions",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1LR8L0WNLhxsxfeI9OUIQu/c6b316e1d90894edce8f42f0fa2b1093/image.png",
            "slug": "major-millions",
            "gamePreviewUrl": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=majorMillionsDesktop&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "gamePreviewUrlMobile": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=majorMillions&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "categories": [
                "slots",
                "instant win"
            ]
        },
        {
            "language": "ca",
            "gameName": "Reactoonz",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5rxYmmCtE1uBei4TlP5Aw7/718fdd9573b1e7734b6507a21c5df8ac/reactoonz.jpg",
            "slug": "reactoonz",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=reactoonz&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/reactoonz&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=reactoonzmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/reactoonz&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "table games",
                "instant win"
            ]
        },
        {
            "language": "ca",
            "gameName": "Pirates' Plenty Battle for Gold",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/YhEsZ5qzM58tWwgO9HpCB/43397d45e19506dbd7d050b0480f140d/image.png",
            "slug": "pirates-plenty-battle-for-gold",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PiratesPlentyBattleForGold?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PiratesPlentyBattleForGold?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "jackpots",
                "instant win"
            ]
        },
        {
            "language": "ca",
            "gameName": "Sakura Fortune",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/75RcIahVJd1xfV6Cx9KqCT/afb1e333ca5e0b595e2217691a7455dd/sakura_fortune.jpg",
            "slug": "sakura-fortune",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=sakurafortune&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=sakurafortune&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "instant win",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Book of Dead",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/LQwKAQTBvefqPxAKFxksq/cbee8eb6117ebd0ac50a2140d867d4f0/aAqkfrWVLlvZ3__2_.jpg",
            "slug": "book-of-dead",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=bookofdead&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/book-of-dead&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://cmtcw.playngonetwork.com/Casino/ContainerLauncher?pid=115&gid=bookofdeadmobile&gameId=310&lang=en_US&practice=1&channel=mobile&div=pngCasinoGame&width=100%&height=100%",
            "categories": [
                "slots",
                "instant win",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Pixies VS Pirates",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/251OTKtvzx2GKSR5SusGXq/8012d21b5a577595154261504d1aa682/image.png",
            "slug": "pixies-vs-pirates",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.nlc.nlc.PixiesVsPirates&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.nlc.nlc.PixiesVsPirates&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "instant win",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Butteryfly Staxx 2",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5FLPKdek5IhdqQzCU25TG6/ca4dbf9c8784b0dae6fd4516abba44b6/image.png",
            "slug": "butterfly-staxx-2",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=butterflystaxx2_not_mobile_sw&sessionId=DEMO-93f827498d3e4183a2b28638bd2a0158-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=butterflystaxx2_mobile_html_sw&sessionId=DEMO-e97179ed05694b64aad692555567cac6-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "slots",
                "instant win",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Money Train",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/kIlgYnnTtLS3rjJAWHXif/ef21082180a7e591c67fad218e1a570d/image.png",
            "slug": "money-train",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=moneytrain&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=moneytrain&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "God of Wild Sea",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1hEuI8OXetdodvcPOFUW3L/19afbfbd336d7807dff4a5316e151611/image.png",
            "slug": "god-of-wild-sea",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.playson.playson.god_of_sea&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.playson.playson.god_of_sea&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "jackpots",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Sticky Bandits: Wild Return",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/7lTZD3nylwxRry9aoo1ZjF/9c3993134daf3165946795244ba8880e/image.png",
            "slug": "sticky-bandits-wild-return",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=wildreturn&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=wildreturn&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Lion Dance",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5BvqQJVW3gCoTnK6dp0pDY/76fd0ec55f564188f52d0c647de0bf8e/image.png",
            "slug": "lion-dance",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/LionDance?playMode=demo&lang=en&siteId=leovegas    ",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/LionDance?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "slots",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Gems Gone Wild",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4D4yZbIwmFvLFGafo7VFBo/611b2e4934147e56a761253155e85be3/image.png",
            "slug": "gems-gone-wild",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/GemsGoneWild?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/GemsGoneWild?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Hot Spin",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6BP4qaHNu4m6o5KwrA4uS0/fee5cc22024b8f1eca413d16cc21ba19/hot_spin.jpg",
            "slug": "hot-spin",
            "gamePreviewUrl": "https://game-launcher-lux.isoftbet.com/51/904620?background=0&lang=en&cur=EUR&mode=0&allowfullscreen=false",
            "categories": [
                "favourites",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Dragons Luck",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/22F5P1UIt9I7cDmoyKtuij/fc59a74e852c54b8fd8d2afbd23d7275/dragons_luck.jpg",
            "slug": "dragons-luck",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/DragonsLuck?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/DragonsLuck?playMode=demo&lang=en&depositUrl=false&lobbyURL=false",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Golden Offer",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/stywFVnkZkruAw0G7b4mX/082dcebeb85fd25db11543de1558df93/image.png",
            "slug": "golden-offer",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/GoldenOffer?playMode=demo&lang=en&siteId=leovegas\n",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/GoldenOffer?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "jackpots",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Wild Nords",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1HPTf6cmvqanLyfz9iPeEz/ea7a71e234656de4703f0430b3d47816/image.png",
            "slug": "wild-nords",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/WildNords?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/WildNords?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Sweet Bonanza",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/38sxISMXh5Pim10Kbhu77h/5d9511f05e8fcc4192afec4d401251c8/image.png",
            "slug": "sweet-bonanza",
            "gamePreviewUrl": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitsw&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "gamePreviewUrlMobile": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitsw&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "categories": [
                "slots",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Mustang Gold",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/s4aHEDAsN5590dzkUtGg8/02118d59d58d1eefd4b85afd3a59e7dc/image.png",
            "slug": "mustang-gold",
            "gamePreviewUrl": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs25mustang&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "gamePreviewUrlMobile": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs25mustang&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Fire Joker",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5HoA8bLrqL0toFFljTmLnZ/2d2d79829cc3760ca684b674beff00b7/image.png",
            "slug": "fire-joker",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=firejoker&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/fire-joker&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=firejokermobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/fire-joker&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "slots",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Dragon's Fire",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/7yotuRZnAi7ekitrQVEh06/8fd90a454686f4ae304a37e27cc39762/image.png",
            "slug": "dragons-fire",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/DragonsFire?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/DragonsFire?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Vikings Go Berzerk",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/ZDKWdxBOQg6ngwgEWb4he/33bdbac4f229662cc336579bc0d4d4e4/image.png",
            "slug": "vikings-go-berzerk",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7331&lang=en&currency=EUR&org=leovegas&key=&channel=pc&skin=leovegas",
            "gamePreviewUrlMobile": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7331&lang=en&currency=EUR&org=leovegas&key=&channel=mobile&skin=leovegas&home=https://www.leovegas.com",
            "categories": [
                "jackpots",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Starburst",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/42XVdXZRIX2RQxIWeVAN7e/b859c8653756e34a26ba5017ebb69958/starburst.jpg",
            "slug": "starburst",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=starburst_not_mobile_sw&sessionId=DEMO-cc2e22c3a3894e0e93fee9696116171f-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=starburst_mobile_html_sw&sessionId=DEMO-2c593f493fb34fa2818d04d4e10a47d0-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "It's Time!",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4pJgTSJtfrDrBldpe4V2uW/646ae35d96fdd7394a59f9650f5b64cf/image.png",
            "slug": "its-time",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=itstime&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=itstime&partner=leovegas&partnerid=13&channel=mobile&moneymode=fun&lang=en_US",
            "categories": [
                "favourites",
                "Daily Jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Narcos",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6crFC6nwJudF78RxTsoQQl/61c9025bdfcee5d40b9b9cc55c2241b8/narcos_gameimages_426x324_D18891_KK.jpg",
            "slug": "narcos",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=narcos_not_mobile_sw&sessionId=DEMO-e79b6e9bf5d846658e60d7d9b4e5d7d4-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=narcos_mobile_html_sw&sessionId=DEMO-376aea1c20284827b18a65ff9a31f4c4-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games",
                "Daily Jackpots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Wild Wild Chest",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6uGW2nwecfqkBW3aqUTax2/82430ea20c4e872ec88940274170cbdc/image.png",
            "slug": "wild-wild-west",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/WildWildChest?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/WildWildChest?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "slots",
                "Daily Jackpots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Hot 777 Deluxe",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4F2KHGa0PuMlP0U0mLZ2eJ/e33884c67370958fec7c44f5599649f7/image.png",
            "slug": "hot-777-deluxe",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.357&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.357&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "Daily Jackpots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Yokozuna Clash",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/2ExmHTkpyJmdS6arvzREjR/01d2e6954d0cadd47aba6351abf19a27/image.png",
            "slug": "yokozuna-clash",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7370&lang=en&currency=EUR&org=leovegas&key=&channel=pc&skin=leovegas",
            "gamePreviewUrlMobile": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7370&lang=en&currency=EUR&org=leovegas&key=&channel=mobile&skin=leovegas&home=https://www.leovegas.com",
            "categories": [
                "jackpots",
                "Daily Jackpots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Dragons Lucky 8",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/2pP8DnAGyoHDG499xnwbKn/b488197a2bfbfba82fff5a35b44382b6/image.png",
            "slug": "dragons-lucky-8",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.371&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.371&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Vampires vs Wolves",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5IEZxYrWkOAbVqKxrs0xAE/5bf5d12a1c4f346b65216f64903503d5/image.png",
            "slug": "vampires-vs-wolves",
            "gamePreviewUrl": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10vampwolf&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "gamePreviewUrlMobile": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10vampwolf&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "categories": [
                "slots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Break Away Deluxe",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5jBIrF4qGpVu3bUbSqRFzA/3e0d8a7c688e9070a9fed64d041142e5/BreakAwayDeluxe_gameimages_426x324__jiraID_initials_.jpg",
            "slug": "break-away-deluxe",
            "gamePreviewUrl": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=breakAwayDeluxeDesktop&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "gamePreviewUrlMobile": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=breakAwayDeluxe&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "categories": [
                "table games",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Planet of the Apes",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4qPkAlxhCxnuVtRQOvviwn/12ecb10e3513ab0131b0f315c8e3e50b/PlanetApes.jpg",
            "slug": "planet-of-the-apes",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=pota_not_mobile_sw&sessionId=DEMO-dc18f19aec04484f9b68f80ba1b4781c-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=pota_mobile_html_sw&sessionId=DEMO-2e1e65bdc2984e2693475f4e3835e9c3-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "slots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Finn and the Swirly Spin",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3O9K9CQNZYCw881zwQNt0m/5f0f3db6ea1454a33de9a58388129089/Finn.jpg",
            "slug": "finn-and-the-swirly-spin",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=finn_not_mobile_sw&sessionId=DEMO-752d51e271c0491eb7d6b47fa0cb98c5-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=finn_mobile_html_sw&sessionId=DEMO-826cbb66972d45f29485594f0cb2bf41-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Swipe and Roll",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/62XgdrjZjWMGfmciwwXnBT/d6fa4eda1532248bc262ffd96bb191d5/Swipe.jpg",
            "slug": "swipe-and-roll",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=swipe_not_mobile_sw&sessionId=DEMO-e5d6aacf9508476fb5444c6345b8874f-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=swipe_mobile_html_sw&sessionId=DEMO-26a1efe55d7c4ff496db09972e5454e9-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "jackpots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Reel Heist",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/cElLaTDkxDoMvoeFtm1xZ/6848883edd48e4c1a1fcdd2c50fcec80/Reel.jpg",
            "slug": "reel-heist",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/ReelHeist?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/ReelHeist?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "table games",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Jurassic World",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5E908RS3NTZ7jYrCtnKW3t/7166c133fb428f0f4948a3ef97dff182/Jurassic.jpg",
            "slug": "jurassic-world",
            "gamePreviewUrl": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=jurassicWorldDesktop&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "gamePreviewUrlMobile": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=jurassicWorld&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "categories": [
                "slots",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Puss'n Boots",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/JVXMPsfMJk3PWHlk0Tlum/042c17b970fbd7dfc45c7aabbbb16647/Puss.jpg",
            "slug": "puss-n-boots",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PussNBoots?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/PussNBoots?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "table games",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Sabaton",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3KafCCTaGBRRPitbfs6xIM/61331afa93ce71483430b478d2e971eb/Sabaton_PlayNGo_gameimages_426x324_D17885_EC.jpg",
            "slug": "sabaton",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=sabaton&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/sabaton&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default&demo=2",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=sabatonmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/sabaton&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&demo=2&origin=https://www.leovegas.com",
            "categories": [
                "newest",
                "top games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Dead or Alive II",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/655LLYCWomE0SnrG5AFzY6/552532dfa1a684a50bed551b4826b4cc/DeadOrAlive2_gameimages_426x324_D17731_GPB_042019.jpg",
            "slug": "dead-or-alive-2",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=deadoralive2_not_mobile_sw&sessionId=DEMO-e2702e06272c47d7819ab3606e7e76d8-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=deadoralive2_mobile_html_sw&sessionId=DEMO-e274d64cb71a4cffa01f8aab6084bbaf-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Fortune Charm",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3U0senKBEtXuknmjFPi8ta/8e1a0333d18a3bf3f664daa8b8869df4/image.png",
            "slug": "fortune-charm",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/FortuneCharm?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/FortuneCharm?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Lucky Valentine",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6xJRTnDOrVHspp0jlJpa3E/e589b18ac3be341febed6697fe103e4f/image.png",
            "slug": "lucky-valentine",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/LuckyValentine?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/LuckyValentine?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Relax Blackjack",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3Ww2e8DRpK2vSzedOZ0Xw0/a6f7c12e61979f2fdb9a5d89e8d3b66f/relax_blackjack.jpg",
            "slug": "relax-blackjack",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=blackjackneo&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=blackjackneo&partner=leovegas&partnerid=13&channel=mobile&moneymode=fun&lang=en_US&fullscreen=false",
            "categories": [
                "slots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Temple Tumble",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/66o7YnuFx4Ki2tNsXYnch3/6c0f5043185f379913fe995a494004ef/TempleTumble_gameimages_426x324_D12668_KK_012019.jpg",
            "slug": "temple-tumble",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=templetumble&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=templetumble&partner=leovegas&partnerid=13&channel=mobile&moneymode=fun&lang=en_US",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Reactor",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1Qm7joQIcW9rj6JxXliw2X/d1751d2e8b97f33394118e7db75c42cd/426x324-Reactor-Red-Tiger-Gaming.jpg",
            "slug": "reactor",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/Reactor?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/Reactor?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "favourites"
            ]
        },
        {
            "language": "ca",
            "gameName": "Banana Rock",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4LcFP6CFVCmStfBgvMJatl/415253322eb7aafdc7dcf58547fff0fb/426x324.jpg",
            "slug": "banana-rock",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=bananarock&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/banana-rock&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default&demo=2",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=bananarockmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/banana-rock&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&demo=2&origin=https://www.leovegas.com",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Pirates: Smugglers Paradise",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/70elle2A4fgtuLAbkZbM8Y/4b349b37f73ef2d32dc7d8a8d98350ac/426x324__1_.jpg",
            "slug": "pirates-smugglers-paradise",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=8304&lang=en&currency=EUR&org=leovegas&key=&channel=pc&skin=leovegas",
            "gamePreviewUrlMobile": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=8304&lang=en&currency=EUR&org=leovegas&key=&channel=mobile&skin=leovegas&home=https://www.leovegas.com",
            "categories": [
                "jackpots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Riches of Ra",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/2cN69Hi6orjYebI7S37rku/01e34ca426ab4e149f3f1bbb5c8410b6/image.png",
            "slug": "riches-of-ra",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=richesofra&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/riches-of-ra&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=richesoframobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/riches-of-ra&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Tiki Fruits",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/42n3rUhIULbRXgQtE7Fna0/2dcd5a71d380f9d2a98f50fd9b2a309b/image.png",
            "slug": "tiki-fruits",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/TikiFruits?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/TikiFruits?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "slots"
            ]
        },
        {
            "language": "ca",
            "gameName": "Golden Fishtank",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/24OyAPvu174p7yk53ZA1L/e4a00448429adec02a40a9e84cdf6375/golden_fishtank.jpg",
            "slug": "golden-fishtank",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7322&lang=en&currency=EUR&org=leovegas&key=&channel=web&skin=leovegas",
            "categories": [
                "table games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Reel King Mega",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4ikXVBmoQhmGXVgsi2wDXZ/512e03b03828752c59f3027792d93510/image.png",
            "slug": "reel-king-mega",
            "gamePreviewUrl": "https://gserver-leovegas.tgp.cash/leovegas/launcher/ReelKingMega?playMode=demo&lang=en&siteId=leovegas",
            "gamePreviewUrlMobile": "https://gserver-leovegas.tgp.cash/leovegas/launcher/ReelKingMega?playMode=demo&depositUrl=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&lang=en&siteId=leovegas",
            "categories": [
                "slots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "The Great Chicken Escape",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/7i2pJV73dpU2N4gDDJFYu8/09028a10c18f9338ecc609cf4b981312/image.png",
            "slug": "the-great-chicken-escape",
            "gamePreviewUrl": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20chicken&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "gamePreviewUrlMobile": "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20chicken&cur=EUR&lang=en&lobbyUrl=https://www.leovegas.com&stylename=lvg_leovegas",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Space Gem",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3M0Hap52xZ8riCmB38nMj3/85edf3684f3463f614f54dcc35a41eea/image.png",
            "slug": "space-gem",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.366&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.wazdan.wazdan.366&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "jackpots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Turn Your Fortune",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4aDJVEVsjqIlnbaaQbrN2N/fee5709e8adbfd0e1df640fb0f587096/426x324__5_.jpg",
            "slug": "turn-your-fortune",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=turnyourfortune_not_mobile_sw&sessionId=DEMO-e7957ff54f2244619549709b260b3805-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=turnyourfortune_mobile_html_sw&sessionId=DEMO-6667f05357694424ade941e19c5d553f-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Nitro Circus",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3hq5y1YsxazlGbksgCNq8g/ea29adb051af00065d4f5146c932b48d/426x324__4_.jpg",
            "slug": "nitro-circus",
            "gamePreviewUrl": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7355&lang=en&currency=EUR&org=leovegas&key=&channel=pc&skin=leovegas",
            "gamePreviewUrlMobile": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7355&lang=en&currency=EUR&org=leovegas&key=&channel=mobile&skin=leovegas&home=https://www.leovegas.com",
            "categories": [
                "favourites",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Dalai Panda",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/7m0eehvD36hOvnHlFM3lsT/4e26587c4c375dd9dcef3bc5e40bf195/426x324__6_.jpg",
            "slug": "dalai-panda",
            "gamePreviewUrl": "https://game-launcher-lux.isoftbet.com/51/906004?background=0&lang=en&cur=EUR&mode=0",
            "gamePreviewUrlMobile": "https://game-launcher-lux.isoftbet.com/51/906004?background=0&lang=en&cur=EUR&mode=0&lobbyURL=https://www.leovegas.com&allowFullScreen=false",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Viking Fortune: Hold and Win",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/unHSWSRs1UdYWEfWEXwMF/73b96c79a20288614e1c422f7e43963c/image.png",
            "slug": "viking-fortune-hold-and-win",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.playson.playson.vikings_fortune&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=rlx.playson.playson.vikings_fortune&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "slots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Lucha Legends",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/3hQtOTujWBXcpKElazMk41/12ff28cdd51bae6d8b7ec6181d5fbe66/426x324__3_.jpg",
            "slug": "lucha-legends",
            "gamePreviewUrl": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=luchaLegendsDesktop&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "gamePreviewUrlMobile": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&serverid=16676&gameid=luchaLegends&ul=en&bankingURL=https://www.leovegas.com/account/deposit&lobbyURL=https://www.leovegas.com&playmode=demo",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Jumanji",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/4vpZHkDLf3QYX7yCAhttTc/291a5367ab83f576e34d6421aae41102/Jumanji-426x324.jpg",
            "slug": "jumanji",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=jumanji_not_mobile_sw&sessionId=DEMO-6a8d99a5858e4296803e52dad11f5d5f-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=jumanji_mobile_html_sw&sessionId=DEMO-88ca79fddc704587b988653a8b844790-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "jackpots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Ivan and the Immortal King",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/2kec1bKHSdDkx3cepshWwz/2600e6d1c048b6576514b20f97f6eed7/426x324__2_.jpg",
            "slug": "ivan-and-the-immortal-king",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=ivan&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=ivan&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Enchanted Crystals",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/5S2akMan2cjmg6McSiaQi1/5335b28c2fd65573e81bfa21b3a98441/image.png",
            "slug": "enchanted-crystals",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=enchantedcrystals&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/enchanted-crystals&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=enchantedcrystalsmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/enchanted-crystals&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com  ",
            "categories": [
                "slots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Dragon Ship",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/UZE0iLnnYj4VJr3FRfjWK/ac43dba6cc1f0f712e0f8f90c9f62c9b/image.png",
            "slug": "dragon-ship",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=dragonship&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/dragon-ship&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=dragonshipmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/dragon-ship&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Ninja Fruits",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1GRrECOI1tt1AZVcAPFZxV/c7a0cb67acdfc34b1c2a043a18755d48/image.png",
            "slug": "ninja-fruits",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=ninjafruits&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/ninja-fruits&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=ninjafruitsmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/ninja-fruits&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "slots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Baccarat Pro",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/LJhBqqK7rSzwrM7uFwRVZ/e7202d3db303161e927c98e77b1acd14/image.png",
            "slug": "baccarat-pro",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=baccarat2_sw&sessionId=DEMO-5d7e186a591f4a15a366c62e0a2e5efd-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=baccarat2_sw&sessionId=DEMO-5d7e186a591f4a15a366c62e0a2e5efd-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Multihand Blackjack",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6gQGfNIgrSywN5EA228d1/6502a2e98e317f0c5f5f5b301d46fede/image.png",
            "slug": "multihand-blackjack",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=blackjackmh&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/multihand-blackjack&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=blackjackmhmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/multihand-blackjack&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "jackpots",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Caribeean Stud",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/1A1j0zlMq3aTa7fG5cNHSa/bd1c35b6618fcf29f54e9e8be52e0be0/image.png",
            "slug": "caribbean-stud",
            "gamePreviewUrl": "https://www.leovegas.com/iframe/launch?gameId=cstud2_sw&sessionId=DEMO-23f84d29165f4f9c9014d17bd0e30821-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "gamePreviewUrlMobile": "https://www.leovegas.com/iframe/launch?gameId=cstud2_sw&sessionId=DEMO-23f84d29165f4f9c9014d17bd0e30821-FUN&staticServer=https://leovegas-static.casinomodule.com&gameServer=https://leovegas-game.casinomodule.com&language=en&currency=FUN&showMiniLobby=true",
            "categories": [
                "table games",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "3 card Hold'em",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/ABdfLvjA7IuFDVIRIH7up/bc882311e1fa0dba2cd450621ca30b8e/image.png",
            "slug": "3-card-holdem",
            "gamePreviewUrl": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=holdem3&partner=leovegas&partnerid=13&channel=web&moneymode=fun&lang=en_US",
            "gamePreviewUrlMobile": "https://d1k6j4zyghhevb.cloudfront.net/casino/launcher.html?gameid=holdem3&partner=leovegas&partnerid=13&homeurl=https://www.leovegas.com&channel=mobile&fullscreen=false&moneymode=fun&lang=en_US",
            "categories": [
                "newest",
                "exciting games"
            ]
        },
        {
            "language": "ca",
            "gameName": "Rise of Dead",
            "gameThumbnail": "images.ctfassets.net/327a1qzqf7bd/6b9gaZ54VzBkmZz5kVkT8m/4bbae121167186ecc8a698dc20cbf1d0/image.png",
            "slug": "rise-of-dead",
            "gamePreviewUrl": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=riseofdead&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/rise-of-dead&channel=desktop&div=gameWrapper&embedmode=iframe&ctx=default",
            "gamePreviewUrlMobile": "https://leovegas-cw.playngonetwork.com/Casino/ContainerLauncher?practice=1&pid=115&gid=riseofdeadmobile&lang=en_GB&lobby=https%3A%2F%2Fwww.leovegas.com&reloadgame=https%3A%2F%2Fwww.leovegas.com/game/rise-of-dead&channel=mobile&div=gameWrapper&embedmode=iframe&ctx=default&origin=https://www.leovegas.com",
            "categories": [
                "table games",
                "exciting games"
            ]
        }
    ]
  }

  getGames() {
    return Promise.resolve(this.games);
  }
}
