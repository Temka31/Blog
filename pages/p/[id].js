import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Box from '@material-ui/core/Box';
const Post = props => (
  <Layout>
    
      <Box display='flex' flexBasis='25%'>
      <input type="button" onclick="history.back(-2); return false;" value="Назад"/>

       </Box>
       <Box display='flex' flexBasis='50%' flexDirection = 'column' >  
            <img src={props.show.image.medium} width='300'/>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
       </Box>
    <Box display='flex'flexBasis='25%' >
      
    </Box>
    
    </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;