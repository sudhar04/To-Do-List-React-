import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './index.css'; 
import { useEffect, useState  } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
 
function App() {

  const getLocalItems = () => {
    try{
      const stored = localStorage.getItem("To-Do List");
      return stored ? JSON.parse(stored) : [];
    } catch (err){
      console.error("Failed to parse localStorage", err);
      return[];
    }
  };
  
  const [items, setItems] = useState(getLocalItems());

  const [newItem,setNewItem] = useState('')

  const [search,setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem("To-Do list",JSON.stringify(items));
  }, [items]);

  const addItem = (item) =>{
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id,checked :false,item};
    const listItems = [...items, addNewItem];
    setItems(listItems);
    
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item, checked: !item.checked}: item)
    setItems(listItems)
    
    }  
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id!==id )
    setItems(listItems)
    
    }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')
  }


  return (
    <div className='App'> 
      <Header 
        title = "To-Do list"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}/>
      <SearchItem
        search = {search}
        setSearch = {setSearch} />
      <Content 
        items ={(items || []).filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
        handleCheck ={handleCheck}
        handleDelete ={handleDelete}
      />
      <Footer 
        length ={(items || []).length}
      />
    </div>
  ) 
}

export default App;
