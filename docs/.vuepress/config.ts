import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
    lang: 'ru-RU',
    title: 'Документация Epos Next',
    description: 'Главный информационный репозиторий.',
    base: '/docs/',
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        contributors: true,
        repo: 'epos-next/docs',
        logo: 'https://avatars.githubusercontent.com/u/88421051?s=200&v=4',
        sidebarDepth: 2,
        sidebar: [
            // SidebarItem
            {
                text: 'О проекте',
                link: '/',
                collapsible: true,
                /*children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // string - page file path
                    '/foo/bar.md',
                ],*/
            },
            // string - page file path
            //'/bar/README.md',
            {
                text: 'Аутентификация',
                link: '/auth',
                collapsible: true,
            },
        ],
    },
})