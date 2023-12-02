export default {
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: "Syspre wiki",
        nav: [
            { text: "About", link: "/about" },
            { text: "Contact", link: "/contact" },
            { text: "Guide", link: "/guide" },
            { text: "Configs", link: "/configs" },
            {
                text: "Changelog",
                items: [
                    { text: "v0.0.1", link: "/item-1" },
                    { text: "v0.0.2", link: "/item-2" },
                    { text: "v0.0.3", link: "/item-3" },
                ],
            },],
        socialLinks: [
            { icon: "github", link: "https://github.com/Evavic44/adocs" },
            { icon: "twitter", link: "https://twitter.com/victorekea" },
            { icon: "discord", link: "..." },
        ],
        sidebar: [
            {
                text: 'vidéo',
                items: [
                    {
                        text: 'Caméra vidéo',
                        collapsed: true,
                        items: [
                            { text: 'Caméra Sony FS700', link: '/group1/page1.md' },
                            { text: 'Caméra Sony FDR53', link: '/group1/page2.md' },
                            { text: 'Caméra Sony FS5 MK II', link: '/group1/page2.md' },
                            { text: 'Caméra Sony EX1 R', link: '/group1/page2.md' },
                            { text: 'Caméra Insta 360', link: '/group1/page2.md' },
                            { text: 'Caméra Canon EOS C70', link: '/group1/page2.md' },
                            { text: 'KIT JRI PANASONIC UX 180', link: '/group1/page2.md' },
                        ],
                    },
                    {
                        text: 'Objectif vidéo',
                        collapsed: true,
                        items: [
                            { text: 'Série fixe Samyang_E', link: '/group1/page1.md' },
                            { text: 'Série fixe Samyang_EF', link: '/group1/page2.md' },
                            { text: 'Zoom Sony 28-135mm_E', link: '/group1/page2.md' },
                        ],
                    },
                    {
                        text: 'Accessoire Caméra',
                        collapsed: true,
                        items: [
                            {
                                text: 'Mattebox',
                                collapsed: true,
                                items: [
                                    { text: 'Série fixe Samyang_E', link: '/group1/page1.md' },
                                    { text: 'Série fixe Samyang_EF', link: '/group1/page2.md' },
                                    { text: 'Zoom Sony 28-135mm_E', link: '/group1/page2.md' },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Group 2',
                collapsed: true,
                items: [
                    { text: 'blub1', link: '/group2/page1.md' },
                    { text: 'blub2', link: '/group2/page2.md' },

                ],
            },
        ],
        footer: {
            message: "Leo Petermann - Jérémie Jaouen ",
            copyright: "Copyright © 2022-present ",
        },

    },


};