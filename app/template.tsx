/**
 * A template re-mounts on every navigation, so each page settles in with
 * the same short, soft entrance.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
