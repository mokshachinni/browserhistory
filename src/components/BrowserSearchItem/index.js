import './index.css'

const BrowserSearchItem = props => {
  const {initialHistoryListDetails, deleteHistory} = props
  const {
    timeAccessed,
    logoUrl,
    title,
    domainUrl,
    id,
  } = initialHistoryListDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="search-item-container">
      <div className="history-item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logos" key={logoUrl} />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default BrowserSearchItem
