export default function RenderIf({ isTrue, children }) {
  if (isTrue) return children;
}
