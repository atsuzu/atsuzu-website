import Link from 'next/link';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      What the application does: YoutubeSubscriptionDate is an app that displays
      when you <strong>last</strong> subscribed to the channel.
    </p>
    <p>
      What will this application do with user data: YoutubeSubscriptionDate
      needs access to retrieve user information on when the user subscribed to a
      channel.
    </p>
    <p>
      Link to privacy policy: <Link href="/privacy-policy/">Click here</Link>
    </p>
  </Main>
);

export default About;
