module.exports = {
  types: [
    { value: 'feat', name: 'feat:     add new feature' },
    { value: 'fix', name: 'fix:      fix bug' },
    { value: 'ui', name: 'ui:       update UI' },
    { value: 'refactor', name: 'refactor: refactor code' },
    { value: 'release', name: 'release:  release application' },
    { value: 'deploy', name: 'deploy:   deploy on server' },
    { value: 'docs', name: 'docs:     change docs' },
    { value: 'test', name: 'test:     add testing' },
    { value: 'chore', name: 'chore:    change settings' },
    { value: 'style', name: 'style:    update style without logic change' },
    { value: 'revert', name: 'revert:   revert commit' },
    { value: 'add', name: 'add:      add dependency' },
    { value: 'minus', name: 'minus:    minus package or app version' },
    { value: 'del', name: 'del:      delete code or file' },
    { value: 'init', name: 'init:     initial commit' },
  ],
  scopes: [],
  messages: {
    type: 'please select commit type:\n',
    scope: 'scope:\n',
    // customScope: 'Denote the SCOPE of this change:',
    subject: 'subject:\n',
    body: 'detail information. line break by "|":\n',
    breaking: 'Breaking Changes:\n',
    footer: 'related issues. E.g.: #31, #34:\n',
    confirmCommit: 'confirm commit?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}