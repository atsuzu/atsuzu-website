import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      Hello, I just created this website using a boilerplate code provided by
      https://github.com/ixartz/Next-js-Boilerplate. I will be adding projects
      that I have/will be working on as well as a quick tutorial on how it was
      built from time to time.
    </p>
  </Main>
);

export default About;
