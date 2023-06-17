import React from 'react'
import AppHero from '../components/Home/hero'
import AppAbout from '../components/Home/about'
import AppFeature from '../components/Home/feature'
import AppWorks from '../components/Home/work'
import AppFaq from '../components/Home/faq'
import AppPricing from '../components/Home/pricing'
import AppContact from '../components/Home/contact'
function AppHome() {
  return (
    <div className='main'>
        <AppHero />
        <AppAbout />
        <AppFeature />
        <AppWorks />
        <AppFaq />
        <AppPricing />
        <AppContact />
    </div>
  )
}

export default AppHome