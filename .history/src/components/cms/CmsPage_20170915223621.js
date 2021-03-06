import React, {Component} from 'react';
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'

class CmsPage extends Component {
  componentDidUpdate() {
    scrollTop
  }
  getCurrentData = () => {
    let {data} = this.props.cms

    if (data !== null) {
      return data.filter(item => {
        return parseInt(item.id, 10) === parseInt(this.props.match.params.id, 10)
      })
    } else {
      return null
    }
  }

  render() {
    let {fetching} = this.props.cms

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            {renderHTML(this.getCurrentData()[0].content)}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({cmsReducer}) {
  return {
    cms: cmsReducer,
  }
}

export default connect(mapStateToProps)(CmsPage);