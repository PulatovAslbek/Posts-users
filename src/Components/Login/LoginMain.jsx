import React from 'react';
import './LoginMain.scss';
import useToken from '../../Hooks/useToken';

function LoginMain() {
	const [, setState] = useToken();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, userpassword } = evt.target.elements;

		setState({
			username: username.value,
			userpassword: userpassword.value,
		});
	};

	return (
		<>
			<main className='login-main'>
				<div className='container'>
					<div className='login__box'>

						<h1 className='login__heading'>The First Log in Bro</h1>

						<form method='POST' onSubmit={handleSubmit}>
							<input
								className='user__login'
								type='text'
								placeholder='Phone number, email address'
								name='username'
								required
							/>
							<input
								className='user__password'
								type='password'
								placeholder='Password'
								name='userpassword'
								required
							/>

							<button className='login-btn'>Log In</button>
						</form>

					</div>
				</div>
			</main>
		</>
	);
}

export default LoginMain;
