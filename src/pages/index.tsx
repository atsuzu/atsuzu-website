import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Atsuzu Portfolio"
          description="Projects that will/was be created by Atsuzu"
        />
      }
    >
      <h1 className="text-2xl font-bold">Home</h1>

      <iframe
        width="1280"
        height="763"
        src="https://www.youtube.com/embed/uWS_19srKVs"
        title="Youtube Subscription Date Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Main>
  );
};

export default Index;
