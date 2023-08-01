const DenominationItem = props => {
  const {details} = props
  return (
    <div>
      <li className="list1">
        <button type="button" className="button">
          {details}
        </button>
      </li>
    </div>
  )
}
export default DenominationItem
