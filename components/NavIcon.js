export default function NavIcon(props) {
  return (
    <>
      <input type="checkbox" className="nav__checkbox" id="nav-button" />
      <label htmlFor="nav-button" className="nav__button nav__button--burger">
        <div className="nav__icon nav__icon--burger">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="48" stroke="white" strokeWidth="4" fill="transparent" />
          <line x1="25%" y1="35%" x2="75%" y2="35%" stroke="white" strokeWidth="4" />
          <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="white" strokeWidth="4" />
          <line x1="25%" y1="65%" x2="75%" y2="65%" stroke="white" strokeWidth="4" />
        </svg>
        </div>
      </label>
    </>
  );
}