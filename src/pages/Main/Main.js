import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            {/*
                TODO Update these in future
                <Projects />
                <Achievement />
                <Services />
                <Testimonials />
                <Contacts />
                */
            }
            <Blog />
            <Footer />
        </div>
    )
}

export default Main
