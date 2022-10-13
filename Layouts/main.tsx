import Head from 'next/head';

// @ts-ignore
export const MainLayout = ({ children }) => {
  return(<>
      <Head>
          <title>
              Html To Pdf
          </title>
      </Head>
      <div
          data-layout='centered'
          className='flex flex-col h-screen items-center justify-center'
      >
          <div
              data-layout='centered'
              className='main overflow-y-scroll w-full h-screen flex items-center justify-center bg-grey-50'
          >
              {children}
          </div>
      </div>
  </>)
}