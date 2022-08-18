import { useState } from 'react'

import { Link } from '@redwoodjs/router'

import IconBox, { IconType } from 'src/shared/IconBox/IconBox'

type menuItemProps = {
  path: string
  title: string
  content: { title: string; path: string }[]
}

const MenuItem = ({ path, title, content }: menuItemProps) => {
  const [isArrowRight, setIsArrowRight] = useState(true)
  const onClick = () => {
    setIsArrowRight(!isArrowRight)
  }
  return (
    <li>
      <div className={' flex w-full justify-between p-2'}>
        <Link className="mr-5" to={path}>
          {title}
        </Link>
        <button onClick={onClick}>
          {isArrowRight ? (
            <IconBox style="h-4 w-4" iconName={IconType.right_arrow} />
          ) : (
            <IconBox style="h-4 w-4" iconName={IconType.down_arrow} />
          )}
        </button>
      </div>
      {!isArrowRight && (
        <ul>
          {content.map((data, idx) => (
            <li className={' flex w-full justify-between p-2'} key={idx}>
              <Link to={data.path}>
                <p>{data.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default React.memo(MenuItem)
