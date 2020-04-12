import * as React from 'react'
import * as labs from "../labs"
import { RouteChildrenProps } from 'react-router-dom';


const ThreeContainer: React.FC<RouteChildrenProps<{ id: string }>> = props => {
  const id = props.match.params.id
  const containerElem = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const lab = new labs[id](containerElem.current);
    return () => lab.terminated = true
  }, [id])

  const { title, description, tags } = labs[id] as labs.ILab

  return (
    id
    && (
      <React.Fragment>
        <div className="text">
          <h1>{title}</h1>
          {tags &&
            <p>{
              tags.split(" ").map(
                (tag, index) => <span key={index}>#{tag} </span>
              )
            }</p>
          }
        </div>
        <div
          key={id}
          ref={containerElem}
          style={{ display: 'flex' }}
        />
        {description && <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "</br>") }}></p>}

      </React.Fragment>

    )
  )
}

export default ThreeContainer
