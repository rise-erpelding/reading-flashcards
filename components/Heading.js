export default function Heading(props) {
  const HeadingLevel = props.level;
  return (
    <>
      <HeadingLevel className="heading">{props.title}</HeadingLevel>
    </>
  )
}