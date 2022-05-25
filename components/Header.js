import Heading from '../components/Heading';


export default function Header(props) {
  console.log(props);
  return (
    <header className="header">
        <Heading level="h1" title={props.title} />
    </header>
  );
}