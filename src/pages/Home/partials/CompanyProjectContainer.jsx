import React from 'react'
import { useState } from "react"
import Modal from '../../../components/Modal/Modal'
import { DemoCard } from '../../../components/DemoCard/DemoCard'


// internal component
const AddProject = () => {
    const [isModalOpen] = useState(false)

    return (
        <>
            <button>+ Add project</button>
            <Modal isOpen={isModalOpen}>
            </Modal>
        </>
    )
}

export const CompanyProjectContainer = () => {
    return (
        <div className="home">
            <h1>Home page</h1>
        <div className="company-project-container">
                <AddProject />

                <DemoCard topicName={"HTML Basic course"} topicId={101}/>
            </div>
        </div>
    )
}