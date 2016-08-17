import React, { PropTypes } from 'react';
import _ from 'lodash'
import TechCard from '../TechCard';
import ProjectCard from '../ProjectCard';
import AttachmentCard from '../AttachmentCard';
import OrgCard from '../OrgCard';
import Masonry from 'react-masonry-component';
import Perf from 'react-addons-perf';

import { SpringGrid, measureItems, makeResponsive, layout, CSSGrid } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(SpringGrid, { measureImages: true }), {
  maxWidth: 2560,
  minPadding: 150
});

// const Grid = measureItems(CSSGrid, { measureImages: true })

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
    return window.innerHeight + window.scrollY >= 0.85 * document.body.scrollHeight;
  }

  resultsLowerThanTotal() {
    const { results, total} = this.props;
    return results.size < total;
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
    const { onLoadMore, loading } = this.props;

    if (!loading && this.conditionsToLoadMore()) {
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

    return results && results.map((result, i) => {
      const { _type, ...data} = result.toObject();
      return (
        <div key={i} style={{width: '300px'}}>
          {this.renderCard(_type, data)}
        </div>
      );
    });
  }

  render() {
    const { loading } = this.props
    console.log('cardGrid loading? ', loading)
    return (
      <div style={{backgroundColor: loading ? '#d3d3d3' : 'white'}}>
        <Masonry
          style={{width: '100%'}}
          disableImagesLoaded={false}
          updateOnEachImageLoad={true}
          onImagesLoaded={this.tryToLoadMore}
          options={options}>
        {/*// <Grid
        //   component="div"
        //   //columns={5}
        //   columnWidth={300}
        //   gutterWidth={25}
        //   gutterHeight={25}
        //   layout={layout.pinterest}
        //   springConfig={{ stiffness: 170, damping: 26 }}
        // >*/}
          { this.renderItems() }
        {/*// </Grid>*/}

        </Masonry>
        {loading && <span>Loading...</span>}
      </div>
    );
  }
}

export default ResultsGrid;
