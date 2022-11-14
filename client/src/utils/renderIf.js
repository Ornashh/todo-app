export default function RenderIf({ isTrue = false, children }) {
  if (isTrue) return children;
}
