import ShinyText from './reactbits/ShinyText';

export default function RoleShine({ text }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="role-shine role-shine--light" aria-hidden="true">
        <ShinyText
          text={text}
          color="#101820"
          shineColor="#2f5d50"
          speed={1.2}
          delay={2}
          angle={110}
          shineWidth={18}
          softness={0.92}
          bands={1}
          trigger="hover"
          easing="smooth"
        />
      </span>
      <span className="role-shine role-shine--dark" aria-hidden="true">
        <ShinyText
          text={text}
          color="#f0eee6"
          shineColor="#9dbfae"
          speed={1.2}
          delay={2}
          angle={110}
          shineWidth={18}
          softness={0.92}
          bands={1}
          trigger="hover"
          easing="smooth"
        />
      </span>
    </>
  );
}
