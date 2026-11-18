import SpotlightCard from './reactbits/SpotlightCard';

export default function ProjectRow({ project }) {
  const primary = project.links[0];

  return (
    <SpotlightCard
      className="project-row"
      theme="light"
      spotlightColor="var(--accent)"
      intensity={0.11}
      spotlightSize={380}
      softness={0.9}
      borderGlow={0.18}
      proximity={90}
      smoothing={0.5}
      grain={0}
      style={{
        '--spotlight-card-surface': 'transparent',
        '--spotlight-card-border': 'transparent',
        '--spotlight-card-shadow': 'none'
      }}
    >
      <a
        className="project-row__media"
        href={primary.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — ${primary.label}`}
      >
        <img
          className={project.fit === 'contain' ? 'is-contain' : undefined}
          src={project.cover}
          alt={project.coverAlt}
          width={project.fit === 'contain' ? 800 : 960}
          height={project.fit === 'contain' ? 800 : 540}
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="project-row__body">
        <p className="project-row__meta">
          <span>{project.type}</span>
          <span>/</span>
          <span>{project.year}</span>
        </p>
        <h3>
          <a href={primary.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="project-row__desc">{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} stack`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-row__links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
