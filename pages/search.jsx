import React from 'react'

import { useRouter } from 'next/dist/client/router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'

import { format } from 'date-fns';
import LocationMap from '../components/LocationMap'

function Search({ searchResults }) {

    const router = useRouter();

    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />

            <main className='flex'>
                <section className='flex-grow px-6 pt-14'>
                    <p className='text-xs'>300+ Stays {range} for {numberOfGuests} guests</p>

                    <h1 className='mt-2 mb-6 text-3xl font-semibold'>Stays in {location}</h1>

                    <div className='hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {
                            searchResults.map(({ img, location, title, description, star, price, total }) => (
                                <InfoCard
                                    key={img}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}
                                />
                            ))
                        }
                    </div>
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <LocationMap searchResults={searchResults} />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps(context) {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());
    return {
        props: {
            searchResults: searchResults
        }
    }
}