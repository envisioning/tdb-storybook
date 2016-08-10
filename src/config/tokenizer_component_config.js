import EntityLabel from '../components/EntityLabel';

export default {
  bold: {
    element: 'b',
    props: {

    }
  },
  techLabel: {
    element: EntityLabel,
    props: {
      type: 'technologies'
    }
  },
  thumb: {
    element: 'img',
    props: {
      style: {
        width: 30,
        height: 30
      }
    }
  },
  projectLabel: {
    element: EntityLabel,
    props: {
      type: 'projects'
    }
  },
  attachmentLabel: {
    element: EntityLabel,
    props: {
      type: 'attachments'
    }
  },
  collectionLabel: {
    element: EntityLabel,
    props: {
      type: 'collections'
    }
  },
  orgLabel: {
    element: EntityLabel,
    props: {
      type: 'organizations'
    }
  },
  a: {
    element: 'a',
    props: {

    }
  }
}
