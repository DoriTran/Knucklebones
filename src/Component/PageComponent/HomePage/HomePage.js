// SCSS
import "./HomePage.scss"

// Component
import HomeBackground from "./HomeBackground/HomeBackground"
import SelectModal from './SelectModal/SelectModal'

// React
import { useState } from "react"

const HomePage = () => {
    const [isOpenSelectModal, setOpenSelectModal] = useState(false)

    return ( 
    <>
        <HomeBackground setOpenSelectModal={setOpenSelectModal}/>
        <SelectModal 
            isInAnimation={isOpenSelectModal}
            onDropBackClick={() => setOpenSelectModal(false)}/>
    </> );
}
 
export default HomePage;