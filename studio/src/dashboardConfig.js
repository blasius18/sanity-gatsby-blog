export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2ac0902917082ccf2f4fb0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-x6iuywd9',
                  apiId: 'e5116d60-de56-4f19-95c5-42d69686c234'
                },
                {
                  buildHookId: '5f2ac090740ef10e37d4d193',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b8zvv6ks',
                  apiId: 'ec92bf74-6302-4d8e-a08c-8701da03765c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blasius18/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b8zvv6ks.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
