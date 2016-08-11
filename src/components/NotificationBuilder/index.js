import React, { PropTypes } from 'react';
import EntityLabel from '../EntityLabel'
const tokenize = (template, keywords) => {
  //const placeholders = template.match(/[\$|\%|\@]{.*?\}/g).filter(Boolean);
  //const notPlaceholders = template.split(/[\$|\%|\@]{.*?\}/g).filter(Boolean);

  const makeArray = (arr) => !Array.isArray(arr) ? [] : arr
  const regexPart = keywords.join('|')

  const regex = new RegExp(`(?:${regexPart}){.*?\}`, 'g')

  //  /(?:techLabel|\$|\@|\%){.*?\}/g

  const placeholders = makeArray(template.match(regex)).filter(Boolean);
  const notPlaceholders = makeArray(template.split(regex)).filter(Boolean);
  const applyPosition = xs => {
    let lastFound = 0;
    return xs.map(x => {
      let position = template.indexOf(x, lastFound)
      lastFound = position + x.length
      return {
        token: x,
        position: position
      }
    })
  }
  const alfa = applyPosition(placeholders)
  const beta = applyPosition(notPlaceholders)
  const gama = [...alfa, ...beta];
  const zeta = gama.sort((a, b) => {
    return a.position-b.position
  }).map(x => x.token)
  return zeta;
}

const NotificationBuilder = ({
  template,
  values,
  status,
  userLink,
  type,
  dict,
  ...props
}) => {
  const tokens = tokenize(template, Object.keys(dict));

  return (
    <div>
      {
        tokens.map((token, i) => {
          let finalElement;
          Object.keys(dict).forEach(keyword => {
            const regex = new RegExp(`${keyword}\{(.*?)\}`)
            let match = regex.exec(token);
            if (match) {
              const dictObject = dict[keyword]

              Object.keys(dictObject.props).forEach(prop => {

                if (typeof dictObject.props[prop] === 'function') {
                  dictObject.props[prop] = dictObject.props[prop].bind(props)
                }
              })

              finalElement = React.createElement(dictObject.element,{
                ...dictObject.props, ...values[match[1]], key: i
              })
            }
          })

          if (finalElement) {
            return finalElement
          }

          return <span key={i}>{token}</span>
        })
      }
    </div>
  )
}

export default NotificationBuilder;
