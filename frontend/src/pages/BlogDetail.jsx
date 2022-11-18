import {useState, useEffect} from 'react'
import MainContainer from '../components/MainContainer';
import { useParams} from 'react-router-dom';
import {
  Container, Paper, TextField,
  Stack
} from '@mui/material';
import {toast} from 'react-toastify';



import { useBlog } from '../middleware/contextHooks';

export default function BlogDetail() {
    const { id } = useParams();
 //   const navigate = useNavigate();

    const {
      blogs, currentBlog, getBlogById, toasts, 
      clearToasts,  getBlogs
    } = useBlog();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        if(!blogs) {
            getBlogs();
        } else if(!currentBlog || currentBlog?._id !== id) {
            getBlogById(id);
        }

        if(currentBlog?._id === id) {
            setBlog(currentBlog);
        }
        
        if(toasts){
            toasts.forEach(ele => {
                toast(ele.message, {type: ele.type})
            });
        }
    } , [currentBlog, id, toasts, clearToasts, getBlogById, blogs, getBlogs]);

    

    
    return (
        <MainContainer>
            <Container maxWidth='md' sx={{mt: 3, mb: 5}}>
                <Paper >
            <Stack spacing={2}>
                                <TextField
                                    label='Topic' name='topic' value={blog?.topic} 
                                    onChange={(e) => setBlog({...blog, topic: e.target.value})}
                                />
                                <TextField
                                    label='Content' name='content' value={blog?.content} 
                                    onChange={(e) => setBlog({...blog, content: e.target.value})}
                                    multiline minRows={5} maxRows={20}
                                />
                            </Stack>
                    
                </Paper>
            </Container>
        </MainContainer>
    )
}

