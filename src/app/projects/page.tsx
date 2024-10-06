'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import PageIntroText from '@/components/PageIntroText';
import Container from '@/components/Container';

const Projects = () => {
  const document = useQuery(api.queries.getProjects);


  return (
    <Container>
      {document?.map((doc) => (
        <PageIntroText key={doc._id} intro={doc.description} />
      ))}
    </Container>
  );
};

export default Projects;
