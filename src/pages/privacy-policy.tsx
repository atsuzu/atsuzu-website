import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const PrivacyPolicy = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1 className="text-2xl font-bold">Privacy Policy</h1>
    <ul>
      <li>
        Youtube Subscription Date does <strong> not </strong> collect your
        personal information.
      </li>
      <li>
        Youtube Subscription Date ises Google Authentication{' '}
        <strong>only</strong> to retrieve your channel subscription date.
      </li>
    </ul>
  </Main>
);

export default PrivacyPolicy;
