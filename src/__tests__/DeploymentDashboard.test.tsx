import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Deployment dashboard", () => {
  it("renders the CI/CD assignment title", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /ci\/cd pipeline automation/i }),
    ).toBeInTheDocument();
  });

  it("documents that deployments are guarded by CI", () => {
    render(<Home />);

    expect(screen.getByText(/deployment guarded by ci/i)).toBeInTheDocument();
    expect(screen.getByText(/broken tests stop the workflow/i)).toBeInTheDocument();
  });
});
