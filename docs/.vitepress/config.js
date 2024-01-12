import { withMermaid } from "vitepress-plugin-mermaid";


export default {
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: "Syspre wiki",
        base: "/materiel/",
        nav: [
            { text: "About", link: "/about" },

            // { text: "Contact", link: "/contact" },
            // { text: "Guide", link: "/guide" },
            // { text: "Configs", link: "/configs" },
        ],
        sidebar: [
            {
                text: 'vidéo',
                items: [
                    {
                        text: 'Caméra vidéo',
                        collapsed: true,
                        items: [
                            { text: 'Caméra Sony FS700', link: '/video/camera-video/FS700.md' },
                            { text: 'Caméra Sony FDR53', link: '/video/camera-video/FD53.md' },
                            { text: 'Caméra Sony FS5 MK II', link: '/video/camera-video/FS5.md' },
                            { text: 'Caméra Sony EX1 R', link: '/video/camera-video/EX1.md' },
                            { text: 'Caméra Insta 360', link: '//video/camera-video/INSTA360.md' },
                            { text: 'Caméra Canon EOS C70', link: '/video/camera-video/EOS-C70.md' },
                            { text: 'KIT JRI PANASONIC UX 180', link: '/video/camera-video/UX180.md' },
                        ],
                    },
                    {
                        text: 'Objectif vidéo',
                        collapsed: true,
                        items: [
                            { text: 'Série fixe Samyang_E', link: '/video/objectif-video/SAMYANG-E.md' },
                            { text: 'Série fixe Samyang_EF', link: '/video/objectif-video/SAMYANG-EF' },
                            { text: 'Zoom Sony 28-135mm_E', link: '/video/objectif-video/28-135MM.md' },
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
                                    { text: 'Mattebox Redrock', link: '/mattebox_redrock.md' },
                                    { text: 'Mattebox Chrosziel', link: '/mattebox_chrosziel.md' },
                                ],
                            },
                            {
                                text: 'Follow Focus',
                                collapsed: true,
                                items: [
                                    { text: 'Follow Focus Wooden Zip', link: '/follow_focus_wooden_zip.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Accessoire Optiques',
                        collapsed: true,
                        items: [
                            {
                                items: [
                                    { text: 'Adaptateur Metabone_EF > E', link: '/video/accessoire-optiques/METABONE.md' },
                                    { text: 'Adaptateur MTF_PL > E', link: '/video/accessoire-optiques/MTF_PL.md' },
                                    { text: 'Bagues Macro_EF', link: '/video/accessoire-optiques/BAGUE MACRO.md' },
                                    { text: 'Dioptrie Kit_077', link: '/video/accessoire-optiques/DIOPTRIE.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Moniteurs Vidéo',
                        collapsed: true,
                        items: [
                            {
                                items: [
                                    { text: 'Moniteur Shinobi 5', link: '/video/moniteurs-video/SHIBONI.md' },
                                    { text: 'Moniteur Small HD 5', link: '/video/moniteurs-video/SMALLHD.md' },
                                    { text: 'Moniteur Aputur 7', link: '/video/moniteurs-video/APUTUR.md' },
                                    { text: 'Moniteur DSLR', link: '/video/moniteurs-video/DSLR.md' },
                                    { text: 'Moniteur Marshall 5', link: '/video/moniteurs-video/MARSHALL.md' },
                                    { text: 'Moniteur HF', link: '/video/moniteurs-video/HF.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Recorders Externes',
                        collapsed: true,
                        items: [
                            {
                                items: [
                                    { text: 'Recorders Blackmagic', link: '/video/recorders-externes/BLACKMAGIC.md' },
                                    { text: 'Recorders Shogun 4K', link: '/video/recorders-externes/SHOGUN.md' },
                                    { text: 'Recorders Pix 240', link: '/video/recorders-externes/PIX.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Trépieds Vidéo',
                        collapsed: true,
                        items: [
                            {
                                items: [
                                    { text: 'Sachtler 4', link: '/sachtler_fs_4.md' },
                                    { text: 'Sachtler 6', link: '/sachtler_fs_6.md' },
                                    { text: 'Sachtler Ace', link: '/sachtler_ace.md' },
                                    { text: 'Smallrig Léger', link: '/smallrig_leger.md' },
                                    { text: 'Manfrotto Léger', link: '/manfrotto_leger.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Rigs et Cage Caméra',
                        collapsed: true,
                        items: [
                            {
                                items: [
                                    { text: 'Glidecam', link: '/glidecam.md' },
                                    { text: 'Poignée Caméra', link: '/poignee_camera.md' },
                                    { text: 'Rig épaule complet', link: '/rig_epaule_complet.md' },
                                    { text: 'Cage EOS-R', link: '/cage_eosr.md' },
                                    { text: 'Cage 70D-80D-90D', link: '/cage_70D_80D_90D.md' },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Eclairage',
                collapsed: false,
                items: [
                    {
                        text: 'Kinoflo',
                        collapsed: true,
                        items: [
                            {
                                items: [
                                    { text: 'Divalight Double 2', link: '/divalight_double_2.md' },
                                    { text: 'Divalight Single 2', link: '/divalight_single_2.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Lumière LED',
                        collapsed: true,
                        items: [
                            { text: 'LED Panels', link: '/led_panels.md' },
                            { text: 'LED Lens', link: '/led_lens.md' },
                            { text: 'LED Power', link: '/led_power.md' },
                            { text: 'LED Color', link: '/led_color.md' },
                            { text: 'LED Tubes / CCT et COLOR 360˚', link: '/led_tubes.md' },
                        ],
                    },
                    {
                        text: 'Softbox / Cadres',
                        collapsed: true,
                        items: [
                            { text: 'Circulaire', link: '/circulaire.md' },
                            { text: 'Rectangulaire', link: '/rectangulaire.md' },
                            { text: 'Carré', link: '/carre.md' },
                            { text: 'Cadre de diffusion', link: '/cadres_de_diffusion.md' },
                            { text: 'Accessoires Eclairages', link: '/accessoire_eclairage.md' },
                        ],
                    },
                ],
            },
            {
                text: 'Machinerie',
                collapsed: false,
                items: [

                    { text: 'Travelling', link: '/travelling.md' },
                    { text: 'Kit Top Shot', link: '/kit_topshot.md' },
                ],
            },
            {
                text: 'Audio',
                collapsed: false,
                items: [

                    { text: 'Enregistreurs', link: '/enregisteurs.md' },
                    {
                        text: 'Micros',
                        collapsed: true,
                        items: [
                            {
                                text: 'Micros Classiques',
                                collapsed: true,
                                items: [
                                    { text: 'Comparatif', link: '/micro_classique_comparatif.md' },
                                    { text: 'Cardio', link: '/cardio.md' },
                                    { text: 'Super-Cardio', link: '/super_cardio.md' },
                                    { text: 'Hyper Cardio', link: '/hyper_cardio.md' },
                                    { text: 'Beyer Dynamic M88', link: '/beyer_dynamic_88.md' },
                                    { text: 'Kit Zeppelin Cardio Rode', link: '/kit_zepplin_cardio_rode.md' },
                                ],
                            },
                            { text: 'Micros Omni / 360˚', link: '/micro_omni.md' },
                            { text: 'Micros USB', link: '/micro_usb.md' },
                            { text: 'Micros DSLR', link: '/micro_dslr.md' },
                            { text: 'Micros HF Sennheiser', link: '/micro_hf.md' },
                        ],
                    },
                    {
                        text: 'Perches Audio',
                        collapsed: true,
                        items: [
                            { text: 'Perche Rode', link: '/perche_rode.md' },
                            { text: 'Perche K-TEK Courte', link: '/perche_ktek_courte.md' },
                        ],
                    },
                    {
                        text: 'Accessoire Audio et Sono',
                        collapsed: true,
                        items: [
                            { text: 'Carte son Focusrite', link: '/focusrite.md' },
                            { text: 'Behringer X-Touch', link: '/behringer_x_touch.md' },
                            { text: 'Amplis Casque', link: '/ampli_casque.md' },
                        ],
                    },
                    {
                        text: 'Enceintes Mobiles',
                        collapsed: true,
                        items: [
                            { text: 'Rokit', link: '/rokit.md' },
                            { text: 'Adam', link: '/adam.md' },
                            { text: 'Boombox', link: '/boombox.md' },
                            { text: 'Mackie Sono', link: '/mackie_sono.md' },
                        ],
                    },
                ],
            },

        ],
    },

    footer: {
        message: "Leo Petermann - Jérémie Jaouen",
        copyright: "Copyright © 2022-present ",
    },
    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container 
    },

};


