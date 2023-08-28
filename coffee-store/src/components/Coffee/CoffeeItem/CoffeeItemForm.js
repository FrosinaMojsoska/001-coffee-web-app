import { useRef } from "react";
import classes from './CoffeeItemForm.module.css'

const CoffeeItemForm=(props)=>{
    const selectedAmountReference=useRef();

    const submitAmountHandler=(event)=>{
        event.preventDefault();
        let selectedAmount=selectedAmountReference.current.value;
        props.onSaveAmount(selectedAmount);
     
            
    }
    return (
 
        <form className={classes.form} onSubmit={submitAmountHandler}>
            <label className={classes.label} htmlFor={props.id}>Amount: </label>
            <input className={classes.input} max={5} min={1} step={1} defaultValue={1} id={props.id} type="number" ref={selectedAmountReference}/>
            <button> +Add</button>
        </form>
    )
}
export default CoffeeItemForm;