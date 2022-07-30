import { BsStarFill } from 'react-icons/bs'
import generateUniqueId from '@utils/generateUniqueId'
import Tooltip from './Tooltip'

function Rating({ count }: { count: number }) {
  return (
    <Tooltip message={count.toString()}>
      <div className="inline-flex">
        {[...Array(Math.round(count / 2))].map(() => (
          <BsStarFill fill="rgb(126 34 206)" key={generateUniqueId()} />
        ))}
      </div>
    </Tooltip>
  )
}

export default Rating
