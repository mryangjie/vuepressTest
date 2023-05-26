module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    base: '/vuepress-doc/',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'keywords',
                content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
            },
        ],
        ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
    ],
    themeConfig: {
        logo: '/logo.png',
        sidebarDepth: 1, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上, 默认1 提取到h2
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [
            {
                text: '前端',
                items: [
                    {
                        text: '常用命令',
                        items: [
                            { text: 'Typora', link: '/Web/Command/Typora' },
                            { text: '其他', link: '/Web/Command/other' },
                        ],
                    },
                    {
                        text: '学习记录',
                        items: [
                            { text: '《Css》', link: '/Web/Css/01' },
                            { text: '《Javascript》', link: '/Web/Javascript/01' },
                            { text: '《Vue》', link: '/Web/Javascript/01' },
                            { text: '《React》', link: '/Web/Javascript/01' },
                            { text: '《Weex》', link: '/Web/Javascript/01' },
                            { text: '《ReactNative》', link: '/Web/Javascript/01' },
                            { text: '《NodeJs》', link: '/Web/Javascript/01' },
                        ],
                    }
                ],
            },
            {
                text: '后端',
                items: [
                    {
                        text: '教程',
                        items: [
                            { text: '《Java》', link: '/Web/Command/Typora' },
                            { text: '《Php》', link: '/Web/Command/Typora' },
                            { text: '《Python》', link: '/Web/Command/Typora' },
                            { text: '《Mysql》', link: '/Web/Command/Typora' },
                        ]

                    },
                    {
                        text: '部署',
                        items: [
                            { text: '《Docker》', link: '/Web/Command/Typora' },
                        ]
                    }

                ]
            },
            { text: '博客', link: '/frontWeb/前端' }, // 外部链接
            { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
        ],
        sidebar: 'auto',
    },
    markdown: {
        extractHeaders: ['h2'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'g1cubgahqkzJixjfZkCRUY5T-gzGzoHsz',
                    appKey: 'wl2bgILFUTdEjYeDkWPIqun2'
                }
            }
        ],
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！又好了！",
                hideIcon: "/failure.ico",
                hideText: "(●—●)喔哟，崩溃啦！",
                recoverTime: 2000
            }
        ],
        ["sakura", {
            num: 50,  // 默认数量
            show: true, //  是否显示
            zIndex: -1,   // 层级
            img: {
                replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: '...'     // 绝对路径
            }
        }],
    ]
}