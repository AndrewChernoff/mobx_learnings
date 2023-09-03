import { observer } from "mobx-react-lite"
import postsStore from "../stores/posts-store"
import { useEffect } from "react"
import { useStores } from "../stores/root-store-context"

const  Wrapper = observer(() => {


    const {posts, setPosts} = useStores().post
  
    useEffect(() => {
      setPosts()
    }, [])
  
  
    if (posts?.state === 'pending') {
      return <div>Loading...</div>
    }
  
    if (posts?.state === 'rejected') {
      return <div>Some error!</div>
    } 
    
    return (
      <div className="App">
      {posts?.value[0].title}
      </div>
    );
  })
  

export default Wrapper
