import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function ContactUs() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Conference</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                DataEngBytes is a community conference that is run annually!
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>https://twitter.com/dataengconfau</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>sydney@dataengconf.com.au</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>YouTube</p>
                  <p>https://www.youtube.com/dataengau</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>LinkedIn</p>
                  <p>https://www.linkedin.com/company/cloud-shuttle/</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Meetup</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                The data eng meetup meets monthly or thereabouts in 3 different cities, Brisbane, Melbourne and Sydney.
                For now, due to COVID-19, we run combined meetups which you can catch on our YouTube channel.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Brisbane</p>
                  <p className="mt-1">https://www.meetup.com/Brisbane-Data-Engineering-Meetup/</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Melbourne</p>
                  <p className="mt-1">https://www.meetup.com/Melbourne-Data-Engineering-Meetup/</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Sydney</p>
                  <p className="mt-1">https://www.meetup.com/Sydney-Data-Engineering-Meetup/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
