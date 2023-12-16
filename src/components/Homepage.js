import { CallToAction } from './CallToAction';
import { CustomerSay } from './CustomerSay';
import { Specials } from './Specials';
import { About } from './About';

export const Homepage = () => {
  const chicago = {
    title: 'Little Lemon',
    subtitle: 'Chicago',
    description:
      'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
    about: 'About',
  };

  return (
    <div className="homepage">
      <CallToAction data={chicago} />
      <Specials />
      <CustomerSay />
      <About data={chicago} />
    </div>
  );
};
