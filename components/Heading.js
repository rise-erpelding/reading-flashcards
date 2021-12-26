export default function Heading(props) {
  const HeadingLevel = props.level;
  return (
    <>
      <HeadingLevel>{props.title}</HeadingLevel>
    </>
  )
}