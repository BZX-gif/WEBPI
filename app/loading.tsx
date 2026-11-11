export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-16" role="status">
      <span className="spinner" aria-hidden="true" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
