import ConceptItem from './ConceptItem';
import './ConceptsList.css';

export default function ConceptsList({ concepts }) {
  return (
    <ul id='concepts'>
      <ConceptItem concept={concepts[0]} />
      <ConceptItem concept={concepts[1]} />
      <ConceptItem concept={concepts[2]} />
    </ul>
  );
}
