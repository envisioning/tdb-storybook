import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import RecentUpdates from './';
import moment from 'moment';
//
// texto: ${label} ${predicado verbal} ${usuario}
//
// // metodo: UPDATE
// '${field} changed from ${oldValue} to ${newValue}',
//
//
//
// // metodo: REMOVE
// sem detalhes
//
// // metodo: INSERT
// sem detalhes
//
// // metodo: linkImage
//
// 'has a new image attached by'
//
// // metodo: unlinkImage
// ''
//
//
// // metodo: pushDescription
// 'received a new description by'

//
// tech:
// user:
// text: 'a new description was published in {tech} by {user}'

const recentUpdates = [
  {
    type: 'technologies',
    method: 'technologies.linkImage',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    //text: 'userLink{user} linked a new image thumb{img} to techLabel{tech}',
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      texto: {
        children: 'hahaha'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      },
      image: {
        src: 'http://placehold.it/50x50',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies.unlinkImage',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      },
      image: {
        src: 'http://placehold.it/50x50',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies.updateShowcasedImage',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      },
      image: {
        src: 'http://placehold.it/50x50',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies.addAttachment',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      },
      attachment: {
        text: 'Github',
        link: 'http://www.heroku.com'
      },
      image: {
        src: 'http://placehold.it/50x50',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies.update',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies.insert',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies.remove',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      }
    }
  },
  {
    type: 'technologies',
    method: 'technologies_descriptions.publish',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      description: {
        href: 'http://www.google.com',
        children: 'description',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      }
    }
  },
  {
    type: 'technologies',
    method: 'projects.pushTechnologiesStash',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      description: {
        href: 'http://www.google.com',
        children: 'description',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      },
      project: {
        text: 'Project'
      }
    }
  },
  {
    type: 'technologies',
    method: 'projects.pullTechnologiesStash',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      description: {
        href: 'http://www.google.com',
        children: 'description',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'draft',
        link: 'http://github.com',
      },
      project: {
        text: 'Project'
      }
    }
  },
  {
    type: 'projects',
    method: 'projects.addAttachment',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      project: {
        text: 'Project',
        link: 'http://github.com',
      },
      attachment: {
        text: 'Github',
        link: 'http://www.heroku.com'
      },
    }
  },
  {
    type: 'projects',
    method: 'projects.removeAttachment',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      project: {
        text: 'Drone',
      },
      attachment: {
        text: 'Github',
        link: 'http://www.heroku.com'
      },
    }
  },
  {
    type: 'attachments',
    method: 'attachments.insert',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      attachment: {
        text: 'Github',
        link: 'http:/github.com',
      },
    }
  },
  {
    type: 'attachments',
    method: 'attachments.update',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      attachment: {
        text: 'Github',
        link: 'http:/github.com',
      },
    }
  },
  {
    type: 'attachments',
    method: 'attachments.remove',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      attachment: {
        text: 'Github',
        link: 'http:/github.com',
      },
    }
  },
  {
    type: 'attachments',
    method: 'collections.moveTechnology',
    userId: '1232151',
    docId: '123541234',
    date: moment().set({'year': 2013, 'month': 3}),
    values: {
      user: {
        href: 'http://www.google.com',
        children: 'Rafael',
        target: '_blank'
      },
      tech: {
        text: 'Drone',
        status: 'published',
        link: 'http:/github.com',
      },
      from: {
        text: 'Source collection'
      },
      to: {
        text: 'Destiny collection'
      }
    }
  },
]
storiesOf('Recent Updates', module)
  .add('default', () => (
    <RecentUpdates
      recentUpdates={recentUpdates}
    />
  ))
