import { useLayoutEffect } from 'react';

const DocsPage = () => {
  useLayoutEffect(() => {
    window.location.href = 'https://megaloandon.gitbook.io/megaloandon-docs';
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <img src="/bg.png" alt="Background" className="absolute -z-10 h-screen w-screen" />
    </div>
  );
};

export default DocsPage;
