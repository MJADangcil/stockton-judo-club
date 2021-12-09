import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function CustomLink({ children, to, fontSize, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{
        color: 'inherit',
        textDecoration: match ? 'underline white' : 'none',
        fontSize: fontSize,
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
