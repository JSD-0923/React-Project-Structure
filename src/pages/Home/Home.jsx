import { useEffect, useMemo, useState } from "react"
import { CompanyProjectContainer } from "./partials/CompanyProjectContainer"

const handpickData = [
    {name: "Personal care", id: 1, img: 'ssdfsdfsdf'},
    {name: "Personal care", id: 1, img: 'ssdfsdfsdf'},
    {name: "Personal care", id: 1, img: 'ssdfsdfsdf'},
    {name: "Personal care", id: 1, img: 'ssdfsdfsdf'},
]

const Home = () => {
    return (
        <div className="home">
            <CompanyProjectContainer />
       </div>
    )
}

export default Home