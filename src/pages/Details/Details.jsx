import { useNavigate } from "react-router-dom"

const Details = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('..')
    }

    return (
        <div className="details">
            <h1>Details pages</h1>

            <button onClick={handleBack}> Back </button>
       </div>
    )
}

export default Details