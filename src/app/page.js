import JobItem from '@/components/JobItem'
import { Input } from '@/components/ui/input'

export default function Home() {
  const list = [
    {
      title: 'Software Engineer',
      description:
        'Fintech project, the purpose of which is to create and maintain banking platforms. Users are bank employees, which is about 10,000. The platform is used to serve clients of the bank who would like to invest their money in one of Canada’s largest banks.',
      company: 'Google',
      link: 'https://google.com',
      location: 'Toronto, Canada',
      date: 'today',
    },
    {
      title: 'Software Engineer',
      description:
        'Fintech project, the purpose of which is to create and maintain banking platforms. Users are bank employees, which is about 10,000. The platform is used to serve clients of the bank who would like to invest their money in one of Canada’s largest banks.',
      company: 'Google',
      link: 'https://google.com',
      location: 'Toronto, Canada',
      date: 'today',
    },
    {
      title: 'Software Engineer',
      description:
        'Fintech project, the purpose of which is to create and maintain banking platforms. Users are bank employees, which is about 10,000. The platform is used to serve clients of the bank who would like to invest their money in one of Canada’s largest banks.',
      company: 'Google',
      link: 'https://google.com',
      location: 'Toronto, Canada',
      date: 'today',
    },
    {
      title: 'Software Engineer',
      description:
        'Fintech project, the purpose of which is to create and maintain banking platforms. Users are bank employees, which is about 10,000. The platform is used to serve clients of the bank who would like to invest their money in one of Canada’s largest banks.',
      company: 'Google',
      link: 'https://google.com',
      location: 'Toronto, Canada',
      date: 'today',
    },
    {
      title: 'Software Engineer',
      description:
        'Fintech project, the purpose of which is to create and maintain banking platforms. Users are bank employees, which is about 10,000. The platform is used to serve clients of the bank who would like to invest their money in one of Canada’s largest banks.',
      company: 'Google',
      link: 'https://google.com',
      location: 'Toronto, Canada',
      date: 'today',
    },
  ]
  return (
    <main className='h-full flex flex-col justify-center items-center bg-blue-200'>
      <section className='flex flex-1 flex h-full justify-center items-center flex-col max-w-[700px] w-full gap-4'>
        <h1>Search for a new job</h1>
        <Input
          placeholder='Search for a job'
          type='search'
        />
        <div className='space-y-4 '>
          {list.map((item, index) => (
            <JobItem
              key={index}
              title={item.title}
              company={item.company}
              description={item.description}
              link={item.link}
              location={item.location}
              date={item.date}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
