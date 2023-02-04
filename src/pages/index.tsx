import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Atsuzu Portfolio | Home"
          description="Projects that will/was be created by Atsuzu"
        />
      }
    >
      <div className="space-y-4 divide-y divide-slate-500">
        <div className="py-10">
          <h1 className="text-2xl font-bold">Introduction</h1>

          <h3 className="pt-4">Youtube Subscription Date Extension</h3>
          <ul className="list-inside list-disc">
            <li>
              {' '}
              Displays the date a user was subscribed to a certain channel.{' '}
            </li>
            <li>
              {' '}
              <a href="https://chrome.google.com/webstore/detail/youtube-subscription-date/jnfcfgjegdjplaedinebakehijphkaoj/overview">
                {' '}
                Chrome Web Store{' '}
              </a>
            </li>
          </ul>
        </div>

        <div className="py-10">
          <h1 className="text-2xl font-bold">Demo</h1>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/-cXQAof9wbM"
              title="Youtube Subscription Date Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-2xl font-bold">Features</h1>

          <div className="">
            <ul className="list-inside list-disc">
              <li>
                {' '}
                Currently <strong>only</strong> works for English{' '}
              </li>
              <li>
                {' '}
                Calls Youtube API with Google&#39;s OAuth token and the channel
                ID to retrieve the <strong>last</strong> subscription date{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
