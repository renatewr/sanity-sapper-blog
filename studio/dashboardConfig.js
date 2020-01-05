export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e1248aa0a860f5fdbe9ef91',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-1vgb9c2g',
                  apiId: 'f963dd36-fe77-4c89-b647-6241e875400f'
                },
                {
                  buildHookId: '5e1248ab3e9a11148b9cf68e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-4s9dqb3p',
                  apiId: '4105e662-dc90-4d3b-8bec-a8e2c02d2f7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/renatewr/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-4s9dqb3p.netlify.com', category: 'apps'}
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
