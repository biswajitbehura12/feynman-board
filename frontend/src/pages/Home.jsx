import {useState, useEffect} from 'react'
import {
    Grid, TextField, Button, Typography,
    CssBaseline, Paper, Box, Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Copyright
 from '../components/Copyright'
// #region --------------( ICONS )--------------
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// #endregion

import {useAuth} from '../middleware/contextHooks'

export default function Home() {
    const {registerUser, clearErrors, toasts, isAuthenticated} = useAuth();
    const navigate = useNavigate()
    const [user, setUser] = useState({
         username: ''
    })

    useEffect(() => {
        if(isAuthenticated) navigate('/blogs')

        if(toasts){
            toasts.forEach(ele => {
                toast(ele.message, {
                    type: ele.type
                })
            });
            clearErrors()
        }
    }, [toasts, isAuthenticated, clearErrors, navigate])

    const handleRegister = () => {
        const { username } = user
        if(!username) {
            toast('Please fill all the fields', {type: 'error'})
            return
        }
        registerUser(user)
    }
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            
            <Grid
                item xs={false}
                sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        mt: 8, display: 'flex', mx: 4,
                        flexDirection: 'column', alignItems: 'center'
                    }}
                >
                    <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                        <LockOutlinedIcon  />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Submit
                    </Typography>

                    <Grid container spacing={2} sx={{mt: 3}}>
    
                        <Grid item xs={12}>
                            <TextField
                                placeholder='Enter Your Username' name='username' 
                                label='username,' value={user.username} 
                                onChange={(e) => setUser({...user, username: e.target.value})}
                            />
                        </Grid>
                                             
                    </Grid>
                    <Button 
                        onClick={handleRegister}
                        fullWidth sx={{
                            mt: 3, mb: 2
                        }}
                    >
                        Submit
                    </Button>
                </Box>
                <Copyright sx={{mt: 4}} />
            </Grid>
        </Grid>
    );
}