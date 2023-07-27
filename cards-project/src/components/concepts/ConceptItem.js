import './ConceptItem.css';

export default function ConceptItem({ concept }) {
  const { image, title, description } = concept;

  return (
    <li className='concept'>
      <img
        src={image}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
