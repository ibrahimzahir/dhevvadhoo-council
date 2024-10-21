'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const PageIntroText = () => {
  const document = useQuery(api.queries.getIslandInfo);

  if (!document) return <div>Loading...</div>;
  return (
    <div>
      {document?.map((doc) => (
        <div
          key={doc._id}
          className="flex max-auto items-center justify-center py-16"
        >
          <p className="text-right leading-10">{doc.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PageIntroText;
