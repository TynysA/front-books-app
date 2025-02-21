import 'twin.macro';

import banner from '@/shared/assets/images/header-banner.webp';
import Container from '@/shared/ui/Container/Container.tsx';

const WelcomePage = () => {
  // TODO: and this words and sentence to translate
  const sections = [
    {
      title: 'If you are a student or schoolchild',
      points: ['We help you prepare for exams and tests', 'You can take tests without even registering.']
    },
    {
      title: 'If you are a teacher or event/work supervisor',
      points: [
        'You can see the test results on the platform',
        'You can select several tests and see the overall results',
        'We can help collect job or event satisfaction results.'
      ]
    }
  ];

  return (
    <div tw='bg-root p-[16px] overflow-hidden flex flex-col gap-[15px] text-primary'>
      <Container>
        <div id='main' tw='flex flex-col gap-[16px] '>
          <div tw='flex justify-between items-center '>
            <div id={'info'} tw='flex flex-col gap-[35px]'>
              <p tw='text-[37px] font-medium max-w-[400px]'>Learn new concepts for each question</p>
              {sections.map(({ title, points }, index) => (
                <div key={index} tw='text-[#828282] flex flex-col gap-[5px] text-[16px]'>
                  <p tw='text-[#000000] font-medium border-l-[2px] border-[#333333] px-[5px]'>{title}</p>
                  {points.map((point, i) => (
                    <p key={i} tw='px-[20px]'>
                      {point}
                    </p>
                  ))}
                </div>
              ))}
              <div tw='cursor-pointer py-[10px] rounded-[10px] px-[35px] bg-[#B8E4C7] text-[18px] w-fit'>
                Start Quiz
              </div>
            </div>
            <div id={'photo'} tw='rounded-[16px] max-w-[480px]'>
              <img src={banner} alt={''} tw='rounded-[50px] ' />
            </div>
          </div>
          <section id='how-it-works' tw='py-16 bg-gray-100'>
            <div tw='container mx-auto text-center'>
              <h2 tw='text-3xl font-bold'>How It Works</h2>
              <p tw='text-gray mt-2'>A simple guide to using our quiz platform.</p>

              <div tw='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                <div tw='p-6 bg-white rounded-lg shadow-md'>
                  <h3 tw='text-xl font-semibold'>1. Create a Quiz</h3>
                  <p tw='text-gray'>Teachers log in and create quizzes with multiple-choice questions.</p>
                </div>

                <div tw='p-6 bg-white rounded-lg shadow-md'>
                  <h3 tw='text-xl font-semibold'>2. Share the Quiz</h3>
                  <p tw='text-gray'>Students can access the quiz using a unique quiz ID.</p>
                </div>

                <div tw='p-6 bg-white rounded-lg shadow-md'>
                  <h3 tw='text-xl font-semibold'>3. Get Results</h3>
                  <p tw='text-gray'>Teachers track student scores and provide feedback.</p>
                </div>
              </div>
            </div>
          </section>
          <section id='features' tw='py-16 bg-white'>
            <div tw='container mx-auto text-center'>
              <h2 tw='text-3xl font-bold'>Features</h2>
              <p tw='text-gray mt-2'>What makes our quiz platform powerful and easy to use?</p>

              <div tw='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                <div tw='p-6 bg-gray-100 rounded-lg shadow-md'>
                  <h3 tw='text-xl font-semibold'>🎯 Easy Quiz Creation</h3>
                  <p tw='text-gray'>Quickly set up quizzes with up to 20 questions.</p>
                </div>

                <div tw='p-6 bg-gray-100 rounded-lg shadow-md'>
                  <h3 tw='text-xl font-semibold'>📊 Real-time Results</h3>
                  <p tw='text-gray'>Teachers get instant insights into student performance.</p>
                </div>

                <div tw='p-6 bg-gray-100 rounded-lg shadow-md'>
                  <h3 tw='text-xl font-semibold'>🔄 Retake Quizzes</h3>
                  <p tw='text-gray'>Allow students to retake quizzes if needed.</p>
                </div>
              </div>
            </div>
          </section>
          <section id='cta' tw='py-16 bg-green-600 text-white text-center'>
            <div tw='container mx-auto'>
              <h2 tw='text-3xl font-bold'>Ready to Create Your First Quiz?</h2>
              <p tw='text-lg mt-2'>Sign up as a teacher or enter a quiz ID as a student.</p>

              <div tw='mt-6'>
                <a href='/signup' tw='px-6 py-3 bg-white text-green-600 font-bold rounded-lg shadow-md'>
                  Sign Up as a Teacher
                </a>
                <a href='/start-quiz' tw='ml-4 px-6 py-3 bg-gray-100 text-green-600 font-bold rounded-lg shadow-md'>
                  Enter Quiz ID
                </a>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
