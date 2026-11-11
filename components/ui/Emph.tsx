/**
 * Renders a string, setting any *starred* run in the italic accent.
 * "Small details. *Big ambitions.*" → the second sentence is emphasised.
 */
export function Emph({ children }: { children: string }) {
  return (
    <>
      {children.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="em">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** The same string with the markers removed, for labels and metadata. */
export function plain(text: string) {
  return text.replace(/\*/g, "");
}
