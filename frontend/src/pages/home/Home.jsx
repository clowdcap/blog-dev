import React from 'react'

// COMPONENTS
import { Slider } from '../../components/slider/Slider'
import { Jose } from '../../components/jose/Jose'
import Tecnologias from '../../components/tecnologias/Tecnologias'

const Home = () => {
    return (
        <>
            <Slider />
            <Jose />
            <Tecnologias />
        </>
    )
}

export default Home