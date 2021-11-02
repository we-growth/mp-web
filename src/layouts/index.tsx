import 'zarm/dist/zarm.css';

export default function (props: { children: any }) {
  return (
    <>
      <h2>I am layouts</h2>
      {props.children}
    </>
  );
}
