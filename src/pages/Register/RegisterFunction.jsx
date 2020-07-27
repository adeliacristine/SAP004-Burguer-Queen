const ViewPassword = () =>{
    let passwordEye = document.getElementById('password');
		if (passwordEye.type === 'password') {
    passwordEye.type = 'text';
    console.log('foi')
		} else {
		passwordEye.type = 'password';
		}
	};
export default ViewPassword;

/*const ViewPassword1 = () =>{
    let passwordEye = document.getElementsById('password1');
		if (passwordEye.type === 'password') {
    passwordEye.type = 'text';
    console.log('foi')
		} else {
		passwordEye.type = 'password';
		}
	};
export default ViewPassword1 ; ViewPassword*/