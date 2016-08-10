import React, { PropTypes } from 'react';
import _ from 'lodash'
import TechCard from '../TechCard';
import ProjectCard from '../ProjectCard';
import AttachmentCard from '../AttachmentCard';
import OrgCard from '../OrgCard';
import Masonry from 'react-masonry-component';
import Perf from 'react-addons-perf';

window.Perf = Perf;

const SCROLL_LISTENER_DEBOUNCE = 250;

const options = {
  gutter: 15,
  percentPosition: true,
  isAnimated: false,
};

class ResultsGrid extends React.Component {
  constructor(props) {
    super(props);

    this.scrollListener = _.debounce(() => {
      this.tryToLoadMore();
    }, SCROLL_LISTENER_DEBOUNCE);

    this.tryToLoadMore = this.tryToLoadMore.bind(this);
  }

  scrollOnBottom() {
    return window.innerHeight + window.scrollY >= 0.75 * document.body.scrollHeight;
  }

  resultsLowerThanTotal() {
    const { results, total} = this.props;
    return results.length < total;
  }

  conditionsToLoadMore() {
    return this.resultsLowerThanTotal() && this.scrollOnBottom();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  tryToLoadMore() {
    const { onLoadMore } = this.props;
    if (this.conditionsToLoadMore()) {
        onLoadMore();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.props.results, nextProps.results);
  }
  renderCard(type, data) {
    const { highlight } = this.props;

    switch (type) {
      case 'technologies':
        return <TechCard highlight={highlight} {...data} />;
      case 'organizations':
        return <OrgCard highlight={highlight} {...data} />;
      case 'attachments':
        return <AttachmentCard highlight={highlight} {...data}/>;
      case 'projects':
      return <ProjectCard highlight={highlight} {...data} />;
      default:
        return <ProjectCard {...data} />;
    }
  }
  renderItems() {
    const { results } = this.props;

    return results.map(result => {
      const { _type, ...data} = result;
      return (
        <div key={data._id} style={{width: '300px'}}>
          {this.renderCard(_type, data)}
        </div>
      );
    });
  }

  render() {
    return (
      <Masonry
        style={{width: '100%'}}
        disableImagesLoaded={false}
        updateOnEachImageLoad={true}
        onImagesLoaded={this.tryToLoadMore}
        options={options}>
      { this.renderItems() }
      </Masonry>
    );
  }
}

export default ResultsGrid;
