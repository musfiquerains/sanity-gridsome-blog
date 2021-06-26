export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60d762149f796f1b848b2635',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-9ugtv24r',
                  apiId: '0377a40d-981d-4ac9-8668-25eb4c38bbb4'
                },
                {
                  buildHookId: '60d762152a97bc28a2f5756f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rsaw26ff',
                  apiId: '20fff6b8-04a0-4ae2-99f7-1a392568bf1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/musfiquerains/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rsaw26ff.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
