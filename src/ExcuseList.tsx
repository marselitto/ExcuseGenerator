import React from 'react';
import { Excuse } from './App';

interface PropsExcuseList {
  excuses: Excuse[];
}

const ExcuseList: React.FC<PropsExcuseList> = ({ excuses }) => {
  const generateExcuseText = (excuse: Excuse): string => {
    const intro = `Panie Profesorze, niestety ${excuse.reason} ponieważ`;
    const reason = 'zaspałem';

    let text = `${intro} ${reason}`;
    if (excuse.details) text += `. ${excuse.details}`;
    text += `. Poziom wiarygodności: ${excuse.credibility}, poziom kreatywności: ${excuse.creativity}, data: ${excuse.date}`;
    if (excuse.urgent) text += ', PILNE!';

    return text;
  };

  return (
    <div>
      <h3>Wymówki:</h3>
      <ul>
        {excuses.map((excuse, index) => (
          <li key={index}>
            <strong>{excuse.name}</strong>: {generateExcuseText(excuse)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExcuseList;
