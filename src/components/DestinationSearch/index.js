import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem
  return (
    <li className="bg1">
      <img src={imgUrl} className="img" alt={name} />
      <p className="para1">{name}</p>
    </li>
  )
}
export default DestinationItem
