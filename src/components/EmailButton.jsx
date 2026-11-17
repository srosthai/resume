import SpecularButton from './reactbits/SpecularButton';

export default function EmailButton({ email }) {
  return (
    <SpecularButton
      href={`mailto:${email}`}
      size="lg"
      radius={999}
      tint="#f3f2ed"
      tintOpacity={0.08}
      textColor="#f3f2ed"
      lineColor="#f3f2ed"
      baseColor="#5e6864"
      intensity={0.95}
      idleIntensity={0.22}
      shineSize={12}
      shineFade={38}
      thickness={1.1}
      glow={0.8}
      speed={0.3}
      followMouse
      proximity={280}
    >
      Email me
    </SpecularButton>
  );
}
