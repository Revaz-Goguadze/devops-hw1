const pipelineSteps = [
  {
    title: "Commit",
    detail: "A push or pull request starts the GitHub Actions workflow.",
    status: "Source control",
  },
  {
    title: "Quality gate",
    detail: "Dependencies install, Jest tests run, and Next.js builds.",
    status: "CI required",
  },
  {
    title: "Release",
    detail: "Vercel receives a production deployment only after CI succeeds.",
    status: "CD protected",
  },
];

const metrics = [
  ["Tests", "Required before deploy"],
  ["Provider", "Vercel free tier"],
  ["Strategy", "Blue-Green style"],
  ["Rollback", "Previous deployment"],
];

export function DeploymentDashboard() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">DevOps Assignment 1</p>
          <h1 id="page-title">CI/CD Pipeline Automation</h1>
          <p className="hero-text">
            A small Next.js application used to prove automated testing,
            protected deployment, release strategy planning, and rollback
            readiness.
          </p>
        </div>

        <div className="release-panel" aria-label="Current release status">
          <div className="release-ring">
            <span>Live</span>
          </div>
          <div>
            <p className="panel-label">Production status</p>
            <strong>Deployment guarded by CI</strong>
            <p>Broken tests stop the workflow before production deployment.</p>
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Project summary">
        {metrics.map(([label, value]) => (
          <article className="metric-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="pipeline-section" aria-labelledby="pipeline-title">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2 id="pipeline-title">From code commit to production</h2>
        </div>

        <div className="pipeline-grid">
          {pipelineSteps.map((step, index) => (
            <article className="pipeline-card" key={step.title}>
              <div className="step-index">{index + 1}</div>
              <div>
                <p className="status-pill">{step.status}</p>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
