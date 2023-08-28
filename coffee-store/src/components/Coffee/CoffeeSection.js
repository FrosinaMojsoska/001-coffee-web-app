import { Fragment } from "react"
import SummarySection from "./SummarySection"
import AvailableCoffees from './AvailableCoffees'
const CoffeeSection=()=>{
    return(
        <Fragment>
            <SummarySection/>
            <AvailableCoffees/>
        </Fragment>
    )
}
export default CoffeeSection;