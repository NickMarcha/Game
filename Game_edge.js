/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Game',
                            symbolName: 'Game',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Start_Menu',
                            symbolName: 'Start_Menu',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'Start_Page',
                            symbolName: 'Start_Page',
                            type: 'rect',
                            rect: ['2px', '-2px', '1920', '1080', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1920px', '1080px'],
                            overflow: 'hidden',
                            fill: ["rgba(194,183,195,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 370,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Start_Page}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid2",
                            "-webkit-transform-origin",
                            370,
                            0,
                            "linear",
                            "${Start_Menu}",
                            [52,50],
                            [52,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid140",
                            "-moz-transform-origin",
                            370,
                            0,
                            "linear",
                            "${Start_Menu}",
                            [52,50],
                            [52,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid141",
                            "-ms-transform-origin",
                            370,
                            0,
                            "linear",
                            "${Start_Menu}",
                            [52,50],
                            [52,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid142",
                            "msTransformOrigin",
                            370,
                            0,
                            "linear",
                            "${Start_Menu}",
                            [52,50],
                            [52,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid143",
                            "-o-transform-origin",
                            370,
                            0,
                            "linear",
                            "${Start_Menu}",
                            [52,50],
                            [52,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid144",
                            "transform-origin",
                            370,
                            0,
                            "linear",
                            "${Start_Menu}",
                            [52,50],
                            [52,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Start_Page}",
                            '2px',
                            '2px'
                        ]
                    ]
                }
            },
            "Start_Menu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Start_Menu',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(165,141,175,1)'],
                            c: [
                            {
                                rect: ['732px', '312px', '455px', '127px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                type: 'rect',
                                id: 'New_Game',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(90,57,104,1.00)'],
                                c: [
                                {
                                    rect: ['43px', '31px', '370px', '66px', 'auto', 'auto'],
                                    id: 'New_Game_Text',
                                    text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 65px; font-family: Georgia, \'Times New Roman\', Times, serif; text-transform: uppercase; color: rgb(27, 27, 27);\">New Game</span></p>',
                                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['732px', '463px', '455px', '127px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                type: 'rect',
                                id: 'Load_Game',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(90,57,104,1.00)'],
                                c: [
                                {
                                    rect: ['28px', '30px', '400px', '66px', 'auto', 'auto'],
                                    id: 'Load_Game_Text',
                                    text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 65px; font-family: Georgia, \'Times New Roman\', Times, serif; text-transform: uppercase; color: rgb(27, 27, 27);\">Load Game</span></p>',
                                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['732px', '614px', '455px', '127px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                type: 'rect',
                                id: 'Settings',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(90,57,104,1.00)'],
                                c: [
                                {
                                    rect: ['28px', '30px', '400px', '66px', 'auto', 'auto'],
                                    id: 'Settings_Text',
                                    text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 65px; font-family: Georgia, \'Times New Roman\', Times, serif; text-transform: uppercase; color: rgb(27, 27, 27);\">Settings</span></p>',
                                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                    type: 'text'
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Start_Page": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Start_Page',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(165,141,175,1.00)'],
                            c: [
                            {
                                rect: ['602px', '376px', '716px', '329px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                type: 'rect',
                                id: 'Start_Button',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(90,57,104,1.00)'],
                                c: [
                                {
                                    rect: ['173px', '87px', '370px', '152px', 'auto', 'auto'],
                                    id: 'Start_Button_Text',
                                    text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 136px; font-family: Georgia, \'Times New Roman\', Times, serif; text-transform: uppercase; color: rgb(27, 27, 27);\">PLAY</span></p>',
                                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                    type: 'text'
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Game": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Game',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(90,57,104,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Game_edgeActions.js");
})("EDGE-340884769");
