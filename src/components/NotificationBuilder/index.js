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
  dict
}) => {
  const tokens = tokenize(template, Object.keys(dict));
  console.log(tokens);
  return (
    <div>
      {
        tokens.map((token) => {
          let finalElement;
          Object.keys(dict).forEach(keyword => {
            const regex = new RegExp(`${keyword}\{(.*?)\}`)
            let match = regex.exec(token);
            if (match) {
              const dictObject = dict[keyword]

              finalElement = React.createElement(dictObject.element,{
                ...dictObject.props, ...values[match[1]]
              })
            }
          })

          if (finalElement) {
            console.log('returning ', finalElement)
            return finalElement
          }

          return <span>{token}</span>
        })
      }
    </div>
  )
}

export default NotificationBuilder;
