import  {useState} from 'react'


const useSignUpForm =(callback) =>{
	const [inputs, setInputs]= useState({});
	const [loading, setLoading] = useState(false);

	const handleSubmit = (callback) => event => {
        event.preventDefault()
        setLoading(true);
        callback();
        setLoading(false);
    }

	const handleInputChange =(event)=>{
		event.persist();
		setInputs(inputs =>({...inputs,[event.target.name]:
		event.target.value}));
	}
	return { inputs, loading , handleInputChange, handleSubmit};
	
}

export default useSignUpForm