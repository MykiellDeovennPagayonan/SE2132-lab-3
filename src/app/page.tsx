"use client"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Input from "@/components/input"
import Offers from "@/components/offers"
import countries from "@/utils/locations"
import lookupCountryCode from "@/utils/codeCountriesMap"
import findOffers from "@/utils/findOffers"


export default function Home() {
  const [ userLocation, setUserLocation ] = useState<string>("")
  const [ userName, setUserName ] = useState<string>("")
  const [ suggestedOffers, setSuggestedOffers ] = useState<Array<string>>([])

  useEffect(() => {
    const countryCode : string = lookupCountryCode(userLocation)
    
    async function findBestOffers() {
      const bestOffers = await findOffers(countryCode)
      setSuggestedOffers(bestOffers)
    }

    findBestOffers()
  }, [userLocation, userName])

  return (
    <main className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">  
      <div className="flex-1 h-screen max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <Navbar />
        <div className="flex flex-col items-center w-full h-full">
          <h1 className="text-4xl font-bold my-8"> Find the best Offer!</h1>
          {suggestedOffers.length > 0 ?
            <Offers offers={suggestedOffers}/>
            :
            <Input locations={countries} setUserLocation={setUserLocation} setUserName={setUserName}/>
          }
        </div>
      </div>
    </main>
  )
}
