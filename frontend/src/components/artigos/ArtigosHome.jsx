
import React from 'react'
import Card from '../cards/Card'

const ArtigosHome = () => {
    return (
        <section className="artigos">
            <div className="container center">
                <h2>All posts</h2>

                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                </div>
            </div>
        </section>
    )
}

export default ArtigosHome