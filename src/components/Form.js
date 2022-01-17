import { useState } from "react";

const Form = (props) => {
    const {handleSubmit} = props;
    // initialState = {
    //     name:'',
    //     job:''
    // }
    console.log('outside: ' + handleSubmit);

    const [initialState,setInitialState] = useState({
        name:'',
        job:''
    });

        console.log(initialState);

    const handleChange = (event) =>{
        console.log('event'+event.target.name + 'value: ' + event.target.value);
        const {name,value} = event.target;
        // initialState[name]=value;
        // setInitialState(initialState);
        // setInitialState(initialState => ({
        //     ...initialState,
        //     [name]:value
        // }));
        setInitialState({...initialState,[name]:value});
    };

    const submitForm =()=>{
        console.log('inside= '+ handleSubmit);
        handleSubmit(initialState);
        setInitialState({
                name:'',
                job:''
            });
    }
    const {name,job}= initialState;
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleChange}/>

            <label htmlFor="job">Job</label>
            <input type="text" name="job" id="job" value={job} onChange={handleChange}/>

            <input type="button" value="Submit" onClick={() => {submitForm()}}/>
        </form>
    )
}

export default Form;