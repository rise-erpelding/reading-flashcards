export default function NavIcon(props) {
  return (
    <>
      <input type="checkbox" className="nav__checkbox" id="nav-button" />
      <label htmlFor="nav-button" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
    </>
  );
}