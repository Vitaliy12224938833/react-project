export const createLink = (link) =>
  link ? (
    <a href={link} target='_blank'>
      {link}
    </a>
  ) : null;
