import { SectionBox, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionBox>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionBox>
  );
}
