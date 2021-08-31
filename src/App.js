import React, { useState, useEffect } from 'react';
import { Container, AppBar, Card, CardMedia, CardContent, Typography, makeStyles, Button, CircularProgress } from '@material-ui/core';
import { green, lightGreen } from '@material-ui/core/colors';

function App() {
	const [users, setUsers] = useState([])
	const [loader, setLoader] = useState(false);

	const loadUsers = () => {
		setLoader(true);
		(async () => {
			const response = await fetch("https://reqres.in/api/users?page=1");
			const res = await response.json();
			setUsers(res.data);
			
			setLoader(false);
		})()
	}

	const useStyles = makeStyles ({
		image: {
			height: "250px",
			minWidth: "300px",
		},
		flex: {
			display: "grid",
			gridTemplateColumns: "auto auto auto"
		},
		padding: {
			padding: '3%',
		},
		
		
	});
	const classes = useStyles ();

	return (
		<>
			<AppBar position='static' color='light grey'>
				<Typography variant='h4' align='center' className={classes.padding}>Vikram Tech</Typography>
			</AppBar>
			
			<center className={classes.padding}>
				<Typography variant='h3'>Welcome Back!</Typography>
				<br />
				<Button variant='contained' color='secondary' onClick={loadUsers}>Load users</Button>
				<br />
				<br />
				
			</center>
			<Container>
				<div className={classes.flex}>
					{
					users.map ((user) => (
						<Card key={user.id}>

							<CardMedia
								className={classes.image}
								image = {user.avatar} 
								title = {user.first_name}
							/>

							<CardContent>
								<Typography align='center'><strong>Name:</strong> {user.first_name + " " + user.last_name}</Typography>
								<Typography align='center'><strong>Email:</strong> {user.email}</Typography>
							</CardContent>

						</Card>
					))
					}
				</div>
			</Container>
		</>
	);
}

export default App;