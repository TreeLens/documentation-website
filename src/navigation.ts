import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Milestones', href: getPermalink('/milestones') },
    { text: 'Calendar', href: getPermalink('/calendar') },
    { text: 'Meetings', href: getPermalink('/meetings') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: 'GitHub', href: 'https://github.com/TreeLens' },
        { text: 'Google Drive', href: 'https://drive.google.com' },
        { text: 'Jira', href: 'https://your-team.atlassian.net' },
      ],
    },
    {
      title: 'Team Members',
      links: [
        { text: 'Francisco Baptista', href: 'https://github.com/kikopb31' },
        { text: 'Inês Batista', href: 'https://github.com/InesLBatista' },
        { text: 'Luís Correia', href: 'https://github.com/LuisPCNeri' },
        { text: 'Maria Quinteiro', href: 'https://github.com/Maria0claraa' },
        { text: 'Marcos', href: 'https://github.com/MarcosCost' },
      ],
    },
    {
      title: 'Project Advisors',
      links: [
        { text: 'João Almeida', href: 'https://github.com/joaorafaelalmeida' },
        { text: 'Vicente Barros', href: 'https://github.com/v1centebarros' },
        { text: 'Sebastião Teixeira', href: 'https://github.com/sebastiaoteixeira' },
      ],
    },
  ],
};